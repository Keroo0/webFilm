document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.getElementById('carouselTrack');
    let carouselItems = Array.from(carouselTrack.children);

    function cloneItemsForLoop() {
        for (let i = 0; i < 2; i++) {
            carouselItems.forEach(item => {
                const clone = item.cloneNode(true);
                carouselTrack.appendChild(clone);
            });
        }
    }

    function startInfiniteScroll() {
        let scrollAmount = 0;
        const scrollStep = 1;

        function scroll() {
            scrollAmount -= scrollStep;
            if (scrollAmount <= -carouselTrack.scrollWidth / 2) {
                scrollAmount = 0;
            }
            carouselTrack.style.transform = `translateX(${scrollAmount}px)`;
            requestAnimationFrame(scroll);
        }
        scroll();
    }

    cloneItemsForLoop();
    startInfiniteScroll();
});

// Toggle Section
function toggleSections() {
    const recommendationSection = document.getElementById('recommendationSection');
    const newMoviesSection = document.getElementById('newMoviesSection');
    const toggleButton = document.getElementById('toggleButton');

    if (recommendationSection.style.display === 'none') {
        recommendationSection.style.display = 'block';
        newMoviesSection.style.marginTop = '20px';
        toggleButton.textContent = 'Lihat Semua';
    } else {
        recommendationSection.style.display = 'none';
        newMoviesSection.style.marginTop = '0';
        toggleButton.textContent = 'Kembali';
    }
}

// Go to Stream
function goToStream(movieId) {
    window.location.href = `stream.html?movieId=${movieId}`;
}

// Search Movies
function searchMovies() {
    const searchBar = document.getElementById('searchBar');
    const searchTerm = searchBar.value.toLowerCase();
    const movieContainer = document.getElementById('movieContainer');
    const movieCards = Array.from(movieContainer.getElementsByClassName('movie-card'));

    movieCards.forEach(card => {
        const title = card.getElementsByTagName('h3')[0].textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
}

// Search with Enter Key
document.getElementById('searchBar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchMovies();
    }
});

// Filter By Genre
function filterByGenre(genre) {
    const movieCards = Array.from(document.getElementsByClassName('movie-card'));
    const recommendationSection = document.getElementById('recommendationSection');

    recommendationSection.style.display = 'none';

    movieCards.forEach(card => {
        const cardGenre = card.getAttribute('data-genre');
        card.style.display = cardGenre.includes(genre) ? 'block' : 'none';
    });
}
