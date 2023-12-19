
const apikey = "8925502a781648f4443f9e01d96c7ff5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".input input");
const searchBtn = document.querySelector(".btn img");
const WeatherIcon = document.querySelector(".WeatherIcon");

async function checkWeather(city) {
    const respose = await fetch(apiURL + city + `&appid=${apikey}`);
    if(respose.status == 404){
        window.alert("                                     Enter Valid City Name");
    }else{ var data = await respose.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity1").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind1").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main=="Clouds"){
            WeatherIcon.src="clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            WeatherIcon.src="clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            WeatherIcon.src="rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            WeatherIcon.src="drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            WeatherIcon.src = "mist.png";
        }
    }}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
checkWeather(city);