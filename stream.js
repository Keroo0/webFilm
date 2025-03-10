document.addEventListener('DOMContentLoaded', function() {
    // Ambil parameter movieId dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movieId');

    // Data film
    const movies = [
        {
            id: '1',
            title: 'Captain America: Brave New World (2025)',
            genre: 'Action, Science Fiction, Thriller',
            description: 'Setelah peristiwa "The Falcon and the Winter Soldier," Sam Wilson kini menjadi Captain America. Dia harus menghadapi ancaman baru yang dapat mengguncang dunia, serta beradaptasi dengan identitas barunya sebagai pemimpin dalam pertarungan demi keadilan.',
            image: '/assets/poster/captain.jpg',
            video: 'path/to/video1.mp4'
        },
        {
            id: '2',
            title: 'Paddington in Peru (2025)',
            genre: 'Comedy, Adventure, Family',
            description: 'Paddington kembali ke Peru untuk mengunjungi Bibi Lucy, namun petualangannya berubah menjadi sebuah pencarian yang penuh kejutan dan misteri. Dalam perjalanannya, Paddington menjelajahi hutan Amazon dan bertemu teman-teman baru.',
            image: '/assets/poster/Paddington_in_Peru.jpg',
            video: 'path/to/video2.mp4'
        },
        {
            id: '3',
            title: 'Inside Out 2',
            genre: 'Animation, Comedy, Family',
            description: 'Riley telah tumbuh menjadi remaja, dan emosi di dalam pikirannya menghadapi tantangan baru. Saat perubahan besar datang dalam hidupnya, emosi seperti Anxiety mulai muncul, menambah dinamika unik dalam pengendalian pikirannya.',
            image: '/assets/poster/insideout2.jpg',
            video: 'path/to/video3.mp4'
        },
        {
            id: '4',
            title: 'SUMALA',
            genre: 'Horror, Mystery',
            description: 'Sebuah kisah mistis yang mengangkat legenda dari Nusantara. Seorang pemuda harus menghadapi kekuatan gelap setelah menemukan artefak kuno yang memiliki rahasia mengerikan.',
            image: '/assets/poster/SUMALA.jpg',
            video: 'path/to/video4.mp4'
        },
        {
            id: '5',
            title: 'Ambyar Mak Byar',
            genre: 'Drama, Comedy',
            description: 'Kisah komedi romantis yang mengangkat budaya lokal dengan sentuhan musik dangdut. Seorang penyanyi jalanan jatuh cinta dengan wanita dari keluarga kaya, tetapi mereka harus menghadapi perbedaan dunia yang mereka tinggali.',
            image: '/assets/poster/Ambyar_Mak_Byar.jpg',
            video: 'path/to/video5.mp4'
        },
        {
            id: '6',
            title: 'MAMA',
            genre: 'Horror, Thriller',
            description: 'Film horor psikologis tentang seorang ibu yang kehilangan anaknya secara misterius. Namun, setelah kejadian aneh mulai terjadi di rumahnya, dia menyadari bahwa sesuatu yang jahat sedang mengintainya.',
            image: '/assets/poster/MAMA.jpg',
            video: 'path/to/video6.mp4'
        },
        {
            id: '7',
            title: 'SUMALA',
            genre: 'Horror, Mystery',
            description: 'Versi berbeda dari kisah SUMALA, mengangkat elemen supranatural dan mitologi lokal yang menggugah rasa takut dan penasaran.',
            image: '/assets/poster/SUMALA.jpg',
            video: 'path/to/video7.mp4'
        },
        {
            id: '8',
            title: 'Utusan Iblis',
            genre: 'Horror, Thriller',
            description: 'Seorang pemuda yang bekerja di rumah sakit jiwa menemukan bahwa beberapa pasien memiliki kesamaan—mereka mengaku diutus oleh kekuatan gelap untuk menjalankan misi tertentu. Apa yang terjadi selanjutnya akan mengubah cara pandangnya terhadap dunia nyata dan dunia gaib.',
            image: '/assets/poster/Utusan_Iblis.jpg',
            video: 'path/to/video8.mp4'
        },
        {
            id: '9',
            title: 'Moana 2',
            genre: 'Animation, Adventure, Fantasy',
            description: 'Moana kembali dalam petualangan baru yang membawanya lebih jauh ke lautan luas. Dengan teman-temannya, dia mencari kebenaran tentang warisan keluarganya dan misteri yang tersembunyi di balik ombak.',
            image: '/assets/poster/moana2.jpeg',
            video: 'path/to/video9.mp4'
        },
        {
            id: '10',
            title: 'Film 10',
            genre: 'Unknown',
            description: 'Sebuah film dengan genre yang masih dirahasiakan, tetapi diprediksi akan membawa pengalaman sinematik yang unik.',
            image: 'path/to/image10.jpg',
            video: 'path/to/video10.mp4'
        }
    ];

    // Temukan film berdasarkan movieId
    const movie = movies.find(m => m.id === movieId);

    if (movie) {
        document.getElementById('movie-title').textContent = movie.title;
        document.getElementById('movie-genre').textContent = `Genre: ${movie.genre}`;
        document.getElementById('movie-description').textContent = movie.description;
        document.getElementById('movie-player').src = movie.video;
        
        // Perbarui gambar poster
        const moviePoster = document.getElementById('movie-poster');
        moviePoster.src = movie.image;
        moviePoster.alt = `Poster ${movie.title}`;
        moviePoster.style.display = 'block'; // Pastikan poster terlihat
    } else {
        document.getElementById('movie-title').textContent = 'Film tidak ditemukan';
        document.getElementById('movie-genre').textContent = '';
        document.getElementById('movie-description').textContent = '';
        document.getElementById('movie-player').style.display = 'none';

        // Sembunyikan poster jika film tidak ditemukan
        document.getElementById('movie-poster').style.display = 'none';
    }
});
