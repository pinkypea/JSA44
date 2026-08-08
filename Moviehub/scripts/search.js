const search_input = document.getElementById("search-input");
const search_button = document.getElementById("search-btn");

function search_movie() {
    let keyword = search_input.value.trim();

    if (!keyword){
        alert ("Please enter your key word");
    }

    window.location.href = `../search.html?query=${encodeURIComponent(keyword)}`;
}

search_button.addEventListener("click", search_movie);