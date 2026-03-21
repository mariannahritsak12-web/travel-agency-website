
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
    },
    {
        id: 2,
        title: "Kulturowa Przygoda w Japonii",
        destination: "Japonia",
        description: "Poznaj fascynującą kulturę Japonii, od tradycyjnych świątyń po nowoczesne miasta. Idealna oferta dla miłośników historii i kultury.",
        imageUrl: "photos/japonia.webp",
        cena: 7000,
        meal: "Śniadanie",
        departure: "Kraków",
        time: "15.09 – 22.09.2025",
        duration: 7,
        startDate: "2025-09-15",
    },
    {
        id: 3,
        title: "Egzotyczna Przygoda w Tajlandii",
        destination: "Tajlandia",
        description: "Odkryj egzotyczne plaże, tętniące życiem miasta i bogatą kulturę Tajlandii. Idealna oferta dla poszukiwaczy przygód i miłośników natury.",
        imageUrl: "photos/tajlandia.webp",
        cena: 4500,
        meal: "All inclusive",
        departure: "Gdańsk",
        time: "20.10 – 27.10.2025",
        duration: 7,
        startDate: "2025-10-20",
    },
    {
        id: 4,
        title: "Europejska Odyseja po Stolicach",
        destination: "Europa",
        description: "Odkryj piękno i różnorodność europejskich stolic, od romantycznego Paryża po historyczny Rzym. Idealna oferta dla miłośników kultury i historii.",
        imageUrl: "photos/europa.webp",
        cena: 6000,
        meal: "Śniadanie",
        departure: "Wrocław",
        time: "05.11 – 12.11.2025",
        duration: 7,
        startDate: "2025-11-05",
    }
]

// Global variables to store references to form elements
let searchForm;
let destinationInput;
let departureDateInput;
let durationInput;
let travelersInput;

function handleFormSubmission(event) {
    event.preventDefault();

    // Get user input values
    const destination = destinationInput.value;
    const departureDate = departureDateInput.value;
    const duration = durationInput.value;
    const travelers = travelersInput.value;

    // Filter offers based on user input
    const filteredOffers = getFilteredOffers(destination, departureDate, duration, travelers);

    // Render the filtered offers on the page
    renderOffers(filteredOffers);
}

function getFilteredOffers() {
  // Implement filtering logic based on user input
}

function findOfferById(offerId) {
    // Implement logic to find an offer by its ID
    return offers.find(offer => offer.id === offerId);
}

// Renders a single offer card element based on the offer data and returns the created DOM element
function renderOfferElement(offerData) {
    // Create an offer card element based on the offer data
    var offerElement = document.createElement("div");
    offerElement.classList.add("col-md-5", "p-0", "offer-card", "mb-4");

    var offerImage = document.createElement("img");
    offerImage.src = offerData.imageUrl;
    offerImage.alt = offerData.destination;
    offerImage.classList.add("img-fluid", "offer-image");

    var offerContent = document.createElement("div");
    offerContent.classList.add("offer-content", "p-3");

    var offerTitle = document.createElement("h6");
    offerTitle.classList.add("mb-1");
    offerTitle.innerHTML = `<strong>${offerData.title}</strong>`;

    var offerDetails = document.createElement("ul");
    offerDetails.classList.add("mb-1", "text-muted", "small");

    offerElement.appendChild(offerImage);
    offerContent.appendChild(offerTitle);
    offerElement.appendChild(offerContent);

    return offerElement;
} 

function renderOffers(offers) {
    // Render the filtered offers on the page
    offersContainer.innerHTML = ""; // Clear previous offers

    // Get filtered offers based on user input
    const filteredOffers = getFilteredOffers(destination, departureDate, duration, travelers);

    // Check if there are any offers to display
    if (filteredOffers.length === 0) {
        offersContainer.innerHTML = "<p class='text-center'>Brak ofert spełniających kryteria wyszukiwania.</p>";
        return;
    }

    // Render each filtered offer as a card element
    filteredOffers.forEach(offer => { 
        var offerElement = renderOfferElement(offer);
        offersContainer.appendChild(offerElement);
    })
}

function initializeBootstrapComponents() { 
  // Initialize modals

}

function toggleReadOnlyMode() { 
    // 
}

function setupEventListeners() { 
    searchForm.addEventListener("submit", handleFormSubmission);
}

function init() { 
    console.log("Initializing the travel agency website...");

    // Check if elements are found
    if (searchForm) {
        console.log("You're on the main page. Search form found.");

        // Select form elements
        const searchForm = document.getElementById("search-form");
        const destinationInput = document.getElementById("destination-input");
        const departureDateInput = document.getElementById("departure-date-input");
        const durationInput = document.getElementById("duration-input");
        const travelersInput = document.getElementById("travelers-input");

        // Set up event listeners
        setupEventListeners();
    } 

    if (offersContainer) {
        console.log("You're on the offers page. Offers container found.");

        
        // Select offers container
        const offersContainer = document.getElementById("offers-container");

        // Load initial offers (if needed) and render them
        renderOffers(offers);
    }


    // Initialize Bootstrap components
    initializeBootstrapComponents();

    console.log("Initialization complete.");
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);