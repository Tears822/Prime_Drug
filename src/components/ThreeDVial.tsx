import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

interface ThreeDVialProps {
  color?: string;
  label?: string;
  autoRotate?: boolean;
}

const VialMesh = ({ color = "#2563eb", label = "PRIME" }: { color: string; label: string }) => {
  const meshRef = useRef<THREE.Group>(null);

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Glass vial body - main cylinder */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.45, 0.45, 3.2, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.15}
          roughness={0.05}
          metalness={0.0}
          transmission={0.95}
          thickness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          ior={1.5}
        />
      </mesh>

      {/* Glass shoulder/neck */}
      <mesh position={[0, 1.7, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.45, 0.4, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.15}
          roughness={0.05}
          metalness={0.0}
          transmission={0.95}
          thickness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          ior={1.5}
        />
      </mesh>

      {/* Glass top rim */}
      <mesh position={[0, 1.95, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.32, 0.3, 0.1, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.15}
          roughness={0.05}
          metalness={0.0}
          transmission={0.95}
          thickness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          ior={1.5}
        />
      </mesh>

      {/* Liquid inside */}
      <mesh position={[0, -0.2, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 2.6, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Aluminum crimp cap - main body */}
      <mesh position={[0, 2.1, 0]} castShadow>
        <cylinderGeometry args={[0.38, 0.35, 0.25, 32]} />
        <meshStandardMaterial
          color="#b8bcc4"
          roughness={0.4}
          metalness={0.85}
        />
      </mesh>

      {/* Cap top */}
      <mesh position={[0, 2.25, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.38, 0.05, 32]} />
        <meshStandardMaterial
          color="#c5c9d1"
          roughness={0.35}
          metalness={0.9}
        />
      </mesh>

      {/* Cap ring detail */}
      <mesh position={[0, 2.0, 0]} castShadow>
        <cylinderGeometry args={[0.36, 0.36, 0.08, 32]} />
        <meshStandardMaterial
          color="#a8adb8"
          roughness={0.45}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
};

export const ThreeDVial = ({ color = "#2563eb", label = "PRIME", autoRotate = true }: ThreeDVialProps) => {
  return (
    <Canvas
      className="h-[280px] w-full"
      camera={{ position: [2.5, 2, 2.5], fov: 45 }}
      shadows
    >
      <color attach="background" args={["#ffffff"]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 3]} intensity={1.5} castShadow />
      <directionalLight position={[-3, 5, -2]} intensity={0.8} />
      <pointLight position={[0, 5, 0]} intensity={0.6} />
      <Suspense fallback={null}>
        <VialMesh color={color} label={label} />
      </Suspense>
    </Canvas>
  );
};

