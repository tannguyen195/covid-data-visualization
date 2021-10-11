import "./App.css";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, Html } from "@react-three/drei";

import Scene from "./components/Scene.js";
import Lights from "./components/Lights";
import CameraControl from "./components/CameraControl.js";
import StatisticPanel from "./components/StatisticPanel.js";
import ColorScale from "./components/ColorScale.js";
import Fallback from "./components/Fallback";

import useStore from "./store/useStore.js";
import { normalizeLocation } from "./utils/normalize.js";
import * as THREE from "three";

const App = () => {
  const setData = useStore((state) => state.setData);
  const setError = useStore((state) => state.setError);
  const setLoading = useStore((state) => state.setLoading);

  useEffect(() => {
    //fetch data
    fetch("https://static.pipezero.com/covid/data.json")
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        const locations = normalizeLocation(data.locations);
        setData({ ...data, locations });
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <StatisticPanel />
      <ColorScale />
      <Canvas
        dpr={[1, 1.5]}
        shadows
        camera={{
          position: [18, 19, 36],
          fov: 30,
        }}
        colorManagement
        onCreated={({ gl }) => {
          gl.setClearColor("#659dbd");
          gl.shadowMap.autoUpdate = false;
          gl.shadowMap.needsUpdate = true;
        }}
      >
        <Stats />
        <OrbitControls attach="orbitControls" />
        <Lights />
        <CameraControl />
        <Suspense
          fallback={
            <Html fullscreen>
              <Fallback />
            </Html>
          }
        >
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
