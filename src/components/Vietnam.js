/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Province from "./Province";
import { getProvinceByName, generateColor } from "../utils/normalize";
import useStore from "../store/useStore";
export default function Vietnam(props) {
  const group = useRef();

  const { scene } = useGLTF(process.env.PUBLIC_URL + "/map.gltf");
  const data = useStore((state) => state.data);

  const Provinces = () => {
    let provinces = [];
    scene.traverse((child) => {
      if (child.isMesh) {
        const province = getProvinceByName(child.name, data.locations);
        const color = generateColor(province);

        provinces.push(
          <Province
            position={child.position}
            key={child.name}
            name={child.name}
            geometry={child.geometry}
            color={color}
            province={province}
          />
        );
      }
    });
    return provinces;
  };

  return (
    <group ref={group} {...props} dispose={null} position={[-10, 0, 5]}>
      {data && <Provinces />}
    </group>
  );
}

useGLTF.preload(process.env.PUBLIC_URL + "/map.gltf");