//j'ai utiliser la methode fetch pour récuperer les données openmétéo
export default async function handler(req, res) {
  const getOpenMeteoData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=47.218&longitude=-1.554&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Europe%2FBerlin`
  );
  const data = await getOpenMeteoData.json();
  res.status(200).json(data);
  console.log(data)
}
