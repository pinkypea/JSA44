// const url = "https://pokeapi.co/api/v2/ability/7";
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const containers = document.querySelectorAll(".movie-slider-container");

for (let i = 0; i < containers.length; i++) {
  const container = containers[i];
  const slider = container.querySelector(".movie-slider");
  const leftBtn = container.querySelector(".scroll-btn.left");
  const rightBtn = container.querySelector(".scroll-btn.right");

  leftBtn.onclick = () => slider.scrollBy({ left: -500, behavior: "smooth" });
  rightBtn.onclick = () => slider.scrollBy({ left: 500, behavior: "smooth" });
}

const TMDB_API_KEY = "ca75115bc2b339d29d236aac176376d8";
const API_URL = "https://api.themoviedb.org/3/movie";
const IMAGE_URL = "https://image.tmdb.org/t/p/w300";

function fetch_movie(url, container_id){
    fetch(`${API_URL}${url}?api_key=${TMDB_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById(container_id);

            for (let i = 0; i < data.results.length; i++){
                let movie = data.results[i];
                let movie_card = document.createElement("div");
                movie_card.className = "movie-card";

                movie_card.innerHTML = `
                <img src="${IMAGE_URL + movie.poster_path}">
                <p>${movie.title}</p>`

                movie_card.addEventListener("click", () => {
                    window.location.href = `../info.html?id=${movie.id}`
                })

                container.appendChild(movie_card);
            }
        })
        .catch(error => console.log(error))
}

fetch_movie("/now_playing", "now-playing");
fetch_movie("/popular", "popular");
fetch_movie("/top_rated", "top-rated");
fetch_movie("/upcoming", "upcoming");

// https://api.themoviedb.org/3/movie/now_playing
// https://api.themoviedb.org/3/movie/popular
// https://api.themoviedb.org/3/movie/top_rated
// https://api.themoviedb.org/3/movie/upcoming

fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))