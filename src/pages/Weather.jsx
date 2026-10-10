import React, { useEffect, useRef, useState } from 'react'
import { TbWorldSearch } from "react-icons/tb";
import clear_png from '../assets/clear.png'
import cloud_png from '../assets/cloud.png'
import drizzle_png from '../assets/drizzle.png'
import humidity_png from '../assets/humidity.png'
import rain_png from '../assets/rain.png'
import snow_png from '../assets/snow.png'
import wind_png from '../assets/wind.png'






function Weather() {

const inputRef = useRef()  

const [weatherData,setWeatherData]  = useState(false)


const allIcons = {
  "01d":clear_png,
  "01n":clear_png,
  "02d":cloud_png,
  "02n":cloud_png,
  "03d":cloud_png,
  "03n":cloud_png,
  "04d":drizzle_png,
  "04n":drizzle_png,
  "09d":rain_png,
  "09n":rain_png,
  "10d":rain_png,
  "10d":rain_png,
  "13d":snow_png,
  "13n":snow_png



}
  
const search=async(city)=>{

  if(city===""){
    alert("Please Enter a City Name")
    return
  }


  try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data);
      const icon = allIcons[data.weather[0].icon]
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: Math.floor(data.wind.speed),
        temperature:Math.floor(data.main.temp),
        location:data.name,
        icon: icon,
        description:data.weather[0].description,
        main:data.weather[0].main

      })
      
    
  } catch (error) {
    console.log(error);
    
    
  }
}
useEffect(()=>{
search("London")
},[])

  return (


    
    <div class="flex flex-wrap 
    justify-center 
    items-center 
   h-screen gap-10
   bg-linear-to-r from-cyan-500 to-blue-500
    
   ">
    
      <div class=" w-110 h-130  bg-linear-to-t from-sky-500 to-indigo-500 flex flex-col justify-center items-around rounded-lg 
      border-2 border-indigo-600">
      <h1 class="text-5xl text-white text-shadow-md ml-18 font-mono ...font-weight: 800 ">Weather App</h1>
      <img class="w-70 h-80 ml-19 mt-10" src="https://static.vecteezy.com/system/resources/previews/013/250/798/original/weather-app-3d-rendering-isometric-icon-png.png" alt="Image not found" />
      </div>



      <div class=" w-120 h-130  bg-linear-to-t from-sky-500 to-indigo-500
     border-2 border-indigo-600 rounded-lg ">
      <div>


 <div class="flex justify-evenly ">
      <div class="w-70 h-10 border-4  border-indigo-200 bg-white rounded-2xl mt-10">
        <input  ref={inputRef}  type="text" placeholder='Enter a city' class="pl-3 " />
          </div>
                      
                      
  <button onClick={()=>search(inputRef.current.value)} type='button' class='cursor-pointer'>
    <div class="h-10 w-10 bg-white border-4 border-indigo-200 rounded-2xl mt-10 object-cover">
< TbWorldSearch  class="size-7 "/>
  </div></button>
  </div>
</div >




<div  class='flex flex-col items-center p-7'>
          <img class='h-28 w-35 object-cover  rounded-4xl p-2 ' src={weatherData.icon} alt={"Weatherb Icon"}/>
       <h2  class='text-3xl text-white m-2 font-bold' > {weatherData.temperature}°C</h2>

       <span class='text-2xl text-white p-1 font-semibold'>"{weatherData.description}"</span>
       <h3  class='text-3xl text-white p-1 font-bold'>{weatherData.location}</h3>

</div>
      <div>
        <div w-120 h-20   class='flex justify-between  '   >
          <div class='size-15 mx-15 border '>
            <img src="https://img.freepik.com/premium-vector/windy-9-degrees-celsius-weather-forecast-cloudy-overcast-cold-wind-speed-air-precipitation-temperature-atmospheric-pressure-fahrenheit-conditions-uv-index-synoptic-glassmorphism_661108-23603.jpg?semt=ais_hybrid" alt="" />
          </div>
           <div class='size-15 mx-15 border'>
            <img src="https://static.vecteezy.com/system/resources/previews/021/829/033/original/icon-humidity-weather-elements-symbol-icons-in-filled-line-style-good-for-prints-web-smartphone-app-posters-infographics-logo-sign-etc-vector.jpg" alt="" />

           </div>


          </div>
        <div class= 'flex justify-between  ' >
          <h3 class='text-2xl text-white p-1 ml-15'>{weatherData.windSpeed}m/s</h3>
          <h3 class='text-2xl text-white p-1 mr-15'>{weatherData.humidity}%</h3>

        </div>
      </div>

        
         </div>

     </div>
  )
}

export default Weather

// https://static.vecteezy.com/system/resources/previews/012/066/505/original/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png
// https://tse2.mm.bing.net/th/id/OIP.pnpeK_0GV1i0wVsi1Om_WwHaEH?r=0&pid=Api&h=220&P=0
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`