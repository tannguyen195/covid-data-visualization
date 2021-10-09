import useStore from "../store/useStore";
import { normalizeNumber } from "../utils/normalize";
function StatisticPanel() {
  const data = useStore((state) => state.data);
  const setCameraPosition = useStore((state) => state.setCameraPosition);
  const resetCamera = useStore((state) => state.resetCamera);

  return (
    <div className="statistic-panel">
      <div className="control">
        <button onClick={() => resetCamera(true)}>Reset Camera</button>
      </div>
      {data && (
        <div>
          <div className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr className="tr-header">
                  <th>Tỉnh</th>
                  <th>Số ca nhiễm</th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <tr>
                  {data.locations.map((province) => {
                    return (
                      <td
                        onClick={() =>
                          setCameraPosition({
                            activeMesh: province.normalizedName,
                          })
                        }
                        key={province.id}
                      >
                        {province.name}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  {data.locations.map((province) => {
                    return (
                      <td key={province.id}>
                        {normalizeNumber(province.cases)}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default StatisticPanel;
