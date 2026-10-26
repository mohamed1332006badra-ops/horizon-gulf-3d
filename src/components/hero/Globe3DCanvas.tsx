import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { SITE_CONFIG } from '../../config/siteContent';

interface Globe3DCanvasProps {
  isAutoRotate: boolean;
  onFocusGulfTrigger?: number;
}

// Convert Lat/Lng to Vector3 on sphere of given radius
function latLngToVector(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export const Globe3DCanvas = ({ isAutoRotate, onFocusGulfTrigger }: Globe3DCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGLError] = useState(() => {
    if (typeof document === 'undefined') return false;
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !gl;
  });
  const [activeTooltip, setActiveTooltip] = useState<{
    name: string;
    region: string;
    description: string;
    x: number;
    y: number;
  } | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const cloudsMeshRef = useRef<THREE.Mesh | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const mouseParallaxRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  
  // Focused directly on Arabian Gulf & Middle East
  const targetRotationRef = useRef({ x: 0.28, y: -2.42 });
  const currentRotationRef = useRef({ x: 0.28, y: -2.42 });
  const pulseRingsRef = useRef<THREE.Mesh[]>([]);
  const photonParticlesRef = useRef<{ curve: THREE.CubicBezierCurve3; t: number; speed: number; mesh: THREE.Mesh }[]>([]);
  
  // Cinematic fly-in camera control
  const cameraTargetZ = useRef(7.4);
  const cameraCurrentZ = useRef(11.2);

  // Trigger Gulf Focus from parent or controls
  const focusOnGulf = useCallback(() => {
    targetRotationRef.current = { x: 0.28, y: -2.42 };
  }, []);

  useEffect(() => {
    if (onFocusGulfTrigger !== undefined) {
      focusOnGulf();
    }
  }, [onFocusGulfTrigger, focusOnGulf]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasWebGLError) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera: Wide cinematic perspective
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, cameraCurrentZ.current);
    cameraRef.current = camera;

    // 3. Renderer with high-performance Tone Mapping
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.42;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lighting - Engineered for High-Definition Continent Detail & Dramatic Atmosphere
    // Ambient Light: Provides vibrant visibility of the continents & oceans
    const ambientLight = new THREE.AmbientLight(0x1e2d42, 2.3);
    scene.add(ambientLight);

    // Primary Sun Key Light: Positioned to directly illuminate the Arabian Gulf, Red Sea, Europe & Asia
    const sunLight = new THREE.DirectionalLight(0xfff5e0, 4.6);
    sunLight.position.set(-3.5, 4.0, 6.2);
    scene.add(sunLight);

    // Cyan Atmospheric Rim Light: Highlights the horizon limb on the dark hemisphere
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.8);
    rimLight.position.set(7.5, 2.0, -4.0);
    scene.add(rimLight);

    // Warm Earth-bounce Light from Southern Hemisphere
    const bounceLight = new THREE.DirectionalLight(0xd4af37, 1.4);
    bounceLight.position.set(-1.0, -5.5, 3.0);
    scene.add(bounceLight);

    // 5. Globe Group
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    
    // Earth's natural axial tilt (~23.4 degrees)
    globeGroup.rotation.z = 0.22;
    globeGroup.rotation.x = currentRotationRef.current.x;
    globeGroup.rotation.y = currentRotationRef.current.y;

    // Dynamic horizontal composition based on viewport width:
    // On desktop, offset globe to the left so it occupies the left 55% of the screen
    // leaving the right 45% for the Arabic headline with a clean, deep space backdrop
    const isDesktop = width >= 1024;
    globeGroup.position.set(isDesktop ? -1.85 : 0, isDesktop ? 0.05 : 0.65, 0);
    scene.add(globeGroup);

    const GLOBE_RADIUS = 3.25;

    // Texture Loader with error-resilience
    const textureLoader = new THREE.TextureLoader();
    const loadTex = (path: string) => {
      return textureLoader.load(
        path,
        undefined,
        undefined,
        (err) => console.warn(`Texture fallback handled for ${path}:`, err)
      );
    };

    const earthMap = loadTex('/images/earth-map.jpg');
    const earthLights = loadTex('/images/earth-lights.png');
    const earthNormal = loadTex('/images/earth-normal.jpg');
    const earthClouds = loadTex('/images/earth-clouds.png');

    [earthMap, earthLights, earthNormal, earthClouds].forEach((tex) => {
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
    });

    // 6. Photorealistic Earth Sphere Material
    const earthGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 96, 96);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthMap,
      normalMap: earthNormal,
      normalScale: new THREE.Vector2(0.95, 0.95),
      emissiveMap: earthLights,
      emissive: new THREE.Color(0xf59e0b), // Vibrant warm amber city lights
      emissiveIntensity: 3.2,
      roughness: 0.52,
      metalness: 0.18,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    // 7. Atmospheric Cloud Layer
    const cloudsGeometry = new THREE.SphereGeometry(GLOBE_RADIUS + 0.042, 64, 64);
    const cloudsMaterial = new THREE.MeshStandardMaterial({
      map: earthClouds,
      transparent: true,
      opacity: 0.36,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    cloudsMeshRef.current = cloudsMesh;
    globeGroup.add(cloudsMesh);

    // 8. Outer Radiant Atmospheric Scattering Halo (Shader)
    const atmosphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.14, 64, 64);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.66 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
          vec3 spaceCyan = vec3(0.14, 0.52, 0.98);
          vec3 warmGold = vec3(0.96, 0.82, 0.38);
          vec3 atmosphereColor = mix(spaceCyan, warmGold, intensity * 0.42);
          gl_FragColor = vec4(atmosphereColor, intensity * 0.95);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    globeGroup.add(atmosphereMesh);

    // 9. Inner Atmospheric Limb Haze (FrontSide Fresnel)
    const innerHazeGeo = new THREE.SphereGeometry(GLOBE_RADIUS + 0.015, 64, 64);
    const innerHazeMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vec3 viewDir = normalize(-vPosition);
          float rim = 1.0 - max(0.0, dot(vNormal, viewDir));
          rim = pow(rim, 3.4);
          vec3 hazeColor = mix(vec3(0.18, 0.58, 0.95), vec3(0.95, 0.76, 0.28), rim * 0.35);
          gl_FragColor = vec4(hazeColor, rim * 0.48);
        }
      `,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    const innerHazeMesh = new THREE.Mesh(innerHazeGeo, innerHazeMat);
    globeGroup.add(innerHazeMesh);

    // 10. Trade Nodes (Gulf, Jordan, Europe, Asia, Americas)
    const nodeVectors: { [key: string]: THREE.Vector3 } = {};
    const nodeMeshes: THREE.Mesh[] = [];
    pulseRingsRef.current = [];

    SITE_CONFIG.tradeNodes.forEach((node) => {
      const pos = latLngToVector(node.lat, node.lng, GLOBE_RADIUS + 0.045);
      nodeVectors[node.id] = pos;

      const isGulf = node.id === 'gulf';
      
      // Center Node Sphere
      const nodeGeo = new THREE.SphereGeometry(isGulf ? 0.08 : 0.055, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: isGulf ? 0xffea79 : 0xd4af37,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      nodeMesh.userData = { nodeId: node.id, ...node };
      globeGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);

      // Light Beacons extending upward
      const beamGeo = new THREE.CylinderGeometry(0.008, 0.008, isGulf ? 0.55 : 0.38, 8);
      beamGeo.translate(0, isGulf ? 0.275 : 0.19, 0);
      const beamMat = new THREE.MeshBasicMaterial({
        color: isGulf ? 0xfff0aa : 0x93c5fd,
        transparent: true,
        opacity: isGulf ? 0.9 : 0.65,
      });
      const beamMesh = new THREE.Mesh(beamGeo, beamMat);
      beamMesh.position.copy(pos);
      beamMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());
      globeGroup.add(beamMesh);

      // Pulsing Halo Rings
      const ringGeo = new THREE.RingGeometry(isGulf ? 0.09 : 0.065, isGulf ? 0.16 : 0.11, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isGulf ? 0xf59e0b : 0xd4af37,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos);
      ringMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), pos.clone().normalize());
      ringMesh.userData = { pulseSpeed: 0.022 + Math.random() * 0.01 };
      globeGroup.add(ringMesh);
      pulseRingsRef.current.push(ringMesh);
    });

    // 11. Glowing 3D Curved Trade Arcs
    const arcPairs = [
      ['gulf', 'jordan'],
      ['gulf', 'rotterdam'],
      ['gulf', 'singapore'],
      ['gulf', 'shanghai'],
      ['gulf', 'london'],
      ['jordan', 'rotterdam'],
      ['rotterdam', 'newyork'],
      ['singapore', 'shanghai'],
    ];

    photonParticlesRef.current = [];

    arcPairs.forEach(([fromId, toId]) => {
      const p1 = nodeVectors[fromId];
      const p2 = nodeVectors[toId];
      if (!p1 || !p2) return;

      const distance = p1.distanceTo(p2);
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const midLen = mid.length();
      // Parabolic altitude above sphere
      mid.normalize().multiplyScalar(midLen + Math.min(1.45, distance * 0.35));

      const p1Control = p1.clone().lerp(mid, 0.45);
      const p2Control = p2.clone().lerp(mid, 0.45);

      const curve = new THREE.CubicBezierCurve3(p1, p1Control, p2Control, p2);
      const points = curve.getPoints(56);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);

      const isGulfConnected = fromId === 'gulf' || toId === 'gulf';
      const arcMat = new THREE.LineBasicMaterial({
        color: isGulfConnected ? 0xf3c969 : 0x60a5fa,
        transparent: true,
        opacity: isGulfConnected ? 0.9 : 0.55,
      });

      const arcLine = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(arcLine);

      // Moving glowing photon along curve
      const photonGeo = new THREE.SphereGeometry(isGulfConnected ? 0.052 : 0.042, 8, 8);
      const photonMat = new THREE.MeshBasicMaterial({
        color: isGulfConnected ? 0xfff6c7 : 0xbbf7d0,
        transparent: true,
        opacity: 0.98,
      });
      const photonMesh = new THREE.Mesh(photonGeo, photonMat);
      globeGroup.add(photonMesh);

      photonParticlesRef.current.push({
        curve,
        t: Math.random(),
        speed: 0.0032 + Math.random() * 0.0035,
        mesh: photonMesh,
      });
    });

    // 12. Subtle Deep-Space Cosmic Starfield
    const starCount = 450;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 55;
      starPositions[i + 1] = (Math.random() - 0.5) * 55;
      starPositions[i + 2] = -14 - Math.random() * 30;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.08,
      transparent: true,
      opacity: 0.55,
    });
    const starMesh = new THREE.Points(starGeo, starMat);
    scene.add(starMesh);

    // Mouse and Drag Interaction
    let isMouseDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isMouseDown = true;
      isInteractingRef.current = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      // Parallax target calculation
      const normX = (clientX / window.innerWidth) * 2 - 1;
      const normY = -(clientY / window.innerHeight) * 2 + 1;
      mouseParallaxRef.current.targetX = normX * 0.12;
      mouseParallaxRef.current.targetY = normY * 0.12;

      if (isMouseDown) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;
        prevMouseX = clientX;
        prevMouseY = clientY;

        targetRotationRef.current.y += deltaX * 0.0055;
        targetRotationRef.current.x += deltaY * 0.0045;
        targetRotationRef.current.x = Math.max(-0.85, Math.min(0.85, targetRotationRef.current.x));
      }

      if (!isMouseDown && rendererRef.current && cameraRef.current && globeGroupRef.current) {
        const rect = rendererRef.current.domElement.getBoundingClientRect();
        mousePosRef.current = {
          x: ((clientX - rect.left) / rect.width) * 2 - 1,
          y: -((clientY - rect.top) / rect.height) * 2 + 1,
        };

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(mousePosRef.current.x, mousePosRef.current.y), cameraRef.current);
        const intersects = raycaster.intersectObjects(nodeMeshes);

        if (intersects.length > 0) {
          const data = intersects[0].object.userData;
          setActiveTooltip({
            name: data.name,
            region: data.region,
            description: data.description,
            x: clientX,
            y: clientY,
          });
          container.style.cursor = 'pointer';
        } else {
          setActiveTooltip(null);
          container.style.cursor = isMouseDown ? 'grabbing' : 'grab';
        }
      }
    };

    const handlePointerUp = () => {
      isMouseDown = false;
      setTimeout(() => {
        isInteractingRef.current = false;
      }, 700);
      container.style.cursor = 'grab';
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    domElement.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current || !globeGroupRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);

      const desktopNow = w >= 1024;
      globeGroupRef.current.position.set(desktopNow ? -1.85 : 0, desktopNow ? 0.05 : 0.65, 0);
    };

    window.addEventListener('resize', handleResize);

    // Reduced motion preference detection
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Animation loop with smooth camera fly-in and parallax
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      if (prefersReducedMotion) {
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
        return;
      }

      // Camera entrance fly-in lerp
      cameraCurrentZ.current += (cameraTargetZ.current - cameraCurrentZ.current) * 0.035;
      if (cameraRef.current) {
        cameraRef.current.position.z = cameraCurrentZ.current;
      }

      // Mouse Parallax damping
      mouseParallaxRef.current.x += (mouseParallaxRef.current.targetX - mouseParallaxRef.current.x) * 0.05;
      mouseParallaxRef.current.y += (mouseParallaxRef.current.targetY - mouseParallaxRef.current.y) * 0.05;

      // Autonomous rotation when idle
      if (isAutoRotate && !isInteractingRef.current) {
        targetRotationRef.current.y += 0.0012;
      }

      // Smooth damping lerp for rotation
      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.07;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.07;

      if (globeGroupRef.current) {
        globeGroupRef.current.rotation.x = currentRotationRef.current.x + mouseParallaxRef.current.y * 0.25;
        globeGroupRef.current.rotation.y = currentRotationRef.current.y + mouseParallaxRef.current.x * 0.25;
      }

      // Rotate cloud layer independently for atmospheric realism
      if (cloudsMeshRef.current) {
        cloudsMeshRef.current.rotation.y += 0.0003;
      }

      // Pulsing beacon rings
      pulseRingsRef.current.forEach((ring) => {
        const speed = ring.userData.pulseSpeed || 0.02;
        let scale = ring.scale.x + speed;
        if (scale > 2.4) scale = 1.0;
        ring.scale.set(scale, scale, 1);
        (ring.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.9 - (scale - 1) * 0.62);
      });

      // Photons along trade routes
      photonParticlesRef.current.forEach((item) => {
        item.t += item.speed;
        if (item.t > 1) item.t = 0;
        const pos = item.curve.getPoint(item.t);
        item.mesh.position.copy(pos);
      });

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    frameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      domElement.removeEventListener('mousedown', handlePointerDown);
      domElement.removeEventListener('touchstart', handlePointerDown);

      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudsGeometry.dispose();
      cloudsMaterial.dispose();
      atmosphereGeo.dispose();
      atmosphereMat.dispose();
      innerHazeGeo.dispose();
      innerHazeMat.dispose();

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [isAutoRotate, hasWebGLError]);

  return (
    <div className="relative w-full h-full select-none overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        aria-label="نموذج كوكبي ثلاثي الأبعاد تفاعلي للكرة الأرضية وشبكات التجارة الدولية"
      />

      {hasWebGLError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#070B14]/90 text-center">
          <div className="w-56 h-56 rounded-full border border-[#D4AF37]/30 bg-gradient-to-tr from-[#05070D] via-[#0B1528] to-[#16233B] flex items-center justify-center relative mb-6 shadow-2xl">
            <div className="absolute inset-4 rounded-full border border-dashed border-[#F3C969]/40 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="text-center p-4">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] block font-en">GLOBAL TRADE CORE</span>
              <span className="text-base font-bold text-white mt-1 block">أفق الخليج</span>
            </div>
          </div>
          <p className="text-sm text-[#A8B0BE] max-w-md">
            تم تفعيل العرض الثنائي الأبعاد البديل لضمان التوافق التام مع متصفحك.
          </p>
        </div>
      )}

      {/* Dynamic Node Tooltip */}
      {activeTooltip && (
        <div
          className="fixed pointer-events-none z-50 px-4 py-2.5 rounded-xl bg-[#070B14]/95 border border-[#D4AF37]/45 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-md text-right transition-all transform -translate-x-1/2 -translate-y-full"
          style={{
            left: `${activeTooltip.x}px`,
            top: `${activeTooltip.y - 16}px`,
          }}
        >
          <div className="flex items-center gap-2 mb-1 justify-end">
            <span className="text-[11px] font-bold text-[#F3C969] font-en uppercase tracking-wider">{activeTooltip.region}</span>
            <span className="w-2 h-2 rounded-full bg-[#F3C969] animate-ping" />
          </div>
          <p className="text-sm font-bold text-[#F5F4EF]">{activeTooltip.name}</p>
          <p className="text-xs text-[#A8B0BE] mt-0.5 max-w-xs leading-relaxed">{activeTooltip.description}</p>
        </div>
      )}
    </div>
  );
};
