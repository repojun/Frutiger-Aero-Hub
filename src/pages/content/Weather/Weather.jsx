import { time } from "framer-motion";
import "./Weather.scss";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";
import { Helmet } from "react-helmet-async";

export default function Weather() {
  const WEATHER_CACHE_KEY = "weather_cache";
  const [location, setLocation] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(WEATHER_CACHE_KEY))?.location || "London";
    } catch {
      return "London";
    }
  });

  const [pendingLocation, setPendingLocation] = useState(location);
  const [weather, setWeather] = useState(null);
  const [modal, setModal] = useState(false);
  // need to handle errors!
  const [error, setError] = useState(null);
  const condition = weather?.current;
  const USE_DATA = true;

  // use this to get the weather icon, checks if the condition text matches whatever weatherapi throws back & also changes the icon to a moon depending on the time
  const getWeatherIcon = (conditionText, timeString) => {
    const text = (conditionText || "").toLowerCase();
    const time = timeString?.split(" ")[1] || "12:00"; // gets the time n date (like 2026-02-03 12:00) then splits it by space, then gets the time only
    const hour = parseInt(time.slice(0, 2), 10); // convert time to numbers by taking the first two
    const isNight = hour < 6 || hour >= 20; // check if its night, if its night/dark roughly then use a moon icon instead

    // must figure out why the patial rain arent working
    switch (true) {
      case text.includes("sunny") || text.includes("clear"):
        return isNight ? "Moon_Phase_Full.ico" : "Sunny.ico";
      case text.includes("partly cloudy"):
        return isNight ? "Moon_Phase_Full.ico" : "Snow_Occasional.ico";
      case text.includes("cloudy") || text.includes("overcast"):
        return isNight ? "Moon_Phase_Full.ico" : "Overcast.ico";
      case text.includes("mist"):
        return "Moon_Phase_Full.ico";
      case text.includes("rain") || text.includes("drizzle"):
        return isNight ? "Night_Rain.ico" : "rain.png";
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

      // check cache first
      const cachedWeather = localStorage.getItem(WEATHER_CACHE_KEY);

      if (cachedWeather) {
        const parsed = JSON.parse(cachedWeather);

        // make sure cache is for same location + within 5 mins
        if (parsed.location === location && Date.now() - parsed.timestamp < 5 * 60 * 1000) {
          setWeather(parsed.data);
          return;
        } else {
          localStorage.removeItem(WEATHER_CACHE_KEY);
        }
      }

      if (USE_DATA) {
        const res = await fetch(`/api/weather?location=${location}`);
        const data = await res.json();

        // weather api error handling
        if (data.error) {
          throw new Error(data.error.message);
        }

        setWeather(data);

        // cache real API data only
        localStorage.setItem(
          WEATHER_CACHE_KEY,
          JSON.stringify({
            data,
            location,
            timestamp: Date.now(),
          })
        );
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
      setWeather(null);
      setError(err.message);
    }
  };

  const editLocation = () => {
    SoundPlayer("clickxp_r", 0.6, "mp3");
    setModal(!modal);
  };

  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const hours = weather?.forecast?.forecastday?.[0]?.hour || [];
  const totalPages = Math.ceil(hours.length / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const currentHours = hours.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));

  if (!weather & !error)
    return (
      <>
        <div className="main-title">
          <span>Weather Tab</span>
        </div>
        <div className="divider"></div>
        {/* i got this cool loading bar here: https://codepen.io/valentin98/pen/pbLaBZ */}
        <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem", justifyContent: "center", alignItems: "center" }}>
          <div className="loading-text">Loading weather...</div>
          <div className="loading">
            <div className="bar">
              <div id="light"></div>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <Helmet>
        <title>Weather Tab | Frutiger Aero Hub</title>

        <meta name="description" content="An interactive Frutiger Aero inspired weather interface with real-time weather data, animated UI, and nostalgic digital design." />

        <link rel="canonical" href="https://frutiger-aero.online/weather" />

        {/* og stuff */}
        <meta property="og:title" content="Weather Tab | Frutiger Aero Hub" />
        <meta property="og:description" content="A Frutiger Aero inspired weather interface with real-time conditions and animated UI." />
        <meta property="og:image" content="https://frutiger-aero.online/og/OpenGraph.png" />
        <meta property="og:url" content="https://frutiger-aero.online/weather" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frutiger Aero Hub" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Weather Tab | Frutiger Aero Hub" />
        <meta name="twitter:description" content="A Frutiger Aero inspired weather interface with real-time conditions and animated UI." />
        <meta name="twitter:image" content="https://frutiger-aero.online/og/OpenGraph.png" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7fd1ff" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Weather Tab",
            url: "https://frutiger-aero.online/weather",
            description: "An interactive Frutiger Aero inspired weather interface with real-time weather data, animated UI, and nostalgic digital design.",
            applicationCategory: "WeatherApplication",
            operatingSystem: "All",
            publisher: {
              "@type": "Organization",
              name: "Frutiger Aero Hub",
            },
          })}
        </script>
      </Helmet>
      <AnimatePresence>
        {modal && (
          <motion.div className="weather-modal-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <motion.div
              className="weather-modal-body"
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: [0.2, 1.1, 1], opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              {" "}
              <div className="title-bar">
                <div>Enter a new location</div>

                <div className="close-button" onClick={() => editLocation()}>
                  <div>X</div>
                </div>
              </div>
              <div className="weather-input-container">
                <input
                  className="weather-input"
                  value={pendingLocation}
                  onChange={(e) => {
                    setPendingLocation(e.target.value);
                  }}
                  placeholder="Location"
                  type="location"
                  name="location"
                  maxLength={300}
                  style={{
                    height: "1.5rem",
                    maxHeight: "8rem",
                    alignSelf: "center",
                  }}
                />

                <div
                  className="submit-button"
                  style={{ height: "3rem", width: "8rem" }}
                  onClick={() => {
                    setLocation(pendingLocation);
                    editLocation();
                  }}
                >
                  <img src="icons/forward.webp" className="icon" />
                  Confirm
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="main-title">
        <span>Weather Tab</span>
      </div>

      <div className="divider"></div>

      <motion.div key={weather?.location?.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={{ position: "relative" }}>
        <div className="weather-container">
          <div className="weather-metrics">
            <div className="weather-main">
              {!error && weather?.current?.temp_c && <img src={`/icons/weather/${getWeatherIcon(weather?.current?.condition?.text)}`} alt={weather?.current?.condition?.text || ""} className="weather-icon" />}

              <div className="weather-text">
                <p className="location">
                  {error ? (error.toLowerCase().includes("unexpected token") ? "ERROR: Weather API is unavailable." : `Unable to find "${location}", please enter a new location.`) : weather?.location?.name}{" "}
                  <span className="edit-button" onClick={() => editLocation()}>
                    [Edit]
                  </span>
                </p>

                {!error && weather?.current?.temp_c && (
                  <>
                    <p className="celsius">{weather?.current?.temp_c}°C</p>

                    <p className="condition">{weather?.current?.condition?.text}</p>

                    <p className="feels-like">Feels like {weather?.current?.feelslike_c}°C</p>
                  </>
                )}
              </div>
            </div>

            {!error && weather?.current?.temp_c && (
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
                  <div className="metric-stat">{condition?.uv}</div>
                </div>

                <div>
                  <div className="metric-title">Precipitation</div>
                  <div className="metric-stat">{condition?.precip_mm}mm</div>
                </div>
              </div>
            )}
          </div>

          {!error && weather?.current?.temp_c && (
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
          )}
        </div>
      </motion.div>
    </>
  );
}
