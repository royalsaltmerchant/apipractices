console.log('test');

document.querySelector('button').addEventListener('click', giveWeather);
var but = document.querySelector('button');

function giveWeather() {
    console.log('its working');

    var xhr = new XMLHttpRequest();
    xhr.open('Get','http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&units=imperial&appid=6b04193aa2d1531aa6072e2ba7eca3c8', true);
    xhr.onload = function() {
        if(this.status == 200) {
            console.log(this.responseText);
            var sfweather = JSON.parse(this.responseText);
            console.log(sfweather);
            var output = ' ';
            //turn it into html
            output += '<div class="output">' + 
            '<ul class="outer">' + 
            '<li class="outli">City: ' +
            sfweather['name'] +
            '<li class="outli">Coordinates: ' +
            '<br>' +
                '<ul class="inner">' +
                '<li>longitude: ' +
                sfweather['coord']['lon'] +
                '</li>' +
                '<li>latitude: ' +
                sfweather['coord']['lat'] +
                '</li>' +
                '</ul>' +
            '</li>' +
            '<li class="outli">Weather: ' +
                '<ul class="inner">' +
                '<li>ID: ' +
                sfweather['weather'][0]['id'] +
                '</li>' +
                '<li>Main: ' +
                sfweather['weather'][0]['main'] +
                '</li>' +
                '<li>Description: ' +
                sfweather['weather'][0]['description'] +
                '</li>' +
                '<li>Icon: ' +
                sfweather['weather'][0]['icon'] +
                '</li>' +
                '</ul>' +
            '</li>' +
            '<li class="outli">Base: ' +
            sfweather['base'] +
            '</li>' +
            '<li class="outli">Main: ' +
            '<br>' +
                '<ul class="inner">' +
                '<li>Temp: ' +
                sfweather['main']['temp'] +
                '</li>' +
                '<li>Feels_Like: ' +
                sfweather['main']['feels_like'] +
                '</li>' +
                '<li>Temp_Min: ' +
                sfweather['main']['temp_min'] +
                '</li>' +
                '<li>Temp_Max: ' +
                sfweather['main']['temp_max'] +
                '</li>' +
                '<li>Pressure: ' +
                sfweather['main']['pressure'] +
                '</li>' +
                '<li>Humidity: ' +
                sfweather['main']['humidity'] +
                '</li>' +
                '</ul>' +
            '</li>' +
            '<li class="outli">Visibility: ' +
            sfweather['visibility'] +
            '</li>' +
            '<li class="outli">Wind: ' +
            '<br>' +
                '<ul class="inner">' +
                '<li>Speed: ' +
                sfweather['wind']['speed'] +
                '</li>' +
                '<li>Deg: ' +
                sfweather['wind']['deg'] +
                '</li>' +
                '</ul>' +
            '</li>' +
            '<li class="outli">Clouds: ' +
            '<br>' +
                '<ul class="inner">' +
                '<li>All: ' +
                sfweather['clouds']['all'] +
                '</li>' +
                '</ul>' +
            '</li>' +
            '<li class="outli">DT: ' +
            sfweather['dt'] +
            '</li>' +
            '<li class="outli">Sys: ' +
            '<br>' +
                '<ul class="inner">' +
                '<li>Type: ' +
                sfweather['sys']['type'] +
                '</li>' +
                '<li>ID: ' +
                sfweather['sys']['id'] +
                '</li>' +
                '<li>Country: ' +
                sfweather['sys']['country'] +
                '</li>' +
                '<li>Sunrise: ' +
                sfweather['sys']['sunrise'] +
                '</li>' +
                '<li>Sunset: ' +
                sfweather['sys']['sunset'] +
                '</li>' +
                '</ul>' +
            '</li>' +
            '<li class="outli">Timezone: ' +
            sfweather['timezone'] +
            '</li>' +
            '<li class="outli">ID: ' +
            sfweather['id'] +
            '</li>' +
            '<li class="outli">Cod: ' +
            sfweather['cod'] +
            '</li>' +
            '</ul>'

        document.getElementById('weather').innerHTML = output;
            
        }
    }

    xhr.send();

    if(but.value === "off") {
        but.value = "on";
    } else {
        but.value = "off";
        document.getElementById('weather').innerHTML = '';
    }
}