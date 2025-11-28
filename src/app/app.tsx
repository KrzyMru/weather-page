import './app.css';
import { useEffect, useMemo, useState } from 'react';
import CurrentWeather from './components/current-weather/current-weather';
import DailyForecast from './components/daily-forecast/daily-forecast';
import HourlyForecast from './components/hourly-forecast/hourly-forecast';
import InfoWeatherCard from './components/info-weather-card/info-weather-card';
import getDailyForecast from './api/get-daily-forecast/get-daily-forecast';
import type { DailyForecastData } from './components/daily-forecast/types';
import type { HourlyForecastData } from './components/hourly-forecast/types';
import getHourlyForecast from './api/get-hourly-forecast/get-hourly-forecast';
import type { CurrentForecastResponse } from './api/get-current-forecast/types';
import getCurrentForecast from './api/get-current-forecast/get-current-forecast';
import CurrentWeatherSkeleton from './components/current-weather/skeletons/current-weather-skeleton';
import { weatherCodeMap } from './constants/weather-code-map';

const App = () => {
  const latitude = 52;
  const longitude = 21;
  const place = "Warsaw, Poland";
  const [currentForecastData, setCurrentForecastData] = useState<CurrentForecastResponse['current']>();
  const [dailyForecastData, setDailyForecastData] = useState<DailyForecastData[]>([]);
  const [hourlyForecastData, setHourlyForecastData] = useState<HourlyForecastData[]>([]);
  const [loadingCurrentForecast, setLoadingCurrentForecast] = useState<boolean>(false);
  const [loadingDailyForecast, setLoadingDailyForecast] = useState<boolean>(false);
  const [loadingHourlyForecast, setLoadingHourlyForecast] = useState<boolean>(false);

  useEffect(() => {
    const fetchCurrentForecastData = async () => {
      try {
        setLoadingCurrentForecast(true);
        const response = await getCurrentForecast({ latitude, longitude });
        const data = response.current;
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setCurrentForecastData(data);
      } catch (e: unknown) {
      } finally {
        setLoadingCurrentForecast(false);
      }
    }
    const fetchDailyForecastData = async () => {
      try {
        setLoadingDailyForecast(true);
        const response = await getDailyForecast({ latitude, longitude });
        const data = response.daily.time.map((day, index) => {
          return { 
            time: day, 
            weather_code: response.daily.weather_code[index],
            temperature_2m_max: response.daily.temperature_2m_max[index],
            temperature_2m_min: response.daily.temperature_2m_min[index],
          }
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setDailyForecastData(data);
      } catch (e: unknown) {
      } finally {
        setLoadingDailyForecast(false);
      }
    }
    const fetchHourlyForecastData = async () => {
      try {
        setLoadingHourlyForecast(true);
        const response = await getHourlyForecast({ latitude, longitude });
        const data = response.hourly.time.map((day, index) => {
          return { 
            time: day, 
            weather_code: response.hourly.weather_code[index],
            temperature_2m: response.hourly.temperature_2m[index],
          }
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setHourlyForecastData(data);
      } catch (e: unknown) {
      } finally {
        setLoadingHourlyForecast(false);
      }
    }
    
    fetchCurrentForecastData();
    fetchDailyForecastData();
    fetchHourlyForecastData();
  }, []);

  const currentDateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const now = Date.now();

  const upcomingHours = useMemo(() => {
    return hourlyForecastData.filter(data => now < Date.parse(data.time));
  }, [hourlyForecastData]);

  return (
    <main className='page'>
      <div className='page__top'>
        <div></div>
        <header className='page__header'>How's the sky looking today?</header>
        <div></div>
      </div>
      <div className='page__content'>
        <div className='content__main'>
          {
            loadingCurrentForecast || !currentForecastData ?
            <CurrentWeatherSkeleton />
            :
            <CurrentWeather 
              place={place}
              date={currentDateFormatter.format(new Date(currentForecastData.time))}
              imageSrc={weatherCodeMap[currentForecastData.weather_code].src}
              imageAlt={weatherCodeMap[currentForecastData.weather_code].alt}
              temperature={currentForecastData.temperature_2m}
            />
          }
          <div className='content__info'>
            <InfoWeatherCard 
              title='Feels like'
              data={currentForecastData?.apparent_temperature.toFixed(0).toString()+'\u00B0'}
              loading={loadingCurrentForecast}
            />
            <InfoWeatherCard 
              title='Humidity'
              data={currentForecastData?.relative_humidity_2m.toString()+'%'}
              loading={loadingCurrentForecast}
            />
            <InfoWeatherCard 
              title='Wind'
              data={currentForecastData?.wind_speed_10m.toFixed(0).toString()+' km/h'}
              loading={loadingCurrentForecast}
            />
            <InfoWeatherCard 
              title='Precipitation'
              data={currentForecastData?.precipitation.toString()+' mm'}
              loading={loadingCurrentForecast}
            />
          </div>
          <DailyForecast
            forecastData={dailyForecastData}
            loading={loadingDailyForecast}
          />
        </div>
        <HourlyForecast 
          forecastData={upcomingHours}
          loading={loadingHourlyForecast}
        />
      </div>
    </main>
  )
}

export default App;
