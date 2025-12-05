const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 550) {
        mainnav.classList.remove('show');
        hambutton.classList.remove('show');
    }
});

const lessons = [
    {
        id: "Session 1",
        dates: "April 6-15",
        level: "Beginner"
    },
    {
        id: "Session 2",
        dates: "April 20-29",
        level: "Beginner"
    },
    {
        id: "Session 3",
        dates: "May 4-13",
        level: "Beginner"
    },
    {
        id: "Session 4",
        dates: "May 18-27",
        level: "Advanced"
    },
    {
        id: "Session 5",
        dates: "June 1-10",
        level: "Beginner"
    },
    {
        id: "Session 6",
        dates: "June 15-24",
        level: "Beginner"
    },
    {
        id: "Session 7",
        dates: "July 6-15",
        level: "Beginner"
    },
    {
        id: "Session 8",
        dates: "July 20-29",
        level: "Advanced"
    }
];

const lessonsSelect = document.querySelector("#lessonSession");

if (lessonsSelect) {
    lessons.forEach(lesson => {
        const option = document.createElement("option");
        option.textContent = `${lesson.id} - ${lesson.dates} (${lesson.level})`;
        lessonsSelect.appendChild(option);
    })
}

