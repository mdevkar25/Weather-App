const apikey = "317caf65d9cf73e719423f51180dfd14";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather_img");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";

    } else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
    
         if(data.weather[0].main == "Clouds"){
            weathericon.src = "assets/images/clouds.png";
         }else if(data.weather[0].main == "Clear"){
            weathericon.src = "assets/images/clear.png";
         }else if(data.weather[0].main == "Rain"){
            weathericon.src = "assets/images/rain.png";
         }else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "assets/images/drizzle.png";
         }else if(data.weather[0].main == "Mist"){
            weathericon.src = "assets/images/mist.png";
         }

         document.querySelector(".error").style.display = "none";



    }
    
}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})


