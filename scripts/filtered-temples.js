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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 21",
        area: 45800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-54292.jpg"
    },
    {
        templeName: "Papeete Tahiti",
        location: "Commune de Papeete, Tahiti",
        dedicated: "1983, October, 29",
        area: 12150,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/papeete-tahiti-temple/papeete-tahiti-temple-28604.jpg"
    },
    {
        templeName: "Helsinki Finland",
        location: "Espoo, Finland",
        dedicated: "2006, October, 22",
        area: 16350,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-22169.jpg"
    },
]; 

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const title = document.querySelector(".title");

homeLink.addEventListener("click", () => {
    title.textContent = "Home";
    createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
    title.textContent = "Old - built before 1900";
    createTempleCard(
        temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year < 1900;            
        })
    );
});                     

newLink.addEventListener("click", () => {
    title.textContent = "New - built after 1900";
    createTempleCard(
        temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year >= 1900;            
        })
    )
})

largeLink.addEventListener("click", () => {
    title.textContent = "Large - larger than 90,000 sq ft";
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", () => {
    title.textContent = "Small - smaller than 10,000 sq ft";
    createTempleCard(temples.filter(temple => temple.area <= 10000));
});
    
function createTempleCard(filteredTemples) {
    document.querySelector(".gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">LOCATION:</SPAN> ${temple.location}`;
        dedication.innerHTML = `<span class="label">DEDICATED:</SPAN> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">SIZE:</SPAN> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".gallery").appendChild(card);
    });
}

    
