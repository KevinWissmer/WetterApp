function getWeatherCardTemplate(singleForecast){
    return `
        <div class="weather-card">
            <div class="weather-date">${singleForecast.date}</div>
                <div class="weather-info">
                    <div class="temp-range">
                        <span class="temp-low">Low: ${singleForecast.temperature_min}°K</span>
                        <span class="temp-high">High: ${singleForecast.temperature_max}°K</span>
                    </div>
                <div class="wind-speed">Max Wind: 20 km/h</div>
            </div>
        </div>
    `
}