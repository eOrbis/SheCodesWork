// Footer display current day and time
/*
let footer = document.querySelector("#date-footer");
footer.innerHTML = "Today's date and time";

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let min = now.getMinutes();
if (min < 10) {
  min = `0${min}`;
}

let dayTime = `${day} ${hour}:${min}`;

function todayTime() {
  footer.innerHTML = dayTime;
}
todayTime();

// Helper's code
*/

function showPosition(position) {
  let apiKey = "eee5ee31d243367da9788e9b7ef6d18f";
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener(
  "click",
  navigator.geolocation.getCurrentPosition(showPosition)
);

// Angie's code
//

// Search for a city and then show the temp of that city in the bubble

function showTemperature(response) {
  console.log(response.data);
  let cityDisplay = document.querySelector("#city-display");
  cityDisplay.innerHTML = response.data.name;

  let degrees = document.querySelector("#degrees");
  let nowTemp = Math.round(response.data.main.temp);
  let description = document.querySelector("#description");
  description.innerHTML = `${response.data.weather[0].main} today`;
  degrees.innerHTML = `${nowTemp}°F`;
}

function displayCity(event) {
  event.preventDefault();
  let searchBar = document.querySelector("#search-bar");
  searchCity(searchBar.value);
}

function searchCity(city) {
  let apiKey = "eee5ee31d243367da9788e9b7ef6d18f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

let citySearch = document.querySelector("city-search");
citySearch.addEventListener("submit", displayCity);

/*
// NAVIGATOR
let locationButton = document.querySelector("#location-button");
function useCurrentLocation(position) {
  showTemperature;

  let apiKey = "eee5ee31d243367da9788e9b7ef6d18f";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(useCurrentLocation);

locationButton.addEventListener("click", useCurrentLocation);



let locationButton = document.querySelector("#location-button");
let currentLocation = document.querySelector("#current-location");

function useCurrentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let currentLocation = document.querySelector("#current-location");
  
}

function displayWeatherAndCity {
 navigator.geolocation.getCurrentPosition(useCurrentLocation); 

 cityDisplay.innerHTML = result.data.main.temp;

} 



locationButton.addEventListener("click", displayWeatherAndCity);



// API temp search functionality


// Celcius to Farenheit converter

let degrees = document.querySelector("#degrees");
let unitC = document.querySelector("#unitC");
let unitF = document.querySelector("#unitF");

function convertToF(event) {
  event.preventDefault();
  degrees.innerHTML = 68;
}

unitF.addEventListener("click", convertToF);

function convertToC(event) {
  event.preventDefault();
  degrees.innerHTML = 20;
}

unitC.addEventListener("click", convertToC);
*/
