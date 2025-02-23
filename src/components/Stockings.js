import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Stockings = ({ color }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[0.5, 1.5, 0.5]}>
      <cylinderGeometry args={[0.3, 0.3, 1.5, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Stockings;
