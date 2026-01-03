import { MapPin } from "lucide-react";

interface QuickCitiesProps {
  onSelect: (city: string) => void;
}

const POPULAR_CITIES = [
  { name: "London", emoji: "🇬🇧" },
  { name: "New York", emoji: "🇺🇸" },
  { name: "Tokyo", emoji: "🇯🇵" },
  { name: "Paris", emoji: "🇫🇷" },
  { name: "Sydney", emoji: "🇦🇺" },
  { name: "Dubai", emoji: "🇦🇪" },
];

const QuickCities = ({ onSelect }: QuickCitiesProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      {POPULAR_CITIES.map((city) => (
        <button
          key={city.name}
          onClick={() => onSelect(city.name)}
          className="group glass px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
        >
          <span className="text-lg">{city.emoji}</span>
          <span className="text-sm text-foreground group-hover:text-primary transition-colors">
            {city.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default QuickCities;
