
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        penumbra={1}
        angle={0.35}
        castShadow
        position={[40, 200, 0]}
        intensity={0.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-visible={true}
        shadow-darkness={0.2}
      />
    </>
  );
};

export default Lights;
