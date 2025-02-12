//날씨 설정
const weather = document.querySelector('.weather');
const area = document.querySelector('.area');
const API_KEY = 'KEY값';

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);
};


const getWeather = (lat, lon) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`)
  .then((json) => {
    const temperature = json.main.temp;
    const place = json.name;
    // const description = json.weather[0].description;

    weather.innerText = temperature;
    area.innerText = place;
    // descSection.innerText = description;
  });
};
weather_Init();