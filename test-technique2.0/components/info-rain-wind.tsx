import Image from 'next/image';

interface RainWindInfoProps{
chancesOfRain: number;
windSpeedImperial: number; 
windSpeedMetric : number;
}

export default function RainWindInfo({
  chancesOfRain,
  windSpeedImperial,
  windSpeedMetric,
}: RainWindInfoProps) {
  return (
    <div className='info w-fit flex items-center gap-4 my-2.5'>
          <div className='flex items-center gap-2'>
            <Image className='filter-white' src="/img/svg/wind.svg" alt="location" width={16} height={16} />
            <p>{windSpeedImperial} mph</p>
        </div>
        <div className='flex items-center gap-2'>
            <Image className='filter-white' src="/img/svg/cloud.svg" alt="location" width={16} height={16} />
            <p>{chancesOfRain} %</p>
        </div>
        <div className='flex items-center gap-2'>
            <Image className="filter-white" src="/img/svg/wind.svg" alt="location" width={16} height={16} />
            <p>{windSpeedMetric} km/h</p>
        </div>

    </div>
      
  );
}