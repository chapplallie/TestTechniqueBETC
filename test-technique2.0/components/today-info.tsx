import Image from 'next/image';
import RainWindInfo from './info-rain-wind';

interface ButtonProps {
location: string;
date: string;
latitude: string;
longitude: string;
temp: number;

windSpeedImperial: number;
windSpeedMetric: number;
chancesOfRain: number;
}

export default function TodayInfo( {location, date, latitude, longitude, chancesOfRain, windSpeedImperial, windSpeedMetric , temp } : ButtonProps ) {
  return (
    <div>
        <div className='mt-8 w-full flex justify-between items-center'>
            <div className='flex gap-2'>
                <Image className='filter-white' src="/img/svg/location.svg" alt="location" width={20} height={20} />
                <div>
                   <p className='city'>{location}</p>
                   <p>{date}</p>
                </div>
            </div>
            <div className="w-fit relative flex flex-col items-center justify-center py-2 px-3 gap-2">
                  <div className="absolute inset-0 bg-white opacity-20 backdrop-blur-sm rounded-3xl"></div>
                    <div className="w-full relative z-10 flex items-center gap ">
                        <p className='info'>{latitude} : </p>
                        <p>{longitude}</p>
                    <div className=" flex flex-col content-center items-center gap-1">
                    </div>
                  </div>
                </div>
        </div>
        <p className='font-bold text-4xl'>{temp}°C</p>
       <RainWindInfo chancesOfRain={chancesOfRain} windSpeedImperial={windSpeedImperial} windSpeedMetric={windSpeedMetric}/>
    </div>
  );
}