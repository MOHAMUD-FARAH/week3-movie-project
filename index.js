document.addEventListener('DOMContentLoaded', () => {
    // Fetch details for the first movie
    fetchMovieDetails(1);

    // Fetch the list of all movies
    fetchMovieList();

    // Example event listener for Buy Ticket button
    document.getElementById('movie-details').addEventListener('click', (event) => {
        if (event.target.classList.contains('buy-ticket')) {
            buyTicket();
        }
    });
});

async function fetchMovieDetails(movieId) {
    try {
        const response = await fetch(`http://localhost:3000/films/${movieId}`);
        const movieDetails = await response.json();
        displayMovieDetails(movieDetails);
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}

async function fetchMovieList() {
    try {
        const response = await fetch('http://localhost:3000/films');
        const movieList = await response.json();
        displayMovieList(movieList);
    } catch (error) {
        console.error('Error fetching movie list:', error);
    }
}

function displayMovieDetails(movieDetails) {
    const movieDetailsContainer = document.getElementById('movie-details');
    movieDetailsContainer.innerHTML = `
        <h2>${movieDetails.title}</h2>
        <img src="${movieDetails.poster}" alt="${movieDetails.title} Poster" width="200">
        <p>Runtime: ${movieDetails.runtime} minutes</p>
        <p>Showtime: ${movieDetails.showtime}</p>
        <p>Available Tickets: ${calculateAvailableTickets(movieDetails)}</p>
        <button class="buy-ticket">Buy Ticket</button>
    `;
}

function displayMovieList(movieList) {
    const filmsList = document.getElementById('films');
    filmsList.innerHTML = movieList.map(movie => `
        <li>${movie.title}</li>
    `).join('');
}

function calculateAvailableTickets(movieDetails) {
    return movieDetails.capacity - movieDetails.tickets_sold;
}

function buyTicket() {
    // Implement logic for buying a ticket
    // Update the available tickets count and refresh the display
}

