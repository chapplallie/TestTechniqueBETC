import CityBubble from "@/components/large-bubble";
import DayBubble from "@/components/small-bubble";
import TodayInfo from "@/components/today-info";

export default function Home() {
  return (
      <main className="text-white w-full">
        <div className="container">
          <div className="p-5">
            <h1 className="font-bold ">Meteo</h1>
            <section >
              <TodayInfo location={"Paris"} date={"Lundi 1er juillet 2025"} latitude={"2.5"} longitude={"48.86"} temp={10} windSpeedImperial={19} windSpeedMetric={15} chancesOfRain={40}/>
            </section>
            <section className="overflow-scroll week flex gap-2 mt-8">
              {[
                { day: "Lun", temp: 16, windDirection: "NE", windSpeed: 12 },
                { day: "Mar", temp: 18, windDirection: "N", windSpeed: 10 },
                { day: "Mer", temp: 15, windDirection: "NO", windSpeed: 15 },
                { day: "Jeu", temp: 17, windDirection: "E", windSpeed: 8 },
                { day: "Ven", temp: 19, windDirection: "SE", windSpeed: 11 },
                { day: "Sam", temp: 20, windDirection: "S", windSpeed: 9 },
                { day: "Dim", temp: 18, windDirection: "SO", windSpeed: 14 }
              ].map((dayData, index) => (
                <DayBubble 
                  key={index}
                  day={dayData.day}
                  temp={dayData.temp}
                  windDirection={dayData.windDirection}
                  windSpeed={dayData.windSpeed}
                />
              ))}
            </section>
            <section className="other-places">
              <div className="flex flex-col gap-2 mt-5.5">
                {[
                { city: "New York", temp: 16, chancesOfRain: 30, windSpeedImperial: 12, windSpeedMetric: 19 },
                { city: "Bangkok", temp: 32, chancesOfRain: 60, windSpeedImperial: 8, windSpeedMetric: 13 },
                { city: "Londres", temp: 11, chancesOfRain: 50, windSpeedImperial: 10, windSpeedMetric: 16 },
                { city: "Casablanca", temp: 22, chancesOfRain: 10, windSpeedImperial: 7, windSpeedMetric: 11 },
              ].map((cityData, index) => (
                <CityBubble
                  key={index}
                  city={cityData.city}
                  temp={cityData.temp}
                  chancesOfRain={cityData.chancesOfRain}
                  windSpeedImperial={cityData.windSpeedImperial}
                  windSpeedMetric={cityData.windSpeedMetric}
                />
              ))}
              </div>
            </section>
          </div>
          
        </div>
      </main>
  );
}
