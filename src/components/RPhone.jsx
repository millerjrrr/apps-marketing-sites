import { Center, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

function RotatingPhone({ screenshots = [] }) {
  const gltf = useGLTF("/models/iPhone.glb");

  const phone = gltf.scene;

  // find the screen mesh
  const screenMesh = phone.getObjectByName("LLCOsMNMwTSiaFM_0");
  const uv = screenMesh.geometry.attributes.uv;

  // shrink x coordinates towards center
  for (let i = 0; i < uv.count; i++) {
    const x = uv.getX(i);

    // shrink to center:
    const shrink = 1.5; // try 0.85 → 0.95
    const centered = 0.5 + (x - 0.5) * shrink;

    uv.setX(i, centered);
  }

  uv.needsUpdate = true;

  const textures = screenshots.map((src) => {
    const tex = new THREE.TextureLoader().load(src);
    tex.minFilter = THREE.LinearFilter; // prevents heavy blurring
    tex.magFilter = THREE.NearestFilter; // keeps sharpness
    tex.generateMipmaps = false; // stops smoothing
    tex.repeat.x = -1;
    tex.offset.x = 1;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;

    return tex;
  });

  const [index, setIndex] = useState(0);

  // update every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % screenshots.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  // apply current texture
  if (screenMesh) {
    screenMesh.material = new THREE.MeshBasicMaterial({
      map: textures[index],
      toneMapped: false,
    });
  }

  const t = useRef(0);

  // rotate phone slowly
  useFrame(() => {
    t.current += 0.005;
    phone.rotation.y = Math.PI * 0.93 + Math.sin(t.current * 0.6) * 0.4;
  });

  return (
    <Center>
      <group scale={21}>
        <primitive object={phone} />
      </group>
    </Center>
  );
}

export default function RPhone({ scale = 300 }) {
  return (
    <div style={{ width: scale, height: scale * 2.5 }}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        {/* Lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <RotatingPhone screenshots={["screenshots/Trainer.jpg"]} />
      </Canvas>
    </div>
  );
}
