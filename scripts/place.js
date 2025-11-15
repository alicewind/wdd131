const temp = document.querySelector(".temp-value");
const wind = document.querySelector(".wind-value");

function calculateWindChill(temp, wind) {
    const windChillFactor = 13.12 + (0.6215 * temp) - (11.37 * wind ** .16) + (.3965 * temp * wind ** .16);
    return windChillFactor;
}

const temperature = parseFloat(temp.textContent);
const windSpeed = parseFloat(wind.textContent);

if (temperature <= 10 && windSpeed > 4.8) {
    const windChillElement = document.querySelector(".wind-chill-value");
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill.toFixed(1);
} else {
    document.querySelector(".wind-chill-value").textContent = "N/A";
}

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;