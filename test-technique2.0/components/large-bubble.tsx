import Image from "next/image";
import RainWindInfo from "./info-rain-wind";

interface BubbleProps {
city: string;
temp: number;
chancesOfRain: number;
windSpeedImperial: number; 
windSpeedMetric : number;
}

export default function CityBubble( {city, temp, chancesOfRain, windSpeedImperial, windSpeedMetric} : BubbleProps ) {
  return (
 <div className="halo-big relative flex flex-col w-full px-3 py-2 brightness-100">
       <div className="content-center absolute inset-0 bg-white opacity-20 backdrop-blur-sm rounded-xl"></div>
          <div className="flex justify-between items-center">
            <div className="relative z-10">
            <p className="text-white text-base font-medium">{city}</p>
            <RainWindInfo chancesOfRain={chancesOfRain} windSpeedImperial={windSpeedImperial} windSpeedMetric={windSpeedMetric}/>
          </div>
          <div className="flex items-center gap-2 relative z-10">
             <p className="text-white text-2xl font-bold w-fit">{temp}°</p>
              <Image className="filter-white" src="/img/svg/cloud.svg" alt="cloud" width={20} height={20} />
          </div>
        </div>
     </div>
  );
}