import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import useStore from "../store/useStore";

function TextGenerate({ text, hovered, position, animate, color, name }) {
  const ref = useRef();

  const textProps = {
    fontSize: 0.01,
    font: process.env.PUBLIC_URL + "/Roboto-MediumItalic.ttf",
  };

  const activeMesh = useStore((state) => state.activeMesh);

  useFrame(() => {
    if (animate)
      ref.current.position.y = THREE.MathUtils.lerp(
        ref.current.position.y,
        activeMesh === name || hovered ? 0.05 : 0,
        0.08
      );
  });
  return (
    <Text
      ref={ref}
      position={position}
      depthTest={false}
      material-toneMapped={false}
      color={color}
      {...textProps}
    >
      {!animate ? text : (activeMesh === name || hovered) && text}
    </Text>
  );
}

export default TextGenerate;
