import WeatherIcon from "./WeatherIcon";
import { Droplets, Wind, Eye, Thermometer } from "lucide-react";

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

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard = ({ data }: WeatherCardProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      {/* Main Weather Display */}
      <div className="glass-strong rounded-3xl p-8 md:p-12 shadow-elevated mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Location & Temperature */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-1">
              {data.city}
            </h2>
            <p className="text-muted-foreground text-lg mb-6">{data.country}</p>
            
            <div className="flex items-start justify-center md:justify-start gap-2">
              <span className="text-7xl md:text-8xl font-light text-foreground text-glow">
                {Math.round(data.temperature)}
              </span>
              <span className="text-3xl text-primary mt-2">°C</span>
            </div>
            
            <p className="text-muted-foreground mt-4 flex items-center justify-center md:justify-start gap-2">
              <Thermometer size={16} />
              Feels like {Math.round(data.feelsLike)}°C
            </p>
          </div>

          {/* Right: Weather Icon & Condition */}
          <div className="text-center">
            <div className="animate-float">
              <WeatherIcon condition={data.condition} size={100} />
            </div>
            <p className="text-xl font-medium text-foreground mt-4 capitalize">
              {data.condition}
            </p>
            <p className="text-muted-foreground capitalize">{data.description}</p>
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <DetailCard
          icon={<Droplets className="text-primary" />}
          label="Humidity"
          value={`${data.humidity}%`}
          delay="0.1s"
        />
        <DetailCard
          icon={<Wind className="text-primary" />}
          label="Wind Speed"
          value={`${data.windSpeed} km/h`}
          delay="0.2s"
        />
        <DetailCard
          icon={<Eye className="text-primary" />}
          label="Visibility"
          value={`${data.visibility} km`}
          delay="0.3s"
        />
        <DetailCard
          icon={<Thermometer className="text-primary" />}
          label="Pressure"
          value={`${data.pressure} hPa`}
          delay="0.4s"
        />
      </div>
    </div>
  );
};

interface DetailCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: string;
}

const DetailCard = ({ icon, label, value, delay }: DetailCardProps) => (
  <div 
    className="glass rounded-2xl p-5 text-center shadow-card hover:shadow-glow transition-all duration-500 animate-slide-up"
    style={{ animationDelay: delay }}
  >
    <div className="flex justify-center mb-3">{icon}</div>
    <p className="text-muted-foreground text-sm mb-1">{label}</p>
    <p className="text-foreground font-semibold text-lg">{value}</p>
  </div>
);

export default WeatherCard;
