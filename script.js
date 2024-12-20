const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "398657910amshed5668430393181p1d0f1djsn0fbcdb7b7662",
    "x-rapidapi-host": "weather-api138.p.rapidapi.com",
  },
};


const getWeather = (city_name)=>{
    cityname.innerHTML= city_name
    fetch(
        "https://weather-api138.p.rapidapi.com/weather?city_name=" + city_name,
        options
    )
        .then((response) => response.json())
        .then((response) => {
        console.log(response);
    
        feels_like.innerHTML = response.main.feels_like; // Match property structure
        grnd_level.innerHTML = response.main.grnd_level;
        humidity.innerHTML = response.main.humidity;
        pressure.innerHTML = response.main.pressure;
        sea_level.innerHTML = response.main.sea_level; // Ensure property exists
        temp.innerHTML = response.main.temp;
        temp_max.innerHTML = response.main.temp_max;
        temp_min.innerHTML = response.main.temp_min;
        })
        .catch((err) => console.error(err));
    
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city_name.value)
})
