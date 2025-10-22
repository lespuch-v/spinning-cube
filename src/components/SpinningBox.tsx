import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  position?: [number, number, number];
  stopthespin: boolean;
};

export function SpinningBox({ position = [0, 0, 0], stopthespin }: Props) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (!stopthespin) {
      ref.current.rotation.x = 0;
      ref.current.rotation.y = 0;
      ref.current.scale.x = 1;
      ref.current.scale.y = 1;
      
    } else {
      ref.current.rotation.x += delta * 0.8;
      ref.current.rotation.y += delta * 1.0;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#7aa2f7" metalness={0.5} roughness={0.4} />
    </mesh>
  );
}
