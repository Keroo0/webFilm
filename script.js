document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.getElementById('carouselTrack');
    let carouselItems = Array.from(carouselTrack.children);

    function cloneItemsContinuously() {
        setInterval(() => {
            carouselItems.forEach(item => {
                const clone = item.cloneNode(true); // Kloning elemen gambar
                carouselTrack.appendChild(clone); // Tambahkan ke dalam track
            });
            carouselItems = Array.from(carouselTrack.children); // Perbarui daftar elemen
        }); // Setiap 3 detik elemen baru dikloning
    }

    function startInfiniteScroll() {
        let scrollAmount = 0;
        const scrollStep = 1; // Kecepatan scroll

        function scroll() {
            scrollAmount += scrollStep;
            if (scrollAmount >= carouselTrack.scrollWidth / 2) {
                scrollAmount = 0; // Reset jika sudah melewati setengah dari lebar track
            }
            carouselTrack.scrollLeft = scrollAmount;
            requestAnimationFrame(scroll); // Loop animasi
        }
        scroll();
    }

    cloneItemsContinuously(); // Mulai cloning berulang
    startInfiniteScroll(); // Mulai animasi scroll
});

// Fungsi untuk menampilkan atau menyembunyikan bagian rekomendasi film
function toggleSections() {
    const recommendationSection = document.getElementById('recommendationSection');
    const newMoviesSection = document.getElementById('newMoviesSection');
    const toggleButton = document.getElementById('toggleButton');

    if (recommendationSection.style.display === 'none') {
        // Tampilkan kembali section recommendation
        recommendationSection.style.display = 'block';
        // Ubah margin-top section header film terbaru
        newMoviesSection.style.marginTop = '20px';
        // Ubah teks tombol menjadi "Lihat Semua"
        toggleButton.textContent = 'Lihat Semua';
    } else {
        // Sembunyikan section recommendation
        recommendationSection.style.display = 'none';
        // Geser section header film terbaru ke atas
        newMoviesSection.style.marginTop = '0';
        // Ubah teks tombol menjadi "Kembali"
        toggleButton.textContent = 'Kembali';
    }
}


// Fungsi untuk menuju halaman streaming
function goToStream(movieId) {
    window.location.href = `stream.html?movieId=${movieId}`;
}

// Fungsi untuk mencari film
function searchMovies() {
    const searchBar = document.getElementById('searchBar');
    const searchTerm = searchBar.value.toLowerCase();
    const movieContainer = document.getElementById('movieContainer');
    const movieCards = Array.from(movieContainer.getElementsByClassName('movie-card'));

    movieCards.forEach(card => {
        const title = card.getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterByGenre(genre) {
    const movieContainer = document.getElementById('movieContainer');
    const movieCards = Array.from(movieContainer.getElementsByClassName('movie-card'));
    const recommendationSection = document.getElementById('recommendationSection');

    // Sembunyikan bagian rekomendasi saat filter aktif
    recommendationSection.style.display = 'none';

    movieCards.forEach(card => {
        const cardGenre = card.getAttribute('data-genre');
        if (cardGenre.includes(genre)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    movieCards.forEach(card => {
        card.style.display = 'block';
    });
}
