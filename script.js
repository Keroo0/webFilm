document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselItems = Array.from(carouselTrack.children);

    function cloneItems() {
        carouselItems.forEach(item => {
            const clone = item.cloneNode(true);
            carouselTrack.appendChild(clone);
        });
    }

    function startInfiniteScroll() {
        let scrollAmount = 0;
        const scrollStep = 1; // Adjust this value to control the scroll speed
        const maxScroll = carouselTrack.scrollWidth / 2;

        function scroll() {
            scrollAmount += scrollStep;
            if (scrollAmount >= maxScroll) {
                scrollAmount = 0;
            }
            carouselTrack.scrollTo(scrollAmount, 0);
            requestAnimationFrame(scroll);
        }

        scroll();
    }

    cloneItems();
    startInfiniteScroll();
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

// Jalankan fungsi saat halaman dimuat
window.onload = () => {
    displayRecommendedMovies();
    displayMovies();
};
// Fungsi untuk menuju halaman streaming
function goToStream(movieId) {
    window.location.href = `stream.html?movieId=${movieId}`;
}