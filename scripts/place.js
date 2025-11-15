const temp = document.querySelector(".temp-value");
const wind = document.querySelector(".wind-value");

const calculateWindChill = (temp, wind) => 13.12 + (0.6215 * temp) - (11.37 * wind ** .16) + (.3965 * temp * wind ** .16);

const temperature = parseFloat(temp.textContent);
const windSpeed = parseFloat(wind.textContent);

if (temperature <= 10 && windSpeed > 4.8) {
    document.querySelector(".wind-chill-value").textContent = calculateWindChill(temperature, windSpeed).toFixed(1);

} else {
    document.querySelector(".wind-chill-value").textContent = "N/A";    
}

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;