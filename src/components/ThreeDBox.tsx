import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const createTexture = (draw: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context not available");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  draw(ctx, canvas);
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
};

const BoxMesh = () => {
  const materials = useMemo(() => {
    const crown = (ctx: CanvasRenderingContext2D, x: number, y: number, size = 200) => {
      ctx.fillStyle = "#2563eb";
      ctx.beginPath();
      ctx.moveTo(x, y + size);
      ctx.lineTo(x + size * 0.2, y + size * 0.4);
      ctx.lineTo(x + size * 0.4, y + size);
      ctx.lineTo(x + size * 0.5, y + size * 0.2);
      ctx.lineTo(x + size * 0.6, y + size);
      ctx.lineTo(x + size * 0.8, y + size * 0.4);
      ctx.lineTo(x + size, y + size);
      ctx.closePath();
      ctx.fill();
    };

    const front = createTexture((ctx) => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 1024, 1024);
      ctx.fillStyle = "#2563eb";
      ctx.fillRect(824, 0, 200, 1024);
      crown(ctx, 120, 80, 160);
    });

    const side = createTexture((ctx) => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 1024, 1024);
      ctx.fillStyle = "#2563eb";
      ctx.fillRect(700, 0, 60, 1024);
    });

    const top = createTexture((ctx) => {
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, 1024, 1024);
      crown(ctx, 360, 280, 300);
    });

    const bottom = createTexture((ctx) => {
      ctx.fillStyle = "#eff6ff";
      ctx.fillRect(0, 0, 1024, 1024);
    });

    return [
      new THREE.MeshStandardMaterial({ map: side }),
      new THREE.MeshStandardMaterial({ map: side }),
      new THREE.MeshStandardMaterial({ map: top }),
      new THREE.MeshStandardMaterial({ map: bottom }),
      new THREE.MeshStandardMaterial({ map: front }),
      new THREE.MeshStandardMaterial({ map: front }),
    ];
  }, []);

  return (
    <mesh rotation={[-0.3, 0.4, 0]}>
      <boxGeometry args={[1.6, 3.2, 0.64]} />
      {materials.map((material, index) => (
        <primitive key={index} attach={`material-${index}`} object={material} />
      ))}
    </mesh>
  );
};

export const ThreeDBox = () => (
  <Canvas
    className="h-[400px] w-full"
    camera={{ position: [3.2, 2.8, 4.4], fov: 40 }}
    shadows
  >
    <color attach="background" args={["#eef2ff"]} />
    <ambientLight intensity={0.6} />
    <directionalLight position={[5, 5, 2]} intensity={0.9} castShadow />
    <Suspense fallback={null}>
      <BoxMesh />
    </Suspense>
  </Canvas>
);

