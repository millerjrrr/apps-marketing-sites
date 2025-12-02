import { Center, useGLTF } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState, useMemo } from "react";

interface RotatingPhoneProps {
  screenshots: string[];
}

const RotatingPhone: React.FC<RotatingPhoneProps> = ({ screenshots }) => {
  const { scene } = useGLTF("/models/iPhone.glb");

  // React-safe render object
  const [renderPhone, setRenderPhone] = useState<THREE.Group | null>(null);

  // Mutable reference for rotation, materials, UV changes
  const phoneRef = useRef<THREE.Group | null>(null);

  // Clone + UV fix (runs once)
  useEffect(() => {
    const clone = scene.clone(true);

    const screenMesh = clone.getObjectByName("LLCOsMNMwTSiaFM_0") as THREE.Mesh;
    const uv = (screenMesh.geometry as THREE.BufferGeometry).attributes
      .uv as THREE.BufferAttribute;

    for (let i = 0; i < uv.count; i++) {
      const x = uv.getX(i);
      uv.setX(i, 0.5 + (x - 0.5) * 1.5);
    }

    uv.needsUpdate = true;

    phoneRef.current = clone; // mutable
    Promise.resolve().then(() => {
      setRenderPhone(clone);
    });
  }, [scene]);

  // Load textures
  const textures = useMemo(() => {
    return screenshots.map((src) => {
      const tex = new THREE.TextureLoader().load(src);
      // tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.repeat.x = -1;
      tex.offset.x = 1;
      return tex;
    });
  }, [screenshots]);

  // Change screenshot
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % screenshots.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  // Apply new texture
  useEffect(() => {
    if (!phoneRef.current) return;

    const screenMesh = phoneRef.current.getObjectByName(
      "LLCOsMNMwTSiaFM_0"
    ) as THREE.Mesh;

    screenMesh.material = new THREE.MeshBasicMaterial({
      map: textures[index],
      toneMapped: false,
    });
  }, [index, textures]);

  // Rotation animation
  const t = useRef(0);
  useFrame(() => {
    if (!phoneRef.current) return;

    t.current += 0.01;
    phoneRef.current.rotation.y = Math.PI * 0.9 + Math.sin(t.current * 2) * 0.2;
  });

  return (
    <Center key={renderPhone ? "ready" : "loading"}>
      <group scale={24}>
        {renderPhone && <primitive object={renderPhone} />}
      </group>
    </Center>
  );
};

interface RPhoneProps {
  scale?: number;
}

export const RPhone: React.FC<RPhoneProps> = ({ scale = 300 }) => {
  const width = Math.min(scale, window.innerWidth - 50);

  return (
    <div style={{ width, height: width * 2.3 }}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <RotatingPhone screenshots={["screenshots/Trainer.jpg"]} />
      </Canvas>
    </div>
  );
};

export default RPhone;
