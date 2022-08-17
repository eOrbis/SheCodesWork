/*function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temp = Math.round(response.data.main.temp);
  h1.innerHTML = `It is ${temp} degrees`;
}

function showPosition(position) {
  let apiKey = "eee5ee31d243367da9788e9b7ef6d18f";

  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeather);
}

navigator.geolocation.getCurrentPosition(showPosition);
*/

function showWeather(response) {
  let todayTemp = document.querySelector("#today-temp");
  let temperature = Math.round(response.data.main.temp);
  todayTemp.innerHTML = `${temperature}°`;
}

function retrievePosition(position) {
  let apiKey = "eee5ee31d243367da9788e9b7ef6d18f";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

//


function 
let apiKey = "eee5ee31d243367da9788e9b7ef6d18f";

let city = searchBar.value;
let apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={apiKey}`;

axios.get(apiCityUrl).then();
