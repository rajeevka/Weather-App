const SearchInput = document.getElementById("SearchInput")
const dynamicHeading = document.getElementById("dynamicHeading")
const skyCondition = document.getElementById("skyCondition")
const windSpeed = document.getElementById("windSpeed")
const temerature = document.getElementById("temerature")

async function func() {
    const location = SearchInput.value
    const cardContainer = document.getElementById("cardContainer")
    cardContainer.classList.add("cardContainer")
   
    const streamResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`);
    console.log(streamResponse);
    const data = await streamResponse.json()
    console.log(data);
    dynamicHeading.innerHTML = `weather of <span id="location">${location}</span>`
    skyCondition.innerHTML = `Sky copndition: <span id="records">${data.weather[0].description}</span>`
    temerature.innerHTML = `temperature: <span id="records">${data.main.temp}</span>`
    windSpeed.innerHTML = `windspeed: <span id="records">${data.wind.speed}</span>`
}
