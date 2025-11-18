import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface ThreeDVialProps {
  color?: string;
  label?: string;
  autoRotate?: boolean;
}

const VialMesh = ({ color = "#2563eb", label = "PRIME" }: { color: string; label: string }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  // Create label texture
  const labelTexture = (() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 512, 512);

    // Stripes
    ctx.fillStyle = color;
    ctx.fillRect(40, 0, 20, 512);
    ctx.fillStyle = `${color}99`;
    ctx.fillRect(80, 0, 15, 512);

    // Text
    ctx.fillStyle = color;
    ctx.font = "bold 72px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.save();
    ctx.translate(256, 256);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(label, 0, 25);
    ctx.restore();

    // Dosage
    ctx.font = "32px Inter, sans-serif";
    ctx.fillStyle = "#666";
    ctx.save();
    ctx.translate(256, 356);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("PHARMACEUTICAL GRADE", 0, 15);
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  })();

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Glass vial body */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 3, 32]} />
        <meshPhysicalMaterial
          color="#e8f4ff"
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
          thickness={0.5}
        />
      </mesh>

      {/* Liquid inside */}
      <mesh position={[0, -0.3, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 2.4, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>

      {/* Metal cap */}
      <mesh position={[0, 1.6, 0]} castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.3, 32]} />
        <meshStandardMaterial
          color="#7c7c7c"
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Label */}
      <mesh position={[0, 0, 0.41]}>
        <planeGeometry args={[3, 0.8]} />
        <meshStandardMaterial map={labelTexture} />
      </mesh>
    </group>
  );
};

export const ThreeDVial = ({ color = "#2563eb", label = "PRIME", autoRotate = true }: ThreeDVialProps) => {
  return (
    <Canvas
      className="h-[280px] w-full"
      camera={{ position: [2.5, 1.5, 2.5], fov: 45 }}
      shadows
    >
      <color attach="background" args={["#f8fafc"]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} castShadow />
      <spotLight position={[-3, 3, -2]} intensity={0.5} />
      <Suspense fallback={null}>
        <VialMesh color={color} label={label} />
      </Suspense>
      <OrbitControls
        enablePan={false}
        autoRotate={autoRotate}
        autoRotateSpeed={2}
        maxPolarAngle={Math.PI / 2}
        minDistance={3}
        maxDistance={6}
      />
    </Canvas>
  );
};

