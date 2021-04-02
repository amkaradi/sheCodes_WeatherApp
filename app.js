let city = "London";
//Import Axios
let apiKey = "b11f81209143578d36514a426f0a6f06";
//Get OpenWeather API key and save in a variable called apiKey
let apiURL = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


//Get the API response for the weather in Sydney, using metrics unit
//Create showTemp function
function showTemp(response){
    //console.log(response.data);
    let temperature = Math.round(reponse.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${response.data.main.temp}°C`;
};

//Use axios to make a GET Request 
//axios.get(`${apiURL}&appid=${apiKey}`).then(showTemp());
axios.get(apiURL).then(console.log);
