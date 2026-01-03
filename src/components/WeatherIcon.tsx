import { Cloud, CloudRain, CloudSnow, Sun, CloudLightning, CloudFog, Wind } from "lucide-react";

interface WeatherIconProps {
  condition: string;
  size?: number;
  className?: string;
}

const WeatherIcon = ({ condition, size = 64, className = "" }: WeatherIconProps) => {
  const iconProps = {
    size,
    className: `${className} transition-all duration-300`,
    strokeWidth: 1.5,
  };

  const conditionLower = condition.toLowerCase();

  if (conditionLower.includes("thunder") || conditionLower.includes("storm")) {
    return <CloudLightning {...iconProps} className={`${iconProps.className} text-accent`} />;
  }
  if (conditionLower.includes("rain") || conditionLower.includes("drizzle")) {
    return <CloudRain {...iconProps} className={`${iconProps.className} text-primary`} />;
  }
  if (conditionLower.includes("snow")) {
    return <CloudSnow {...iconProps} className={`${iconProps.className} text-foreground`} />;
  }
  if (conditionLower.includes("fog") || conditionLower.includes("mist") || conditionLower.includes("haze")) {
    return <CloudFog {...iconProps} className={`${iconProps.className} text-muted-foreground`} />;
  }
  if (conditionLower.includes("wind")) {
    return <Wind {...iconProps} className={`${iconProps.className} text-primary`} />;
  }
  if (conditionLower.includes("cloud") || conditionLower.includes("overcast")) {
    return <Cloud {...iconProps} className={`${iconProps.className} text-muted-foreground`} />;
  }
  if (conditionLower.includes("clear") || conditionLower.includes("sunny")) {
    return <Sun {...iconProps} className={`${iconProps.className} text-accent animate-pulse-slow`} />;
  }

  return <Sun {...iconProps} className={`${iconProps.className} text-accent`} />;
};

export default WeatherIcon;
