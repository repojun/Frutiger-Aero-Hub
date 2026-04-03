export default async function handler(req, res) {
  const { location } = req.query;

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}&q=${location}`);

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "failed to fetch weather" });
  }
}
