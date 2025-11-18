import { Suspense, useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

interface ProductDisplay3DProps {
  liquidColor?: string;
  productName?: string;
}

const createTexture = (draw: (ctx: CanvasRenderingContext2D) => void) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context not available");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  draw(ctx);
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  return texture;
};

const BoxMesh = ({ position }: { position: [number, number, number] }) => {
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
    <mesh position={position} rotation={[-0.15, 0.4, 0]} castShadow>
      <boxGeometry args={[1.4, 2.8, 1.68]} />
      {materials.map((material, index) => (
        <primitive key={index} attach={`material-${index}`} object={material} />
      ))}
    </mesh>
  );
};

const VialMesh = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Group>(null);

  return (
    <group ref={meshRef} position={position} rotation={[-0.15, -0.4, 0]}>
      {/* Glass vial body - clear with white base */}
      <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.52, 0.52, 1.6, 64]} />
        <meshPhysicalMaterial
          color="#f8fafc"
          transparent
          opacity={0.25}
          roughness={0.05}
          metalness={0.1}
          transmission={0.88}
          thickness={0.3}
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          ior={1.5}
          envMapIntensity={0.2}
          reflectivity={0.95}
          specularIntensity={1.2}
          specularColor="#ffffff"
        />
      </mesh>
      
      {/* Inner white base matching box color */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.50, 0.50, 1.58, 64]} />
        <meshStandardMaterial
          color="#f8fafc"
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Glass shoulder */}
      <mesh position={[0, 0.85, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.52, 0.3, 64]} />
        <meshPhysicalMaterial
          color="#f8fafc"
          transparent
          opacity={0.25}
          roughness={0.05}
          metalness={0.1}
          transmission={0.88}
          thickness={0.3}
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          ior={1.5}
          envMapIntensity={0.2}
          reflectivity={0.95}
          specularIntensity={1.2}
          specularColor="#ffffff"
        />
      </mesh>
      
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.18, 0.50, 0.28, 64]} />
        <meshStandardMaterial
          color="#f8fafc"
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Glass neck */}
      <mesh position={[0, 1.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.2, 64]} />
        <meshPhysicalMaterial
          color="#f8fafc"
          transparent
          opacity={0.25}
          roughness={0.05}
          metalness={0.1}
          transmission={0.88}
          thickness={0.3}
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          ior={1.5}
          envMapIntensity={0.2}
          reflectivity={0.95}
          specularIntensity={1.2}
          specularColor="#ffffff"
        />
      </mesh>
      
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.18, 64]} />
        <meshStandardMaterial
          color="#f8fafc"
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Glass head/rim */}
      <mesh position={[0, 1.25, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.24, 0.2, 0.15, 64]} />
        <meshPhysicalMaterial
          color="#f8fafc"
          transparent
          opacity={0.25}
          roughness={0.05}
          metalness={0.1}
          transmission={0.88}
          thickness={0.3}
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          ior={1.5}
          envMapIntensity={0.2}
          reflectivity={0.95}
          specularIntensity={1.2}
          specularColor="#ffffff"
        />
      </mesh>
      
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.22, 0.18, 0.13, 64]} />
        <meshStandardMaterial
          color="#f8fafc"
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Liquid inside - fills the body */}
      <mesh position={[0, -0.25, 0]} castShadow>
        <cylinderGeometry args={[0.48, 0.48, 1.3, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.9}
          roughness={0.08}
          metalness={0.3}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Aluminum crimp cap - base ring */}
      <mesh position={[0, 1.28, 0]} castShadow>
        <cylinderGeometry args={[0.26, 0.26, 0.08, 48]} />
        <meshStandardMaterial
          color="#a8adb8"
          roughness={0.38}
          metalness={0.88}
        />
      </mesh>

      {/* Cap main body */}
      <mesh position={[0, 1.38, 0]} castShadow>
        <cylinderGeometry args={[0.26, 0.24, 0.12, 48]} />
        <meshStandardMaterial
          color="#b8bcc4"
          roughness={0.32}
          metalness={0.92}
        />
      </mesh>

      {/* Cap top flat surface */}
      <mesh position={[0, 1.47, 0]} castShadow>
        <cylinderGeometry args={[0.24, 0.26, 0.06, 48]} />
        <meshStandardMaterial
          color="#c5c9d1"
          roughness={0.28}
          metalness={0.94}
        />
      </mesh>
    </group>
  );
};

export const ProductDisplay3D = ({ liquidColor = "#a78bfa", productName = "NPP 100" }: ProductDisplay3DProps) => {
  return (
    <Canvas
      className="h-[450px] w-full"
      camera={{ position: [0, 1.8, 7], fov: 35 }}
      shadows
    >
      <color attach="background" args={["#a0a049"]} />
      
      {/* Lighting - Enhanced for glass shine effect */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 3]} intensity={2.0} color="#ffffff" castShadow />
      <directionalLight position={[-4, 6, -3]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[3, 2, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[2, 5, 2]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-2, 4, 4]} intensity={0.8} color="#ffffff" />
      <pointLight position={[0, 6, -2]} intensity={0.6} color="#ffffff" />
      <spotLight position={[2, 8, 4]} intensity={2.0} angle={0.3} penumbra={0.8} color="#ffffff" castShadow />
      <spotLight position={[-2, 7, 3]} intensity={1.5} angle={0.35} penumbra={0.9} color="#ffffff" />

      {/* Ground plane for shadow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.15} />
      </mesh>

      <Suspense fallback={null}>
        <BoxMesh position={[-1.2, 0, 0]} />
        <VialMesh position={[1, 0, 0]} color={liquidColor} />
      </Suspense>
    </Canvas>
  );
};

