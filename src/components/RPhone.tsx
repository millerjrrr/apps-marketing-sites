import { Center, useGLTF } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState, useMemo } from "react";
import { getSiteKey } from "../getSiteContent";

const siteKey = getSiteKey();

interface RPhoneProps {
  name: "iPhone" | "sPhone" | "gPhone-L" | "gPhone-R";
  screenshots?: string[];
  scale?: number;
}

const RotatingPhone: React.FC<RPhoneProps> = ({
  name = "iPhone",
  screenshots = [`app-specific/${siteKey}/screenshots/1.jpg`],
}) => {
  let source = "/models/iPhone.glb";
  let screenMeshName = "LLCOsMNMwTSiaFM_0";

  switch (name) {
    case "sPhone":
      source = "/models/sPhone.glb";
      screenMeshName = "Object_6";
      break;
    case "gPhone-L":
    case "gPhone-R":
      source = "/models/gPhone.glb";
      screenMeshName = "Object_20";
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

    // VERY IMPORTANT: clone geometry before changing UVs
    screenMesh.geometry = screenMesh.geometry.clone();

    const uv = (screenMesh.geometry as THREE.BufferGeometry).attributes.uv;

    switch (name) {
      case "iPhone":
        for (let i = 0; i < uv.count; i++) {
          const x = uv.getX(i);
          uv.setX(i, 0.5 + (x - 0.5) * 2.2);
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
      case "gPhone-L":
      case "gPhone-R":
        for (let i = 0; i < uv.count; i++) {
          const x = uv.getX(i);
          uv.setX(i, 0.5 + (x - 0.5) * 1.2);
          const y = uv.getY(i);
          uv.setY(i, 0.5 + (y - 0.5) * 1.1);
        }
        uv.needsUpdate = true;
        uvAdjusted.current = true;
        break;
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
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.magFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      switch (name) {
        case "iPhone":
          tex.repeat.x = -1;
          tex.offset.x = 1;
          break;
        case "sPhone":
          tex.repeat.x = -1;
          tex.offset.x = 1;
          break;
        case "gPhone-L":
        case "gPhone-R":
          tex.repeat.x = 1;
          tex.offset.x = 0;
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
      screenMeshName,
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
    scroll?: number,
  ) => {
    x: number;
    y: number;
    z: number;
  };

  let scale;

  switch (name) {
    case "iPhone":
      rotateFunction = (current: number, scroll?: number) => ({
        x: 0,
        y:
          Math.PI * 0.9 +
          Math.sin(current * 2) * 0.2 -
          (scroll ? scroll * 3 : 0),
        z: 0,
      });
      scale = 21;
      break;
    case "sPhone":
      rotateFunction = (current: number, scroll?: number) => ({
        x: Math.PI / 2 - 0.1,
        y: 0,
        z:
          Math.PI +
          Math.tan(
            current * (scroll && scroll > 0.25 && scroll < 0.75 ? 1 : 2),
          ) *
            0.2,
      });
      scale = 1.3;
      break;
    case "gPhone-L":
      rotateFunction = (current: number) => ({
        x: 0,
        y: -0.7 - Math.sin(current * 1.5) * 0.05,
        z: 0,
      });
      scale = 22;
      break;
    case "gPhone-R":
      rotateFunction = (current: number) => ({
        x: 0,
        y: 0.7 + Math.sin(current * 1.5) * 0.05,
        z: 0,
      });
      scale = 22;
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

export const RPhone: React.FC<RPhoneProps> = ({
  scale = 350,
  screenshots = ["1"],
  name,
}) => {
  let width = Math.min(scale, window.innerWidth - 50);
  let height = width * 2.3;
  if (name === "gPhone-L" || name === "gPhone-R") {
    width = Math.min(window.innerWidth / 2 - 30, scale * 0.9);
    height = width * 2.7;
  }

  const position = new THREE.Vector3(0, 0, 3);

  const fileRoutes = screenshots.map(
    (screenshotName) =>
      `app-specific/${siteKey}/screenshots/${screenshotName}.jpg`,
  );

  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Canvas camera={{ position }}>
        <ambientLight intensity={name === "iPhone" ? 0.7 : 10} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <RotatingPhone screenshots={fileRoutes} name={name} />
      </Canvas>
    </div>
  );
};

export default RPhone;
