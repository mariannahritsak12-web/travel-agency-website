
// TODO:
// 1. Add event listeners to handle form submissions and other interactions
// 2. Implement functionality for modals, dropdowns, and other Bootstrap components
// 3. Ensure compatibility with different browsers and devices
// 4. Optimize performance and reduce file size if necessary
// 5. Provide documentation and examples for developers using the library
// 6. Regularly update the library to fix bugs and add new features based on user feedback
// 7. Integrate database support for dynamic content and user interactions
// 8. Implement security measures to protect against common vulnerabilities
// 9. Create a responsive design that works well on various screen sizes and devices
// 10. Integrate with local storage or session storage for saving user preferences and data


// Create data models for offers, users, and other relevant entities
const offers = [
    {
        id: 1,
        title: "Rajskie Wakacje na Malediwach",
        destination: "Malediwy",
        description: "Odkryj rajskie plaże, turkusowe laguny i luksusowe kurorty na Malediwach. Idealne miejsce na relaks i romantyczne chwile.",
        imageUrl: "photos/malediwy_.webp",
        cena: 5000,
        meal: "All inclusive",
        departure: "Warszawa",
        time: "10.08 – 17.08.2025",
        duration: 7,
        startDate: "2025-08-10",
        travelers: 2,
        price: 5000,
        link: "oferta1.html"
    },
    {
        id: 2,
        title: "Alpy - Aktywny Wypoczynek w Górach",
        destination: "Alpy",
        description: "Poznaj fascynującą kulturę Alp, od tradycyjnych wiosek po nowoczesne ośrodki narciarskie. Idealna oferta dla miłośników historii i kultury.",
        imageUrl: "photos/alpy.jpg",
        cena: 7000,
        meal: "Śniadanie",
        departure: "Kraków",
        time: "03.02 – 10.02.2026",
        duration: 7,
        startDate: "2026-02-03",
        travelers: 1,
        price: 7000,
        link: "oferta2.html"
    },
    {
        id: 3,
        title: "Magiczny Maroko - Kulturowa Przygoda",
        destination: "Maroko",
        description: "Odkryj egzotyczne plaże, tętniące życiem miasta i bogatą kulturę Maroka. Idealna oferta dla poszukiwaczy przygód i miłośników natury.",
        imageUrl: "photos/maroko.jpg",
        cena: 4500,
        meal: "All inclusive",
        departure: "Gdańsk",
        time: "20.10 – 27.10.2025",
        duration: 7,
        startDate: "2025-10-20",
        travelers: 4,
        price: 4500,
        link: "oferta3.html"
    },
    {
        id: 4,
        title: "Nowy Jork - Weekend w Wielkim Jabłku",
        destination: "Nowy Jork",
        description: "Odkryj piękno i różnorodność Nowego Jorku, od ikonicznych wieżowców po tętniące życiem dzielnice. Idealna oferta dla miłośników kultury i historii.",
        imageUrl: "photos/new_york.jpg",
        cena: 6000,
        meal: "Śniadanie",
        departure: "Wrocław",
        time: "05.11 – 10.11.2025",
        duration: 5,
        startDate: "2025-11-05",
        travelers: 4,
        price: 6000,
        link: "oferta4.html"
    }
]

// Global variables to store references to form elements
let searchForm;
let destinationInput;
let departureDateInput;
let durationInput;
let travelersInput;
let offersContainer;
let loginForm;
let usernameInput;
let passwordInput;
let errorMessage;

// Validate login form inputs and provide feedback to the user
function validateLoginForm() { 
    error = {
        isValid: false,
        message: ""
    }
   
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    if (!usernameInput.value) {
        error.isValid = false;
        error.message = "Nazwa użytkownika jest wymagana.";
        errorMessage.textContent = error.message;
        return error;
    }
}

function handleFormSubmission(event) {
    event.preventDefault();

    // Get user input values
    const destination = destinationInput.value;
    const departureDate = departureDateInput.value;
    const duration = durationInput.value;
    const travelers = travelersInput.value;

    const targetUrl = `oferty.html?destination=${destination}&departureDate=${departureDate}&duration=${duration}&travelers=${travelers}`;

    // Redirect to the offers page with query parameters
    window.location.href = targetUrl;
}

