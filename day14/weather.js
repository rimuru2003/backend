import https from "https";
import readline from "readline/promises";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,

  output: process.stdout,
});

const API_KEY = "27cfc8d0c4b8df5f08069ec450b5cff7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("city not found");
    }
    const weatherData = await response.json();

    console.log("\nWeather Information:");
    console.log(`City: ${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
  } catch (error) {
    console.log(error);
  }
};

const city = await rl.question("enter city name: ");
await getWeather(city);
rl.close();
