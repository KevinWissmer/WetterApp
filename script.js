async function getWeatherForecast(city) {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid='+  apiKey);
    const data = await response.json();
    
    const dailyData = {};
    data.list.forEach(entry => {
        const date = entry.dt_txt.split(' ')[0];
        if(!dailyData[date]) {
            dailyData[date] = {
                date,
                temperature_max: entry.main.temp_max,
                temperature_min: entry.main.temp_min,
                weather: entry.weather[0].main,
            };
        } else {
            dailyData[date].temperature_max = Math.max(dailyData[date].temperature_max, entry.main.temp_max);
            dailyData[date].temperature_min = Math.min(dailyData[date].temperature_min, entry.main.temp_min);
        }
    });

    const forecast = Object.values(dailyData);
    return forecast;
}

function renderWeather(forecast){
    let contentRef = document.getElementById('content');
    console.log(forecast)
    for (let index = 0; index < forecast.length; index++) {
        const singleForecast = forecast[index];
        contentRef.innerHTML += getWeatherCardTemplate(singleForecast)
    }

}

getWeatherForecast('Hannover')
    .then(forecast => renderWeather(forecast));