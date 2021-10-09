
import Vietnam from "./Vietnam";
const Scene = () => {

  return (
    <>
     
      <mesh receiveShadow position={[0, -0.2, 0]} rotation-x={-Math.PI / 2}>
        <planeBufferGeometry args={[200, 200, ]} />
        <shadowMaterial transparent opacity={0.5} />
      </mesh>

      <Vietnam scale={10} />
    </>
  );
};

export default Scene;
