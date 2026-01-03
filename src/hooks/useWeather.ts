import { useState, useCallback } from "react";
import { toast } from "sonner";

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
}

// Demo data for showcase - in production, this would fetch from OpenWeatherMap API
const DEMO_WEATHER: Record<string, WeatherData> = {
  "london": {
    city: "London",
    country: "United Kingdom",
    temperature: 12,
    feelsLike: 10,
    condition: "Cloudy",
    description: "Overcast clouds",
    humidity: 78,
    windSpeed: 15,
    visibility: 10,
    pressure: 1015,
  },
  "new york": {
    city: "New York",
    country: "United States",
    temperature: 18,
    feelsLike: 16,
    condition: "Clear",
    description: "Clear sky",
    humidity: 55,
    windSpeed: 12,
    visibility: 16,
    pressure: 1020,
  },
  "tokyo": {
    city: "Tokyo",
    country: "Japan",
    temperature: 22,
    feelsLike: 24,
    condition: "Sunny",
    description: "Warm and sunny",
    humidity: 65,
    windSpeed: 8,
    visibility: 12,
    pressure: 1012,
  },
  "paris": {
    city: "Paris",
    country: "France",
    temperature: 15,
    feelsLike: 14,
    condition: "Rainy",
    description: "Light rain showers",
    humidity: 82,
    windSpeed: 18,
    visibility: 8,
    pressure: 1008,
  },
  "sydney": {
    city: "Sydney",
    country: "Australia",
    temperature: 26,
    feelsLike: 28,
    condition: "Sunny",
    description: "Bright sunshine",
    humidity: 45,
    windSpeed: 20,
    visibility: 20,
    pressure: 1018,
  },
  "dubai": {
    city: "Dubai",
    country: "United Arab Emirates",
    temperature: 35,
    feelsLike: 38,
    condition: "Clear",
    description: "Hot and clear",
    humidity: 30,
    windSpeed: 10,
    visibility: 15,
    pressure: 1010,
  },
  "moscow": {
    city: "Moscow",
    country: "Russia",
    temperature: -5,
    feelsLike: -10,
    condition: "Snow",
    description: "Light snowfall",
    humidity: 88,
    windSpeed: 22,
    visibility: 5,
    pressure: 1025,
  },
  "singapore": {
    city: "Singapore",
    country: "Singapore",
    temperature: 30,
    feelsLike: 34,
    condition: "Thunderstorm",
    description: "Tropical thunderstorm",
    humidity: 90,
    windSpeed: 25,
    visibility: 6,
    pressure: 1005,
  },
};

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (city: string) => {
    setIsLoading(true);
    setError(null);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const cityKey = city.toLowerCase();
    const weatherData = DEMO_WEATHER[cityKey];

    if (weatherData) {
      setWeather(weatherData);
      toast.success(`Weather loaded for ${weatherData.city}`);
    } else {
      // Generate random weather for unknown cities
      const randomWeather: WeatherData = {
        city: city.charAt(0).toUpperCase() + city.slice(1),
        country: "Unknown Region",
        temperature: Math.floor(Math.random() * 40) - 5,
        feelsLike: Math.floor(Math.random() * 40) - 5,
        condition: ["Sunny", "Cloudy", "Rainy", "Clear"][Math.floor(Math.random() * 4)],
        description: "Weather data simulated",
        humidity: Math.floor(Math.random() * 60) + 30,
        windSpeed: Math.floor(Math.random() * 30) + 5,
        visibility: Math.floor(Math.random() * 15) + 5,
        pressure: Math.floor(Math.random() * 50) + 990,
      };
      setWeather(randomWeather);
      toast.info(`Showing simulated weather for ${city}`);
    }

    setIsLoading(false);
  }, []);

  return { weather, isLoading, error, fetchWeather };
};
