import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

interface WeatherData {
  properties: {
    periods: Array<{
      number: number;
      name: string;
      temperature: number;
      temperatureUnit: string;
      windSpeed: string;
      windDirection: string;
      icon: string;
      shortForecast: string;
      detailedForecast: string;
    }>;
  };
}

interface GridData {
  properties: {
    forecast: string;
  };
}

export default function Weather() {
  const [coordinates] = useState({ lat: 48.2766, lon: -116.5535 }); // Sandpoint, Idaho coordinates

  // First, get the grid coordinates for Sandpoint
  const { data: gridData } = useQuery<GridData>({
    queryKey: ['weather-grid', coordinates.lat, coordinates.lon],
    queryFn: async () => {
      const response = await fetch(
        `https://api.weather.gov/points/${coordinates.lat},${coordinates.lon}`
      );
      if (!response.ok) throw new Error('Failed to fetch grid data');
      return response.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  // Then get the actual weather forecast
  const { data: weatherData, isLoading, error } = useQuery<WeatherData>({
    queryKey: ['weather-forecast', gridData?.properties?.forecast],
    queryFn: async () => {
      if (!gridData?.properties?.forecast) {
        throw new Error('No forecast URL available');
      }
      const response = await fetch(gridData.properties.forecast);
      if (!response.ok) throw new Error('Failed to fetch weather data');
      return response.json();
    },
    enabled: !!gridData?.properties?.forecast,
    staleTime: 1000 * 60 * 30, // 30 minutes
  });

  if (isLoading) {
    return (
      <section id="weather" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-8">
            Current Weather
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !weatherData) {
    return (
      <section id="weather" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-8">
            Weather in Sandpoint
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-exclamation-triangle text-yellow-500 text-2xl mr-3"></i>
              <p className="text-gray-600">Weather data temporarily unavailable</p>
            </div>
            <p className="text-gray-500 text-sm">
              Please check back later for current conditions in Sandpoint, Idaho
            </p>
          </div>
        </div>
      </section>
    );
  }

  const currentPeriod = weatherData.properties.periods[0];
  const nextPeriod = weatherData.properties.periods[1];

  return (
    <section id="weather" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
            Weather in Sandpoint
          </h2>
          <p className="text-lg text-gray-600">
            Current conditions for your wedding destination
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Data provided by National Weather Service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Weather */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-playfair text-2xl font-semibold text-primary">
                {currentPeriod.name}
              </h4>
              <div className="text-right">
                <div className="text-3xl font-bold text-accent-blue">
                  {currentPeriod.temperature}°{currentPeriod.temperatureUnit}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-eye text-accent-blue mr-3"></i>
                <span className="text-gray-700">{currentPeriod.shortForecast}</span>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-wind text-accent-blue mr-3"></i>
                <span className="text-gray-700">
                  Wind: {currentPeriod.windSpeed} {currentPeriod.windDirection}
                </span>
              </div>
              
              <div className="bg-light-blue rounded-lg p-4 mt-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {currentPeriod.detailedForecast}
                </p>
              </div>
            </div>
          </div>

          {/* Next Period */}
          {nextPeriod && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-playfair text-2xl font-semibold text-primary">
                  {nextPeriod.name}
                </h4>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-600">
                    {nextPeriod.temperature}°{nextPeriod.temperatureUnit}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-eye text-gray-400 mr-3"></i>
                  <span className="text-gray-700">{nextPeriod.shortForecast}</span>
                </div>
                
                <div className="flex items-center">
                  <i className="fas fa-wind text-gray-400 mr-3"></i>
                  <span className="text-gray-700">
                    Wind: {nextPeriod.windSpeed} {nextPeriod.windDirection}
                  </span>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {nextPeriod.detailedForecast}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Wedding Day Weather Note */}
        <div className="mt-8 bg-accent-blue/10 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <i className="fas fa-calendar-day text-accent-blue text-xl mr-3"></i>
            <h4 className="font-semibold text-primary">Wedding Day Planning</h4>
          </div>
          <p className="text-gray-700 text-sm">
            For the most accurate wedding day forecast, check back closer to August 15th. 
            Historical August averages in Sandpoint: High 78°F, Low 50°F
          </p>
        </div>
      </div>
    </section>
  );
}