const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '20873fa7e7msha8b749da26f52f1p11f0f0jsn9ac71cc96498',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        temp2.innerHTML=response.temp
        humidity2.innerHTML=response.humidity
        wind_speed2.innerHTML=response.wind_speed
        temp.innerHTML  = response.temp
        feels_like.innerHTML  = response.feels_like
        humidity.innerHTML  = response.humidity
        min_temp.innerHTML  = response.min_temp
        max_temp.innerHTML  = response.max_temp
        wind_speed.innerHTML  = response.wind_speed
        wind_degrees.innerHTML  = response.wind_degrees
        sunrise.innerHTML  = response.sunrise
        sunset.innerHTML  = response.sunset
      
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")