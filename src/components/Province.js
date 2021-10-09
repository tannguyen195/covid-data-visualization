import TextGenerate from "./TextGenerate";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useStore from "../store/useStore";
import { normalizeNumber } from "../utils/normalize";
function Province({ name, geometry, position, color, province }) {
  const ref = useRef();

  const [hovered, set] = useState(false);
  const setCameraPosition = useStore((state) => state.setCameraPosition);
  const activeMesh = useStore((state) => state.activeMesh);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = `pointer`;
      return () => (document.body.style.cursor = `auto`);
    }
  }, [hovered]);

  useFrame(() => {
    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      hovered || activeMesh === name ? 0.01 : 0,
      0.05
    );
  });

  return (
    <group
      name={name}
      ref={ref}
      onClick={() => {
        setCameraPosition({ activeMesh: name });
      }}
      onPointerOver={(e) => set(true)}
      onPointerOut={() => set(false)}
      position={position}
    >
      <TextGenerate
        name={name}
        animate={false}
        position={[0, 0.01, 0.01]}
        text={province.name}
        hovered={hovered}
      />
      <TextGenerate
        name={name}
        color={"#111"}
        animate={true}
        position={[0, 0.01, -0.05]}
        text={`Số ca nhiễm: ${normalizeNumber(province.cases)}
           Tử vong: ${normalizeNumber(province.death)}
           Hôm nay: +${normalizeNumber(province.casesToday)}`}
        hovered={hovered}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        material={
          new THREE.MeshStandardMaterial({
            color: color,
          })
        }
      ></mesh>
    </group>
  );
}

export default Province;
