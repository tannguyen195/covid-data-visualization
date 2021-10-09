import { useFrame } from "@react-three/fiber";
import { useState } from "react";

import useStore from "../store/useStore";
import * as THREE from "three";
const CameraControl = () => {
  const activeMesh = useStore((state) => state.activeMesh);
  const isResetCamera = useStore((state) => state.isResetCamera);
  const resetCamera = useStore((state) => state.resetCamera);
  const [activeCameraMesh, setActiveCameraMesh] = useState("");

  useFrame(({ camera, scene }) => {
    let target = new THREE.Vector3();
    if (activeCameraMesh !== activeMesh && activeMesh) {
      scene.getObjectByName(activeMesh)?.getWorldPosition(target);

      const cameraPosition = {
        x: target.x,
        y: target.y + 3,
        z: target.z + 7,
      };

      camera.position.lerp(cameraPosition, 0.05);

      scene.orbitControls?.target.lerp(target, 0.05);
      scene.orbitControls?.update();

      const diff = camera.position.clone().sub(cameraPosition).length();

      if (diff < 1) setActiveCameraMesh(activeMesh);
    }

    if (isResetCamera) {
      const cameraPosition = {
        x: 0,
        y: 90,
        z: 10,
      };

      camera.position.lerp(cameraPosition, 0.05);
      scene.orbitControls?.target.lerp({ x: 0, y: 0, z: 0 }, 0.05);
      scene.orbitControls?.update();
      const diff = camera.position.clone().sub(cameraPosition).length();

      if (diff < 1) resetCamera(false);
    }
  });
  return null;
};

export default CameraControl;
