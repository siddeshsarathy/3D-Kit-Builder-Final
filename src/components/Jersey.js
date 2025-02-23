import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Jersey = ({ color }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.5, 2, 1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Jersey;
