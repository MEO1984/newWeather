window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');
    let timeZone = document.querySelector('.location-timezone');
    let temperatureDescription = document.querySelector('.temperature-description');
    let icon = document.querySelector('.icon');
    let button = document.querySelector(".change")

// get weather info based off lcurr location
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=1fe1b1156deb9197209e78927d7eff85`;

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                rawTemp = data.main.temp;
                temperatureDegree.textContent = Math.floor(rawTemp) + (`\xB0`) + " " + "F";
                timeZone.textContent = data.name;
                temperatureDescription.textContent = data.weather[0].main;
                iconDes = data.weather[0].icon;
                iconUrl = "https://openweathermap.org/img/w/" + iconDes + ".png";
                icon.src = iconUrl;
                
            })
        });

    };
    // get weather info based on input
    button.addEventListener("click", function(){
       var newCity= prompt("What city would you like to see?", "City Name");
       const api = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=imperial&appid=1fe1b1156deb9197209e78927d7eff85`;

       fetch(api)
       .then(response => {
           return response.json();
       })
       .then(data => {
           console.log(data);
           rawTemp = data.main.temp;
           temperatureDegree.textContent = Math.floor(rawTemp) + (`\xB0`) + " " + "F";
           timeZone.textContent = data.name;
           temperatureDescription.textContent = data.weather[0].main;
           iconDes = data.weather[0].icon;
           iconUrl = "https://openweathermap.org/img/w/" + iconDes + ".png";
           icon.src = iconUrl;
           
       })
   });
    
});