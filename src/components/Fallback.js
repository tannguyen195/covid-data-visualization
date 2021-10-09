import loader from "../assets/images/rings.svg";

function Fallback() {
  return (
    <div className={"fallback"}>
      <img className={"loader"} alt="loader" src={loader} />
      <h1>GETTING COVID DATA </h1>
    </div>
  );
}

export default Fallback;
