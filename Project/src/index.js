// Use current position, display weather and city name
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

// Search Function

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

function searchCity(city) {
  let apiKey = "eee5ee31d243367da9788e9b7ef6d18f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

function displayCity(event) {
  event.preventDefault();
  let searchBar = document.querySelector("#search-bar");
  searchCity(searchBar.value);
}

let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", displayCity);
