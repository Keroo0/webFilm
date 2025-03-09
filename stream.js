document.addEventListener('DOMContentLoaded', function() {
    // Ambil parameter movieId dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movieId');

    // Data film (contoh data, Anda bisa menggantinya dengan data sebenarnya)
    const movies = [
        { id: '1', title: 'Captain America: Brave New World (2025)', description: 'Deskripsi film 1', image: '/assets/poster/captain.jpg', video: 'path/to/video1.mp4' },
        { id: '2', title: 'Paddington in Peru (2025)', description: 'Deskripsi film 2', image: '/assets/poster/Paddington in Peru.jpg', video: 'path/to/video2.mp4' },
        { id: '3', title: 'Inside Out 2', description: 'Deskripsi film 3', image: '/assets/poster/insideout2.jpg', video: 'path/to/video3.mp4' },
        { id: '4', title: 'SUMALA', description: 'Deskripsi film 4', image: '/assets/poster/SUMALA.jpg', video: 'path/to/video4.mp4' },
        { id: '5', title: 'Ambyar Mak byar', description: 'Deskripsi film 5', image: '/assets/poster/Ambyar Mak byar.jpg', video: 'path/to/video5.mp4' },
        { id: '6', title: 'MAMA', description: 'Deskripsi film 6', image: '/assets/poster/MAMA.jpg', video: 'path/to/video6.mp4' },
        { id: '7', title: 'SUMALA', description: 'Deskripsi film 7', image: '/assets/poster/SUMALA.jpg', video: 'path/to/video7.mp4' },
        { id: '8', title: 'Utusan iblis', description: 'Deskripsi film 8', image: '/assets/poster/Utusan iblis.jpg', video: 'path/to/video8.mp4' },
        { id: '9', title: 'Moana 2', description: 'Deskripsi film 9', image: '/assets/poster/moana2.jpeg', video: 'path/to/video9.mp4' },
        { id: '10', title: 'Film 10', description: 'Deskripsi film 10', image: 'path/to/image10.jpg', video: 'path/to/video10.mp4' },
        // Tambahkan data film lainnya di sini
    ];

    // Temukan film berdasarkan movieId
    const movie = movies.find(m => m.id === movieId);

    // Tampilkan detail film
    if (movie) {
        document.getElementById('movie-title').textContent = movie.title;
        document.getElementById('movie-description').textContent = movie.description;
        document.getElementById('movie-player').src = movie.video;
    } else {
        document.getElementById('movie-title').textContent = 'Film tidak ditemukan';
        document.getElementById('movie-description').textContent = '';
        document.getElementById('movie-player').style.display = 'none';
    }
});