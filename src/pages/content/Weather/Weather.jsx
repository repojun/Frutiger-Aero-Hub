import "./Weather.scss";
import { useState, useEffect } from "react";

export default function Weather() {
  const [location, setLocation] = useState("London");
  const [weather, setWeather] = useState(null);
  // need to handle errors!
  const [error, setError] = useState(null);
  const condition = weather?.current;
  const USE_DATA = true;
  useEffect(() => {
    getWeather();
  }, []);
  const getWeather = async () => {
    try {
      setError(null);
      if (USE_DATA) {
        const res = await fetch(`/api/weather?location=${location}`);
        const data = await res.json();
        setWeather(data);
      } else {
        const fakeData = {
          location: {
            name: "London, UK",
          },
          current: {
            temp_c: 24,
            text: "Sunny",
            wind_mph: 16.3,
            cloud: 75,
            heatindex_c: 9.1,
            vis_km: 10.0,
            uv: 0.2,
            gust_mph: 22.5,
            precip_mm: 0.17,
            humidity: 66,
          },
        };
        setWeather(fakeData);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const editLocation = () => {
    setLocation("New York");
    getWeather();
  };
  return (
    <>
      <div className="main-title">
        <span>Weather Tab</span>
      </div>
      <div className="divider"></div>
      <div className="weather-container">
        <div className="weather-metrics">
          {weather && (
            <div className="weather-main">
              <img src="/icons/weather/Snow_Occasional.ico" className="weather-icon"></img>
              <div className="weather-text">
                <p className="location">
                  {weather?.location?.name ?? "London, UK"}{" "}
                  <span className="edit-button" onClick={() => editLocation()}>
                    [x]
                  </span>
                </p>
                <p className="celsius">{weather?.current?.temp_c ?? "24"}°C</p>
                <p className="condition">{weather?.current?.condition?.text ?? "Sunny"}</p>
                <p className="feels-like">Feels like {weather?.current?.feelslike_c ?? "19"}°C</p>
              </div>
            </div>
          )}
          {weather && (
            <div className="metrics-grid">
              <div>
                <div className="metric-title">Wind</div>
                <div className="metric-stat">{condition?.wind_mph}mp/h</div>
              </div>

              <div>
                <div className="metric-title">Humidity</div>
                <div className="metric-stat">{condition?.humidity}%</div>
              </div>
              <div>
                <div className="metric-title">Heat Index</div>
                <div className="metric-stat">{condition?.heatindex_c}°C</div>
              </div>
              <div>
                <div className="metric-title">Cloud Cover</div>
                <div className="metric-stat">{condition?.cloud}%</div>
              </div>
              <div>
                <div className="metric-title">Gust</div>
                <div className="metric-stat">{condition?.gust_mph}mp/h</div>
              </div>

              <div>
                <div className="metric-title">Visibility</div>
                <div className="metric-stat">{condition?.vis_km}km</div>
              </div>

              <div>
                <div className="metric-title">UV Index</div>
                <div className="metric-stat">{condition?.uv}mp/h</div>
              </div>
              <div>
                <div className="metric-title">Precipitation</div>
                <div className="metric-stat">{condition?.precip_mm}mm</div>
              </div>
            </div>
          )}
        </div>
        <div className="weather-forecast-container">
          <div className="back">{"<"}</div>
          <div className="weather-card">
            <div>21°C</div> <img src="/icons/weather/Sunny.ico"></img>
            <div>16:00</div>
          </div>
          <div className="weather-card">
            <div>24°C</div> <img src="/icons/weather/Sunny.ico"></img>
            <div>17:00</div>
          </div>
          <div className="weather-card">
            <div>18°C</div> <img src="/icons/weather/Snow_Occasional.ico"></img>
            <div>18:00</div>
          </div>
          <div className="weather-card">
            <div>13°C</div> <img src="/icons/weather/Overcast.ico"></img>
            <div>19:00</div>
          </div>
          <div className="weather-card">
            <div>10°C</div> <img src="/icons/weather/Night_Rain.ico"></img>
            <div>20:00</div>
          </div>
          <div className="forward">{">"}</div>
        </div>
      </div>
    </>
  );
}
