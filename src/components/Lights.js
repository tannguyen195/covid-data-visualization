
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
      
      />
    </>
  );
};

export default Lights;
