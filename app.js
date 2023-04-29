const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'a6200efb8fmshac7e270df2ca5afp12ce62jsn185771d469c4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const detailed_weather = document.querySelector(".detailed-weather")
const details_table = document.querySelector("details-table")


const fetchUrl = async () => {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		renderDetails(result);

	} catch (error) {
		console.error(error);
	}
};
// Aqui vamos criar uma funçao que vai desestruturar o objeto result
// e retornar a desustruturaçao para ocupar certos campos da weather app
const renderDetails = (weather_info) => {
	const { max_temp, min_temp, humidity, wind_speed, feels_like } = weather_info;
	details_table.appendChild = `<tr> <td>${max_temp}º e ${min_temp}º</td>
										<td> <span>sensaçao: </span>${feels_like}ºC<td>
								 </tr>
								 <tr>
								 	<td> <span>vento:</span> ${wind_speed} km/h</td>
								 	<td><span>humidade:</span>${humidity}%</td>
								 </tr>`

};

