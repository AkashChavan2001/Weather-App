let input=document.querySelector("input");
let search=document.querySelector("button");
let city=document.querySelector("h2");
let temp=document.querySelectorAll("h3")[0];
let climate=document.querySelectorAll("h3")[1];
let output=document.querySelector("#output");

console.log(input,search,city,temp,climate);


search.addEventListener("click",async ()=>{
    try{
    let apiKey=`5c75c515e096fa0e42f5081478b15173`;
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
    let dataFromInternet=await fetch(api);
    let weatherData=await dataFromInternet.json();
     
    city.innerHTML=`city name : ${weatherData.name}`;
    temp.innerHTML=`temp : ${Math.floor(weatherData.main.temp-273)}`;
    climate.innerHTML=`climate : ${weatherData.weather[0].main}`;

    console.log(dataFromInternet);
    console.log(weatherData);
    }catch(e){
      console.log(e);
      output.innerHTML=`invalid city name`;
    }
});