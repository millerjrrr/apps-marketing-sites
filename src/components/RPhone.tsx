import { Center, useGLTF } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState, useMemo } from "react";

interface RotatingPhoneProps {
  screenshots: string[];
  name: string;
}

const RotatingPhone: React.FC<RotatingPhoneProps> = ({
  screenshots,
  name = "iPhone",
}) => {
  let source = "/models/iPhone.glb";
  let screenMeshName = "LLCOsMNMwTSiaFM_0";

  switch (name) {
    case "gPhone":
      source = "/models/gPhone.glb";
      screenMeshName = "Object_20";
      break;
    case "sPhone":
      source = "/models/sPhone.glb";
      screenMeshName = "Object_6";
      break;
  }

  const { scene } = useGLTF(source);
  console.log(scene);

  const [renderPhone, setRenderPhone] = useState<THREE.Group | null>(null);

  const phoneRef = useRef<THREE.Group | null>(null);
  const uvAdjusted = useRef(false);

  //scroll rotation logic
  const scrollProgress = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      // Normalized scroll progress: 0 to 1
      scrollProgress.current = window.scrollY / maxScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const clone = scene.clone(true);

    // FIX: recenter if necessary
    if (name !== "iPhone") {
      const root = clone.children[0]; // "Sketchfab_model"

      const box = new THREE.Box3().setFromObject(root);
      const center = new THREE.Vector3();
      box.getCenter(center);

      // Shift the whole model so its visual center becomes (0,0,0)
      root.position.x -= center.x;
      root.position.y -= center.y;
      root.position.z -= center.z;
    }

    const screenMesh = clone.getObjectByName(screenMeshName) as THREE.Mesh;
    const uv = (screenMesh.geometry as THREE.BufferGeometry).attributes
      .uv as THREE.BufferAttribute;

    if (!uvAdjusted.current) {
      switch (name) {
        case "iPhone":
          for (let i = 0; i < uv.count; i++) {
            const x = uv.getX(i);
            uv.setX(i, 0.5 + (x - 0.5) * 2.2);
          }
          uv.needsUpdate = true;
          uvAdjusted.current = true;
          break;
        case "gPhone":
          for (let i = 0; i < uv.count; i++) {
            const x = uv.getX(i);
            uv.setX(i, 0.5 + (x - 0.5) * 1.2);
            const y = uv.getY(i);
            uv.setY(i, 0.5 + (y - 0.5) * 1.1);
          }
          uv.needsUpdate = true;
          uvAdjusted.current = true;
          break;
        case "sPhone":
          {
            let minV = Infinity;
            let maxV = -Infinity;

            for (let i = 0; i < uv.count; i++) {
              const v = uv.getY(i);
              if (v < minV) minV = v;
              if (v > maxV) maxV = v;
            }

            for (let i = 0; i < uv.count; i++) {
              const v = uv.getY(i);
              const newV = (3.1 * (maxV - v)) / (maxV - minV);
              uv.setY(i, newV);
            }
            let minU = Infinity;
            let maxU = -Infinity;

            for (let i = 0; i < uv.count; i++) {
              const u = uv.getX(i);
              if (u < minU) minU = u;
              if (u > maxU) maxU = u;
            }

            const centerU = (minU + maxU) / 2;

            const expand = 4.1;

            console.log(minU, maxU, centerU, uv.getX(uv.count / 2), uv.count);

            for (let i = 0; i < uv.count; i++) {
              const u = uv.getX(i);
              const newU = centerU / 2.05 + (u - centerU) * expand;
              uv.setX(i, newU);
            }

            uv.needsUpdate = true;
            uvAdjusted.current = true;
          }
          break;
      }
    }

    phoneRef.current = clone; // mutable
    Promise.resolve().then(() => {
      setRenderPhone(clone);
    });
  }, [name, scene, screenMeshName]);

  // Load textures
  const textures = useMemo(() => {
    return screenshots.map((src) => {
      const tex = new THREE.TextureLoader().load(src);
      // tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      switch (name) {
        case "iPhone":
          tex.repeat.x = -1;
          tex.offset.x = 1;
          break;
        case "gPhone":
          tex.repeat.x = 1;
          tex.offset.x = 0;
          break;
        case "sPhone":
          tex.repeat.x = -1;
          tex.offset.x = 1;
          break;
      }

      return tex;
    });
  }, [name, screenshots]);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % screenshots.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  useEffect(() => {
    if (!phoneRef.current) return;

    const screenMesh = phoneRef.current.getObjectByName(
      screenMeshName
    ) as THREE.Mesh;

    screenMesh.material = new THREE.MeshBasicMaterial({
      map: textures[index],
      toneMapped: false,
    });
  }, [index, textures, screenMeshName]);

  // Rotation animation
  const t = useRef(0);

  let rotateFunction: (
    current: number,
    scroll?: number
  ) => {
    x: number;
    y: number;
    z: number;
  };

  let scale = 23;

  switch (name) {
    case "iPhone":
      rotateFunction = (current: number, scroll?: number) => ({
        x: 0,
        y:
          Math.PI * 0.9 +
          Math.sin(current * 2) * 0.2 +
          (scroll ? scroll * 3 : 0),
        z: 0,
      });
      break;
    case "gPhone":
      rotateFunction = (current: number) => ({
        x: 0,
        y: Math.tan(current * 2) * 0.2,
        z: 0,
      });
      scale = 22;
      break;
    case "sPhone":
      rotateFunction = (current: number, scroll?: number) => ({
        x: Math.PI / 2 - 0.1,
        y: 0,
        z: (scroll ? scroll * 3 : 0) + Math.sin(current * 2) * 0.1,
      });
      scale = 1.3;
      break;
  }

  useFrame(() => {
    if (!phoneRef.current) return;

    t.current += 0.01;
    const { x, y, z } = rotateFunction(t.current, scrollProgress.current);

    phoneRef.current.rotation.set(x, y, z);
  });

  return (
    <Center key={renderPhone ? "ready" : "loading"}>
      <group scale={scale}>
        {renderPhone && <primitive object={renderPhone} />}
      </group>
    </Center>
  );
};

interface RPhoneProps {
  name: "iPhone" | "sPhone" | "gPhone";
  screenshots?: string[];
  scale?: number;
}

export const RPhone: React.FC<RPhoneProps> = ({
  scale = 300,
  screenshots = ["screenshots/Trainer.jpg"],
  name,
}) => {
  const width = Math.min(scale, window.innerWidth - 50);

  let position = new THREE.Vector3(0, 0, 3);
  switch (name) {
    case "sPhone":
      position = new THREE.Vector3(0, 0, 3);
      break;
    case "gPhone":
      position = new THREE.Vector3(0, 0, 3);
      break;
  }

  return (
    <div
      style={{
        width,
        height: width * 2.3,
        overflow: "visible",
      }}
    >
      <Canvas camera={{ position }}>
        <ambientLight intensity={10} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <RotatingPhone screenshots={screenshots} name={name} />
      </Canvas>
    </div>
  );
};

export default RPhone;
