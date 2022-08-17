// Make search form and button. Store city name.
function search(event) {
  event.preventDefault();
  let input = document.querySelector("#city");
  let city = input.value;
  console.log(city);
}
let form = document.querySelector("form");
form.addEventListener("submit", search);

// Weather API using the stored city.
// Why isn't "city" working? How do I define it so it works in other functions?
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let message = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

let apiKey = "eee5ee31d243367da9788e9b7ef6d18f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
