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


function fetchProjectSlugs(query = '') {
  const url = `https://www.thisispaper.com/intelligence/api/v1/search?q=${encodeURIComponent(query)}&limit=20`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer tip_live_1ecchn7ax51e07b2zgscgfe9'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Extract just the slug strings into an array
      const slugs = data.results.map(project => project.slug);
      console.log('Available Slugs:', slugs);
      return slugs;
    })
    .catch(error => {
      console.error('Error fetching slugs:', error);
    });
}

// Fetch a list of slugs related to architecture
fetchProjectSlugs('photography');


function displayAllProjectsFromSearch(searchQuery) {
  const searchUrl = `https://www.thisispaper.com/intelligence/api/v1/search?q=${encodeURIComponent(searchQuery)}&limit=5`;

  fetch(searchUrl, {
    headers: { 'Authorization': 'Bearer tip_live_1ecchn7ax51e07b2zgscgfe9' }
  })
    .then(response => {
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`Found ${data.results.length} projects. Fetching details for each...`);

      // Iterate through every project result from the search
      data.results.forEach(item => {
        const projectUrl = `https://www.thisispaper.com/intelligence/api/v1/project/${item.slug}`;

        fetch(projectUrl, {
          headers: { 'Authorization': 'Bearer tip_live_1ecchn7ax51e07b2zgscgfe9' }
        })
          .then(res => {
            if (!res.ok) throw new Error(`Project ${item.slug} failed: ${res.status}`);
            return res.json();
          })
          .then(projectDetails => {
            console.log(`--- Full Data for [${item.slug}] ---`);
            console.log(projectDetails);
          })
          .catch(err => console.error(`Error for ${item.slug}:`, err));
      });
    })
    .catch(err => console.error('Search error:', err));
}

// Executes search and prints full details for every returned slug
displayAllProjectsFromSearch('concrete');