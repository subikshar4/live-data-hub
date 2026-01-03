import { useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import QuickCities from "@/components/QuickCities";
import { useWeather } from "@/hooks/useWeather";
import { Cloud, Sparkles } from "lucide-react";

const Index = () => {
  const { weather, isLoading, fetchWeather } = useWeather();

  // Load default city on mount
  useEffect(() => {
    fetchWeather("London");
  }, []);

  const getBackgroundClass = () => {
    if (!weather) return "gradient-cool";
    const temp = weather.temperature;
    if (temp > 25) return "gradient-warm";
    if (temp < 5) return "gradient-night";
    return "gradient-cool";
  };

  return (
    <div className={`min-h-screen ${getBackgroundClass()} transition-all duration-1000`}>
      {/* Ambient background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cloud className="text-primary" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Weather<span className="text-primary">Hub</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-accent" />
            Real-time weather at your fingertips
            <Sparkles size={16} className="text-accent" />
          </p>
        </header>

        {/* Search Section */}
        <section className="mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <SearchBar onSearch={fetchWeather} isLoading={isLoading} />
          <QuickCities onSelect={fetchWeather} />
        </section>

        {/* Weather Display */}
        <main>
          {isLoading ? (
            <LoadingSkeleton />
          ) : weather ? (
            <WeatherCard data={weather} />
          ) : null}
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-muted-foreground text-sm">
            Demo app showcasing API integration • Try searching for London, Tokyo, Dubai, or any city
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
