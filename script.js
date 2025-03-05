// Data film rekomendasi (carousel)
const recommendedMovies = [
    { title: "The Dark Knight", image: "https://via.placeholder.com/300x200" },
    { title: "Spider-Man: No Way Home", image: "https://via.placeholder.com/300x200" },
    { title: "Dune", image: "https://via.placeholder.com/300x200" },
    { title: "Sonic 2", image: "https://via.placeholder.com/300x200" }
];

// Data film terbaru
const newMovies = [
    { title: "Inception", image: "https://via.placeholder.com/200x300" },
    { title: "Avengers: Endgame", image: "https://via.placeholder.com/200x300" },
    { title: "Interstellar", image: "https://via.placeholder.com/200x300" }
];

// Simpan ke localStorage jika belum ada
if (!localStorage.getItem("movies")) {
    localStorage.setItem("movies", JSON.stringify(newMovies));
}

// Fungsi untuk menampilkan film di carousel
function displayRecommendedMovies() {
    const carouselTrack = document.getElementById("carouselTrack");

    // Duplikasi item agar efek infinite scroll lebih mulus
    recommendedMovies.concat(recommendedMovies).forEach(movie => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        item.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        carouselTrack.appendChild(item);
    });

    // Aktifkan animasi sliding
    let scrollAmount = 0;
    setInterval(() => {
        scrollAmount += 1;
        if (scrollAmount >= carouselTrack.scrollWidth / 2) {
            scrollAmount = 0; // Reset untuk efek loop
        }
        carouselTrack.style.transform = `translateX(-${scrollAmount}px)`;
    }, 30);
}

// Fungsi untuk menampilkan film terbaru
function displayMovies() {
    const movieContainer = document.getElementById("movieContainer");
    movieContainer.innerHTML = ""; 
    const movies = JSON.parse(localStorage.getItem("movies"));
    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieContainer.appendChild(movieCard);
    });
}

// Fungsi untuk menampilkan atau menyembunyikan bagian rekomendasi film
function toggleSections() {
    const recommendationSection = document.getElementById('recommendationSection');
    const movieContainer = document.getElementById('movieContainer');
    const toggleButton = document.getElementById('toggleButton');

    if (recommendationSection.style.display === 'none') {
        recommendationSection.style.display = 'block';
        toggleButton.textContent = 'Lihat Semua';
    } else {
        recommendationSection.style.display = 'none';
        toggleButton.textContent = 'Kembali';
    }
}

// Jalankan fungsi saat halaman dimuat
window.onload = () => {
    displayRecommendedMovies();
    displayMovies();
};
