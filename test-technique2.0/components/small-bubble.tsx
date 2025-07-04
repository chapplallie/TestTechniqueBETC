import Image from 'next/image';

interface BubbleProps {
day: string;
temp: number;
windDirection: string;
windSpeed: number;
}

export default function DayBubble( {day, temp, windDirection, windSpeed} : BubbleProps ) {
  return (
    <div className="halo-small relative flex flex-col items-center justify-center min-w-20 brightness-90 py-5 px-2 gap-2">
      <div className=" absolute inset-0 bg-white opacity-20 backdrop-blur-lg rounded-xl drop-shadow-xl/"></div>
      <div className=" relative z-10 flex flex-col items-center gap ">
        <p className="text-white font-medium">{day}</p>
        <p className="text-white text-2xl font-bold">{temp}°</p>
        <div className=" flex flex-col content-center items-center gap-1">
          <div className="flex w-full items-center gap-1">
            <Image 
              src="/img/svg/direction.svg" 
              alt="wind" 
              width={8} 
              height={8} 
            />
            <p className="text-white text-sm">{windSpeed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}