function getFilteredOffers(destination, departureDate, duration, travelers) {
    // Implement filtering logic based on user input
    return offers.filter(offer => {
        const matchesDestination = destination ? offer.destination.toLowerCase().includes(destination.toLowerCase()) : true;
        const matchesDepartureDate = departureDate ? offer.startDate === departureDate : true;
        const matchesDuration = duration ? offer.duration == duration : true;
        const matchesTravelers = travelers ? offer.travelers >= travelers : true;
        return matchesDestination && matchesDepartureDate && matchesDuration && matchesTravelers;
    });
}

function findOfferById(offerId) {
    // Implement logic to find an offer by its ID
    return offers.find(offer => offer.id === offerId);
}

// Renders a single offer card element based on the offer data and returns the created DOM element
function renderOfferElement(offerData) {
    // Create an offer card element based on the offer data
    var offerElement = document.createElement("div");
    offerElement.classList.add("row", "offer-card", "mb-4");

    offerElement.innerHTML = `
                <div class="col-md-5 p-0">
                    <img src="${offerData.imageUrl}" alt="${offerData.destination}" class="img-fluid offer-image" />
                </div>
                <div class="col-md-7 p-4">
                    <div class="d-flex justify-content-between">
                        <h4 class="title">${offerData.title}</h4>
                        <span class="rating">Ocena: 4.5/5</span>
                    </div>
                    <ul class="mt-3 mb-3 ps-3">
                        <li class="list-style-room">${offerData.duration} dni / ${offerData.duration - 2} nocy</li>
                        <li class="list-style-wylot">Wylot z: ${offerData.departure}</li>
                        <li class="list-style-time">${offerData.time}</li>
                        <li class="list-style-meal">${offerData.meal}</li>
                        <li class="lis">Ubezpieczenie</li>
                    </ul>
                    <p class="fw-semibold">Résidence Odalys Le Hameau du Mottaret<span class="offer-stars">★★★★</span></p>
                    <div class="mt-3">
                        <a href="${offerData.link}"><button class="btn btn-orange">Sprawdz cenę</button></a>
                        <small class="text-muted ms-2">${offerData.price} zł</small>
                    </div>
                </div>
    `;

    return offerElement;
} 

function renderOffers(offers) {
    // Render the filtered offers on the page
    offersContainer.innerHTML = ""; // Clear previous offers

    // Check if there are any offers to display
    if (offers.length === 0) {
        offersContainer.innerHTML = "<p class='text-center'>Brak ofert spełniających kryteria wyszukiwania.</p>";
        return;
    }

    // Render each filtered offer as a card element
    offers.forEach(offer => { 
        var offerElement = renderOfferElement(offer);
        offersContainer.appendChild(offerElement);
    })
}

function initializeBootstrapComponents() { 
  // Initialize modals

}

function setupEventListeners() { 
    searchForm.addEventListener("submit", handleFormSubmission);
}

function init() { 
    console.log("Initializing the travel agency website...");

    // Select form elements
    searchForm = document.getElementById("search-form");
    destinationInput = document.getElementById("destination-input");
    departureDateInput = document.getElementById("departure-date-input");
    durationInput = document.getElementById("duration-input");
    travelersInput = document.getElementById("travelers-input");

    // Check if elements are found
    if (searchForm) {
        console.log("You're on the main page. Search form found.");

        // Set up event listeners
        setupEventListeners();
    } 


    // Select offers container
    offersContainer = document.getElementById("offers-container");

    if (offersContainer) {
        console.log("You're on the offers page. Offers container found.");

        // Get query parameters from URL
        const urlParams = new URLSearchParams(window.location.search);
        const destination = urlParams.get("destination");
        const departureDate = urlParams.get("departureDate");
        const duration = urlParams.get("duration");
        const travelers = urlParams.get("travelers");

        filteredOffers = getFilteredOffers(destination, departureDate, duration, travelers);

        // Load initial offers (if needed) and render them
        renderOffers(filteredOffers);
    }


    // Initialize Bootstrap components
    initializeBootstrapComponents();

    console.log("Initialization complete.");
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);