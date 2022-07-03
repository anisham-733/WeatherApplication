const request = require('postman-request');
const address = 'New York'

if(!address){
    console.log('Please provide an address')
}
else {
const url = "https://api.weatherapi.com/v1/forecast.json?key=32ce6ac977be4c0681941735221505&q="+address;
request({url:url, json:true},  (error, response) => {
    if(error) {
        console.log('Unable to connect to weather service');
    }
    else if (response.body.error)
    {
        console.log('Unable to find location')
    }
    else {
    // const data = JSON.parse(response.body);
    console.log(`Location: ${response.body.location.name}, ${response.body.location.region}, ${response.body.location.country}`);
    console.log(`Latitude ${response.body.location.lat}, Longitude ${response.body.location.lon}`)
    console.log(`Local time : ${response.body.location.localtime}`);
    console.log(`Temperature in C: ${response.body.current.temp_c} °C`);
    console.log(`Weather condition :${response.body.current.condition.text} `)
    console.log(`Wind is travelling at the rate of :${response.body.current.wind_kph} kph`)
    // console.log(response.body.location);
    console.log(`Cloud cover : ${response.body.current.cloud} %, Humidity ${response.body.current.humidity}`);
    console.log(`Wind direction: ${response.body.current.wind_dir} `)
    console.log(`Pressure :${response.body.current.pressure_mb} millibars`)
    console.log(`Precipitation :${response.body.current.precip_mm} mm`)
    console.log(`Maximum temperature:${response.body.forecast.forecastday[0].day.maxtemp_c} °C`)
    console.log(`Minimum temperature:${response.body.forecast.forecastday[0].day.mintemp_c} °C`)
    console.log(`There is a probability of daily chance of rain as ${response.body.forecast.forecastday[0].day.daily_chance_of_rain} %`)
    }

})
}