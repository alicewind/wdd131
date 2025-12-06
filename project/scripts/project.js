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

const lessonsSelect = document.querySelector("#lesson-session");

if (lessonsSelect) {
    lessons.forEach(lesson => {
        const option = document.createElement("option");
        option.textContent = `${lesson.id} - ${lesson.dates} (${lesson.level})`;
        lessonsSelect.appendChild(option);
    })
}

const lessonDropdown = document.querySelector("#lesson-session");

if (lessonDropdown) {
    lessonDropdown.addEventListener("change", () => {
        localStorage.setItem("session-choice", lessonDropdown.value);
    });
}

const sessionResult = document.querySelector(".session-choice");

if (sessionResult) {
    const storedChoice = localStorage.getItem("session-choice");
    sessionResult.textContent = storedChoice || "No session requested";
}

const boardMembers = [
    {
        memberName: "Alice Wind",
        position: "President",
        biography: "Alice discovered the beauty and peacefulness of the Great Salt Lake after taking rowing lessons with GSLR in 2018. Spending time on the water has become a treasured part of her week. A retired engineer, she also enjoys road biking, hiking, reading, watching thunderstorms, and planning National Park trips with her husband, Steve. Alice also cherishes time spent with her five daughters and four grandchildren.",
        image: "images/alice.webp"
    },
    {
        memberName: "Irene Lysenko",
        position: "Vice-President",
        biography: "Irene fell in love with rowing while living in Connecticut some 15+ years ago.  What was supposed to be a recreational pastime quickly turned into a six-day-a-week training schedule and competitions up and down the East Coast.  As much fun as she has competing, she finds her greatest joy comes from teaching and coaching and watching others fall in love with the sport.",
        image: "images/irene.webp"
    },
    {
        memberName: "Siarl Ward",
        position: "Secretary",
        biography: "A native of Ogden, Utah, Siarl grew up connected to the Great Salt Lake, enjoying childhood adventures on its shores. In 2022, as the lake declined, he recognized its ecological importance and discovered Great Salt Lake Rowing. With a background in rafting, kayaking, sailing, and water-skiing, Siarl took Learn to Row lessons and quickly fell head-over-paddles for the sport.",
        image: "images/siarl.webp"
    },
    {
        memberName: "Meghan Saunders",
        position: "Treasurer",
        biography: "Meghan started rowing with GSLR nine years ago after growing up in Alberta, Canada. Drawn to the sport and club community, she soon began coaching and enjoys helping others improve their rowing skills. Outside rowing, Meghan works as an industrial designer, enjoys traveling, and takes part in pottery, climbing, stand-up paddle boarding, and soccer.",
        image: "images/meghan.webp"
    },
    {
        memberName: "Sarah Waters",
        position: "Membership",
        biography: "Sarah, a Utah native and adventure enthusiast, finally tried rowing with Great Salt Lake Rowing in 2022 after years of interest. Instantly hooked by both the sport and the club’s community, she now serves as a coach and board member. Beyond rowing, Sarah enjoys traveling, photography, rock climbing, hiking, golfing, and staying active with a variety of social hobbies. ",
        image: "images/sarah.webp"
    },
    {
        memberName: "Malaika Homo",
        position: "Communications",
        biography: "Malaika, originally from Elkhart, Indiana, moved to Utah in 2005, drawn by her passion for the outdoors. After years of triathlon racing, she discovered rowing with GSLR in 2018 and quickly became hooked. A Certified Personal Trainer and Endurance Coach, Malaika enjoys helping others embrace movement, and spends her free time rowing, hiking, swimming, snowboarding, gardening, and exploring with her awesome dogs.",
        image: "images/malaika.webp"
    }
];

function createBoardCard(boardMembers) {
    const profilesContainer = document.querySelector(".profiles");
    if (!profilesContainer) return;

    document.querySelector(".profiles").innerHTML = "";
    boardMembers.forEach(boardMember => {
        let card = document.createElement("section");
        let header = document.createElement("h3");
        let biography = document.createElement("p");
        let img = document.createElement("img");

        header.textContent = `${boardMember.memberName} - ${boardMember.position}`;
        biography.textContent = boardMember.biography;

        img.setAttribute("src", boardMember.image);
        img.setAttribute("alt", `${boardMember.memberName}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "145");

        card.appendChild(header);
        card.appendChild(biography);
        card.appendChild(img);

        profilesContainer.appendChild(card);
    });
}

createBoardCard(boardMembers);

function loadLessonsTable(lessons) {
    const tableBody = document.getElementById("table-body");

    if (!tableBody) return;
    tableBody.innerHTML = "";

    lessons.forEach(lesson => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${lesson.id}</td>
            <td>${lesson.dates}</td>
            <td>${lesson.level}</td>
            `;
        tableBody.appendChild(row);
    })
}

loadLessonsTable(lessons);

