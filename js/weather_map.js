$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHERMAP_KEY,
    lat: '29.4241',//
    lon: '-98.4936',//
    units: "imperial",
    part: "daily"
}).done(function(data) {
        function weather() {
            var date = new Date(data.daily['0'].dt * 1000);
            $("#current-weather-date").html(date.toDateString());
            let icon = data.current.weather['0'].icon;
            let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
            $("#icon").html("<img src='https://openweathermap.org/img/w/" + data.current.weather['0'].icon + ".png'>")
            let description = data.current.weather[0].description;
            $("#description").html(description);
            let temp = data.current.temp;
            $("#temp").html("Currently it is: " + temp.toFixed(0) + " °F")
            let humidity = data.current.humidity;
            $("#humidity").html("Humidity: " + humidity + '%');
            let feels_like = data.current.feels_like;
            $("#feels_like").html("Feels like: " + feels_like.toFixed(0) + '°F');
            let wind = data.current.wind_speed;
            $("#wind").html("Wind: " + wind.toFixed(0) + " MPH ");
            let lowTemp = data.daily['0'].temp.min;
            let highTemp = data.daily['0'].temp.max;
            $("lowTemp").css("color", "blue");//trying to change the low temp color to blue
            $("highTemp").css("color", "red");//trying to change the high temp color to Red
            $("#low-high-temp").html(lowTemp.toFixed(0) + ' °F / ' + highTemp.toFixed(0) + ' °F');
            let pressure = data.current.pressure;
            $("#pressure").html("Pressure: " + pressure + " mb");
//Forecast Day Two
            var date2 = new Date(data.daily['1'].dt * 1000);
            $("#weather-date-day2").html(date2.toDateString());
            //ICON for weather
            let icon2 = data.daily['1'].weather['0'].icon;
            let iconUrl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
            $("#icon2").html("<img src='https://openweathermap.org/img/w/" + data.daily['1'].weather['0'].icon + ".png'>")
            // Assign the date string to .weather-date
            let description2 = data.daily['1'].weather[0].description;
            $("#description2").html(description2);
            //humidity
            let humidity2 = data.daily['1'].humidity;
            $("#humidity2").html("Humidity: " + humidity2 + '%');
            //Wind Speed
            let wind2 = data.daily['1'].wind_speed;
            $("#wind2").html("Wind: " + wind2.toFixed(0) + "MPH");
            //Low and High temp Range
            let lowTemp2 = data.daily['1'].temp.min;
            let highTemp2 = data.daily['1'].temp.max;
            $("lowTemp2").css("color", "blue");//trying to change the low temp color to blue
            $("highTemp2").css("color", "red");//trying to change the high temp color to Red
            $("#low-high-temp2").html(lowTemp2.toFixed(0) + ' °F / ' + highTemp2.toFixed(0) + ' °F');
            //pressure
            let pressure2 = data.daily['1'].pressure;
            $("#pressure2").html("Pressure: " + pressure2 + " mb");
// Forecast Day Three
            var date3 = new Date(data.daily['2'].dt * 1000);
            $("#weather-date-day3").html(date3.toDateString());
            //ICON for weather
            let icon3 = data.daily['2'].weather['0'].icon;
            let iconUrl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
            $("#icon3").html("<img src='https://openweathermap.org/img/w/" + data.daily['2'].weather['0'].icon + ".png'>")
            // Assign the date string to .weather-date
            let description3 = data.daily['2'].weather[0].description;
            $("#description3").html(description3);
            //humidity
            let humidity3 = data.daily['2'].humidity;
            $("#humidity3").html("Humidity: " + humidity3 + '%');
            //Wind Speed
            let wind3 = data.daily['2'].wind_speed;
            $("#wind3").html("Wind: " + wind3.toFixed(0) + "MPH");
            //Low and High temp Range
            let lowTemp3 = data.daily['2'].temp.min;
            let highTemp3 = data.daily['2'].temp.max;
            $("lowTemp3").css("color", "blue");//trying to change the low temp color to blue
            $("highTemp3").css("color", "red");//trying to change the high temp color to Red
            $("#low-high-temp3").html(lowTemp3.toFixed(0) + ' °F / ' + highTemp3.toFixed(0) + ' °F');
            //pressure
            let pressure3 = data.daily['2'].pressure;
            $("#pressure3").html("Pressure: " + pressure3 + " mb");
// Forecast Day Four
            var date4 = new Date(data.daily['3'].dt * 1000);
            $("#weather-date-day4").html(date4.toDateString());
            //ICON for weather
            let icon4 = data.daily['3'].weather['0'].icon;
            let iconUrl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
            $("#icon4").html("<img src='https://openweathermap.org/img/w/" + data.daily['3'].weather['0'].icon + ".png'>")
            // Assign the date string to .weather-date
            let description4 = data.daily['3'].weather[0].description;
            $("#description4").html(description4);
            //humidity
            let humidity4 = data.daily['3'].humidity;
            $("#humidity4").html("Humidity: " + humidity4 + '%');
            //Wind Speed
            let wind4 = data.daily['3'].wind_speed;
            $("#wind4").html("Wind: " + wind4.toFixed(0) + "MPH");
            //Low and High temp Range
            let lowTemp4 = data.daily['3'].temp.min;
            let highTemp4 = data.daily['3'].temp.max;
            $("lowTemp4").css("color", "blue");//trying to change the low temp color to blue
            $("highTemp4").css("color", "red");//trying to change the high temp color to Red
            $("#low-high-temp4").html(lowTemp4.toFixed(0) + ' °F / ' + highTemp4.toFixed(0) + ' °F');
            //pressure
            let pressure4 = data.daily['3'].pressure;
            $("#pressure4").html("Pressure: " + pressure4 + " mb");
// Forecast Day Five
            var date5 = new Date(data.daily['4'].dt * 1000);
            $("#weather-date-day5").html(date5.toDateString());
            //ICON for weather
            let icon5 = data.daily['4'].weather['0'].icon;
            let iconUrl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";
            $("#icon5").html("<img src='https://openweathermap.org/img/w/" + data.daily['4'].weather['0'].icon + ".png'>")
            // Assign the date string to .weather-date
            let description5 = data.daily['4'].weather[0].description;
            $("#description5").html(description5);
            //humidity
            let humidity5 = data.daily['4'].humidity;
            $("#humidity5").html("Humidity: " + humidity5 + '%');
            //Wind Speed
            let wind5 = data.daily['4'].wind_speed;
            $("#wind5").html("Wind: " + wind5.toFixed(0) + "MPH");
            //Low and High temp Range
            let lowTemp5 = data.daily['4'].temp.min;
            let highTemp5 = data.daily['4'].temp.max;
            $("lowTemp5").css("color", "blue");//trying to change the low temp color to blue
            $("highTemp5").css("color", "red");//trying to change the high temp color to Red
            $("#low-high-temp5").html(lowTemp5.toFixed(0) + ' °F / ' + highTemp5.toFixed(0) + ' °F');
            //pressure
            let pressure5 = data.daily['4'].pressure;
            $("#pressure5").html("Pressure: " + pressure5 + " mb");
        }
        weather();
        console.log(weather());
})

