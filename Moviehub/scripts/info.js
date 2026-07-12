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
});