const TMDB_API_KEY = "ca75115bc2b339d29d236aac176376d8";
const API_URL = "https://api.themoviedb.org/3/movie";
const IMAGE_URL = "https://image.tmdb.org/t/p/w300";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const movie_id = params.get("id");

    //=====1. Movie details====
    fetch(`${API_URL}/${movie_id}?api_key=${TMDB_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            // Ảnh phim
            document.getElementById("preview-img").src = IMAGE_URL + data.poster_path;

            // Tiêu đề phim
            document.getElementById("movie-title").textContent = data.title;

            // Ngày phát hành phim
            document.getElementById("release-date").innerHTML = `
                Release date: ${data.release_date}`;

            // Mô tả phim
            document.getElementById("movie-description").textContent = data.overview;

            // Thể loại phim
            const genres_box = document.getElementById("genres");
            for (let i = 0; i < data.genres.length; i++){
                genres_box.innerHTML += `
                <span class="genre-tag">${data.genres[i].name}</span>`
            }
        })
        .catch(error => console.log(error));

    //===== 2. Movie casts =====
    fetch(`${API_URL}/${movie_id}/credits?api_key=${TMDB_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            const castGrids = document.getElementById("casts-grid");
            castGrids.innerHTML = "";
            // Lấy 12 casts đầu tiên
            const casts = data.cast.slice(0, 20);

            for (let i = 0; i < casts.length; i++){
                const cast = casts[i];

                castGrids.innerHTML += `
                <div class = "cast-card">
                    <img src = "${IMAGE_URL + cast.profile_path} alt="${cast.name}">
                    <p class = "cast-name">${cast.name}</p>
                    <p class = "cast-role">${cast.character || ""}</p>    
                </div>`
            };
        })
        .catch((error) => console.log(error));
});

fetch("https://api.themoviedb.org/3/movie/1084244/credits?api_key=ca75115bc2b339d29d236aac176376d8")
    .then(res => res.json())
    .then(data => console.log(data))