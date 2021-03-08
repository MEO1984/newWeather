window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');
    let timeZone = document.querySelector('.location-timezone');
    let temperatureDescription = document.querySelector('.temperature-description');
    let icon = document.querySelector('.icon')


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
                console.log(data);
                temperatureDegree.textContent = data.main.temp;
                timeZone.textContent = data.name;
                temperatureDescription.textContent = data.weather[0].main;
                console.log(temperatureDescription);
                iconDes = data.weather[0].icon;
                iconUrl = "https://openweathermap.org/img/w/" + iconDes + ".png";
                icon.src = iconUrl;
                
            })
        });

    }
    
});