//map
function map(){
    mapboxgl.accessToken = mapboxKey;
    var coordinates = document.getElementById('coordinates');
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 0],
        zoom: 2
    });
    var geocoder = new MapboxGeocoder({
        accessToken: mapboxKey,
        mapboxgl: mapboxgl
    });
    console.log(geocoder)
    map.addControl(new mapboxgl.NavigationControl());
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([0, 0])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHERMAP_KEY,
            lat: lngLat.lat,//
            lon: lngLat.lng,//
            units: "imperial",
            part: "daily"
        }).done(function(data){
            function updateWeather(){
            var date = new Date(data.daily['0'].dt * 1000);
            $("#current-weather-date").html(date.toDateString());
            let icon = data.current.weather['0'].icon;
            let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
            $("#icon").html("<img src='https://openweathermap.org/img/w/" + data.current.weather['0'].icon + ".png'>")
            let description = data.current.weather[0].description;
            $("#description").html(description);
            let temp = data.current.temp;
            $("#temp").html("Currently it is: " + temp.toFixed(0) + " °F")
            let humidity = data.current.humidity;
            $("#humidity").html("Humidity: " + humidity + '%');
            let feels_like = data.current.feels_like;
            $("#feels_like").html("Feels like: " + feels_like.toFixed(0) + '°F');
            let wind = data.current.wind_speed;
            $("#wind").html("Wind: " + wind.toFixed(0) + " MPH ");
            let lowTemp = data.daily['0'].temp.min;
            let highTemp = data.daily['0'].temp.max;
            $("lowTemp").css("color", "blue");//trying to change the low temp color to blue
            $("highTemp").css("color", "red");//trying to change the high temp color to Red
            $("#low-high-temp").html(lowTemp.toFixed(0) + ' °F / ' + highTemp.toFixed(0) + ' °F');
            let pressure = data.current.pressure;
            $("#pressure").html("Pressure: " + pressure + " mb");
//Forecast Day Two
            var date2 = new Date(data.daily['1'].dt * 1000);
            $("#weather-date-day2").html(date2.toDateString());
            //ICON for weather
            let icon2 = data.daily['1'].weather['0'].icon;
            let iconUrl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
            $("#icon2").html("<img src='https://openweathermap.org/img/w/" + data.daily['1'].weather['0'].icon + ".png'>")
            // Assign the date string to .weather-date
            let description2 = data.daily['1'].weather[0].description;
            $("#description2").html(description2);
            //humidity
            let humidity2 = data.daily['1'].humidity;
            $("#humidity2").html("Humidity: " + humidity2 + '%');
            //Wind Speed
            let wind2 = data.daily['1'].wind_speed;
            $("#wind2").html("Wind: " + wind2.toFixed(0) + "MPH");
            //Low and High temp Range
            let lowTemp2 = data.daily['1'].temp.min;
            let highTemp2 = data.daily['1'].temp.max;
            $("lowTemp2").css("color", "blue");//trying to change the low temp color to blue
            $("highTemp2").css("color", "red");//trying to change the high temp color to Red
            $("#low-high-temp2").html(lowTemp2.toFixed(0) + ' °F / ' + highTemp2.toFixed(0) + ' °F');
            //pressure
            let pressure2 = data.daily['1'].pressure;
            $("#pressure2").html("Pressure: " + pressure2 + " mb");
// Forecast Day Three
            var date3 = new Date(data.daily['2'].dt * 1000);
            $("#weather-date-day3").html(date3.toDateString());
            //ICON for weather
            let icon3 = data.daily['2'].weather['0'].icon;
            let iconUrl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
            $("#icon3").html("<img src='https://openweathermap.org/img/w/" + data.daily['2'].weather['0'].icon + ".png'>")
            // Assign the date string to .weather-date
            let description3 = data.daily['2'].weather[0].description;
            $("#description3").html(description3);
            //humidity
            let humidity3 = data.daily['2'].humidity;
            $("#humidity3").html("Humidity: " + humidity3 + '%');
            //Wind Speed
            let wind3 = data.daily['2'].wind_speed;
            $("#wind3").html("Wind: " + wind3.toFixed(0) + "MPH");
            //Low and High temp Range
            let lowTemp3 = data.daily['2'].temp.min;
            let highTemp3 = data.daily['2'].temp.max;
            $("lowTemp3").css("color", "blue");//trying to change the low temp color to blue
            $("highTemp3").css("color", "red");//trying to change the high temp color to Red
            $("#low-high-temp3").html(lowTemp3.toFixed(0) + ' °F / ' + highTemp3.toFixed(0) + ' °F');
            //pressure
            let pressure3 = data.daily['2'].pressure;
            $("#pressure3").html("Pressure: " + pressure3 + " mb");
// Forecast Day Four
            var date4 = new Date(data.daily['3'].dt * 1000);
            $("#weather-date-day4").html(date4.toDateString());
            //ICON for weather
            let icon4 = data.daily['3'].weather['0'].icon;
            let iconUrl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
            $("#icon4").html("<img src='https://openweathermap.org/img/w/" + data.daily['3'].weather['0'].icon + ".png'>")
            // Assign the date string to .weather-date
            let description4 = data.daily['3'].weather[0].description;
            $("#description4").html(description4);
            //humidity
            let humidity4 = data.daily['3'].humidity;
            $("#humidity4").html("Humidity: " + humidity4 + '%');
            //Wind Speed
            let wind4 = data.daily['3'].wind_speed;
            $("#wind4").html("Wind: " + wind4.toFixed(0) + "MPH");
            //Low and High temp Range
            let lowTemp4 = data.daily['3'].temp.min;
            let highTemp4 = data.daily['3'].temp.max;
            $("lowTemp4").css("color", "blue");//trying to change the low temp color to blue
            $("highTemp4").css("color", "red");//trying to change the high temp color to Red
            $("#low-high-temp4").html(lowTemp4.toFixed(0) + ' °F / ' + highTemp4.toFixed(0) + ' °F');
            //pressure
            let pressure4 = data.daily['3'].pressure;
            $("#pressure4").html("Pressure: " + pressure4 + " mb");
// Forecast Day Five
            var date5 = new Date(data.daily['4'].dt * 1000);
            $("#weather-date-day5").html(date5.toDateString());
            //ICON for weather
            let icon5 = data.daily['4'].weather['0'].icon;
            let iconUrl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";
            $("#icon5").html("<img src='https://openweathermap.org/img/w/" + data.daily['4'].weather['0'].icon + ".png'>")
            // Assign the date string to .weather-date
            let description5 = data.daily['4'].weather[0].description;
            $("#description5").html(description5);
            //humidity
            let humidity5 = data.daily['4'].humidity;
            $("#humidity5").html("Humidity: " + humidity5 + '%');
            //Wind Speed
            let wind5 = data.daily['4'].wind_speed;
            $("#wind5").html("Wind: " + wind5.toFixed(0) + "MPH");
            //Low and High temp Range
            let lowTemp5 = data.daily['4'].temp.min;
            let highTemp5 = data.daily['4'].temp.max;
            $("lowTemp5").css("color", "blue");//trying to change the low temp color to blue
            $("highTemp5").css("color", "red");//trying to change the high temp color to Red
            $("#low-high-temp5").html(lowTemp5.toFixed(0) + ' °F / ' + highTemp5.toFixed(0) + ' °F');
            //pressure
            let pressure5 = data.daily['4'].pressure;
            $("#pressure5").html("Pressure: " + pressure5 + " mb");
        }
        updateWeather();
        })
    }

    marker.on('dragend', onDragEnd);
}
map();


