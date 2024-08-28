// Sample array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById("quote-display");
    quoteDisplay.textContent = quotes[randomIndex];
};

$(document).ready(() => {
    const slider = $('#image-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
    });

    slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        slider.slick('slickPause').slick('slickPlay');
    });
});

const teamMembers = [
    { name: "Sasidharan Elangovan", role: "Founder", image: "Images/Person 1.jpeg" },
    { name: "Edward Kenway", role: "Lead Developer", image: "Images/Person 2.jpeg" },
    { name: "Mark Antony", role: "Designer", image: "Images/Person 3.jpeg" },
];

document.addEventListener("DOMContentLoaded", () => {
    displayTeamMembers(teamMembers);
});

const displayTeamMembers = (teamMembers) => {
    const teamList = document.getElementById("team-list");

    teamMembers.forEach(member => {
        const listItem = document.createElement("li");

        const imageElement = document.createElement("img");
        imageElement.src = member.image;
        imageElement.alt = member.name;
        imageElement.style.width = "100px";
        imageElement.style.height = "100px";
        listItem.appendChild(imageElement);

        const textElement = document.createElement("div");
        textElement.textContent = `${member.name} - ${member.role}`;
        listItem.appendChild(textElement);

        teamList.appendChild(listItem);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const availabilityData = [
        { date: "2023-11-01", availability: "Available" },
        { date: "2023-11-02", availability: "Not Available" },
    ];

    displayAvailability(availabilityData);

    $("#category").selectmenu();
});

const displayAvailability = (availabilityData) => {
    const tableBody = document.querySelector("#availability-table tbody");

    availabilityData.forEach(data => {
        const row = document.createElement("tr");
        const dateCell = document.createElement("td");
        const availabilityCell = document.createElement("td");

        dateCell.textContent = data.date;
        availabilityCell.textContent = data.availability;

        row.appendChild(dateCell);
        row.appendChild(availabilityCell);

        tableBody.appendChild(row);
    });
};

$(document).ready(() => {
    $("#datepicker").datepicker();

    $("#submit-btn").on("click", submitForm);
});

const submitForm = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var datepicker = document.getElementById("datepicker").value;
    var category = $("#category").val();

    console.log('Form Submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Selected Date:', datepicker);
    console.log('Selected Category:', category);

    showSuccessMessage();
};

const showSuccessMessage = () => {
    alert("The message has been sent");
};
