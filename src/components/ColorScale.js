import chroma from "chroma-js";
import useStore from "../store/useStore";
import { normalizeNumber } from "../utils/normalize";
function ColorScale() {
  const color_scale = chroma.scale(["#f00", "#0f0"]).colors(63);
  const data = useStore((state) => state.data);

  const max = data?.locations[0].cases;
  const min = 0;
  const middle = data?.locations[31].cases;

  return (
    <>
      {data && (
        <div className="color-scale">
          <div className="scale-bar">
            <h4>{normalizeNumber(max)} ca</h4>
            <h4>{normalizeNumber(middle)} ca</h4>
            <h4>{min} ca</h4>
          </div>
          <div className="color-bar">
            {color_scale.map((color) => {
              return (
                <span
                  className="color"
                  key={color}
                  style={{ background: color }}
                ></span>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ColorScale;
