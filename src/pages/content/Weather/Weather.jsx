import { time } from "framer-motion";
import "./Weather.scss";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Weather() {
  const [location, setLocation] = useState("London");
  const [weather, setWeather] = useState(null);
  // need to handle errors!
  const [error, setError] = useState(null);
  const condition = weather?.current;
  const USE_DATA = true;

  // use this to get the weather icon, checks if the condition text matches whatever weatherapi throws back & also changes the icon to a moon depending on the time
  const getWeatherIcon = (conditionText, timeString) => {
    console.log(conditionText);
    const text = (conditionText || "").toLowerCase();
    const time = timeString?.split(" ")[1] || "12:00"; // gets the time n date (like 2026-02-03 12:00) then splits it by space, then gets the time only
    const hour = parseInt(time.slice(0, 2), 10); // convert time to numbers by taking the first two
    const isNight = hour < 6 || hour >= 20; // check if its night, if its night/dark roughly then use a moon icon instead

    switch (true) {
      case text.includes("sunny") || text.includes("clear"):
        return isNight ? "Moon_Phase_Full.ico" : "Sunny.ico";
      case text.includes("partly cloudy"):
        return isNight ? "Moon_Phase_Full.ico" : "Snow_Occasional.ico";
      case text.includes("cloudy") || text.includes("overcast"):
        return isNight ? "Moon_Phase_Full.ico" : "Overcast.ico";
      case text.includes("mist"):
        return "Moon_Phase_Full.ico";
      case text.includes("rain"):
        return isNight ? "Night_Rain.ico" : "Rain.ico";
      default:
        return isNight ? "Moon_Phase_Full.ico" : "default.ico";
    }
  };
  useEffect(() => {
    getWeather();
  }, [location]);
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
            name: location,
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
    setLocation("Thailand");
  };

  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const hours = weather?.forecast?.forecastday?.[0]?.hour || [];
  const totalPages = Math.ceil(hours.length / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const currentHours = hours.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));

  if (!weather)
    return (
      <>
        <div className="main-title">
          <span>Weather Tab</span>
        </div>
        <div className="divider"></div>
        <div className="loading-text">Loading weather...</div>
      </>
    );

  return (
    <>
      <div className="main-title">
        <span>Weather Tab</span>
      </div>
      <div className="divider"></div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={{ position: "relative" }}>
        <div className="weather-container">
          <div className="weather-metrics">
            {weather && (
              <div className="weather-main">
                <img src={`/icons/weather/${getWeatherIcon(weather?.current?.condition?.text)}`} alt={weather?.current?.condition?.text || "Weather icon"} className="weather-icon" />{" "}
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
            <div className="back" onClick={handlePrev}>
              {"<"}
            </div>

            {currentHours.map((hour) => (
              <div key={hour.time_epoch} className="weather-card">
                <div>{Math.round(hour.temp_c)}°C</div>
                <img src={`/icons/weather/${getWeatherIcon(hour?.condition?.text, hour?.time)}`} alt={hour?.condition?.text} className="forecast-icon" />
                <div>{hour.time.split(" ")[1]}</div>
              </div>
            ))}

            <div className="forward" onClick={handleNext}>
              {">"}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
