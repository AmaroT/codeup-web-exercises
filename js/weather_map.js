$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHERMAP_KEY,
    lat: '29.4241',
    lon: '-98.4936',
    units: "imperial",
    part: "daily"
}).done(function(data) {
    // let results = data.daily;
    console.log(data)
    var date = new Date(data.daily['0'].dt * 1000);
    console.log(date);
    $("#weather-date").html(date.toDateString());
    //ICON for current weather
    let icon = data.current.weather['0'].icon;
    let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $("#icon").html("<img src='https://openweathermap.org/img/w/" + data.current.weather['0'].icon + ".png'>")

// // Assign the date string to .weather-date
    let description = data.current.weather[0].description;
    $("#description").html("Description: " + description);
//         //Current Temp
        let temp = data.current.temp;
        $("#temp").html("Currently it is: " + temp.toFixed(0) + " °F");
//         //humidity
        let humidity = data.current.humidity;
        $("#humidity").html("Humidity: " + humidity + '%');
//         //Feels Like Temp
        let feels_like = data.current.feels_like;
        $("#feels_like").html("Feels like: " + feels_like.toFixed(0) + '°F');
//         //Wind Speed
        let wind = data.current.wind_speed;
        let gusts = data.current.wind_gust;
        $("#wind").html("Wind: " + wind.toFixed(0) + "MPH " + "  Gusts: " + gusts.toFixed(0) + "MPH");
//         //Low and High temp Range
        let lowTemp = data.daily['0'].temp.min;
        let highTemp = data.daily['0'].temp.max;
        $("#low-high-temp").html(lowTemp.toFixed(0) + ' °F / ' + highTemp.toFixed(0) + ' °F');
//         //pressure
        let pressure = data.current.pressure;
        $("#pressure").html("Pressure: " + pressure + " mb");
 });