console.log("Connected!")
// Declaring the variables
let lon;
let lat;
let c_Code = "IN";
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

document.body.style.backgroundColor = "rgb(13, 87, 10)";
document.getElementById('sBtn').addEventListener("click", checkWeather)

	// API ID
	function checkWeather() {
	const api = "6d055e39ee237af35ca066f35474e9df";
	let zipCode = document.getElementById('bharat').value;
	const base = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${c_Code}&appid=6d055e39ee237af35ca066f35474e9df`;

	// Calling the API
	fetch(base)
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
		temperature.textContent =
			Math.floor(data.main.temp - kelvin) + "°C";
		summary.textContent = data.weather[0].main;
		loc.textContent = data.name + "," + data.sys.country;
		let icon1 = data.weather[0].icon;
		icon.innerHTML =
			`<img src="icons/${icon1}.png" style= 'height:10rem'/>`;

	var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bColor = "rgb("+ x + "," + y + "," + z +")";
	document.body.style.backgroundColor = bColor;

		});
	}

	