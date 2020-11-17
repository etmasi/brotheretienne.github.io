function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getSummary(){
    let weathertypes = ["Sunny", "Partially cloudy", "Cloudy", "Overcast", "Rain", "Drizzle", "Snow", "Stormy", "Tornadoes", "Fog", "Hurricanes", "Sandstorms"];
    let weather = weathertypes[getRndInteger(0,weathertypes.length-1)];
    let hightemp = getRndInteger(25,90);
    let wind = getRndInteger(1,12);
    let humidity = getRndInteger(30,100);
    let windchill = "N/A";
    if (hightemp <= 50 && wind > 3.0){
        windchill = windChill(hightemp, wind);
    }

    document.getElementById('weather').innerHTML = `Currently: ${weather}`
    document.getElementById('hightemp').innerHTML = `High: ${hightemp} °F`
    document.getElementById('chill').innerHTML = `Wind Chill: ${windchill} °F`
    document.getElementById('humidity').innerHTML = `Humidity: ${humidity}%`
    document.getElementById('wind').innerHTML = `Wind Speed: ${wind} mph`
}

getSummary();