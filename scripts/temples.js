const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const tagline = document.querySelector('.tagline');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    tagline.classList.toggle('hide');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 550) {
        mainnav.classList.remove('show');
        hambutton.classList.remove('show');
        tagline.classList.remove('hide');
    }
});

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;