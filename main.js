const apiUrl =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=27';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchApi =
    'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const searchInput = document.getElementById('searchInput');

const displayMovies = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const movies = data.results;
            console.log(movies);
            movies.forEach((element) => {
                const container = document.createElement('div');
                const image = document.createElement('img');
                const title = document.createElement('h3');

                image.src = `${imgPath}${element.poster_path}`;
                title.innerHTML = `${element.title}`;

                container.appendChild(image);
                container.appendChild(title);
                main.appendChild(container);
            });
        })
        .catch((error) => console.log(error));
};

displayMovies(apiUrl);

form.addEventListener('input', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchedMovie = searchInput.value;

    if (searchedMovie) {
        displayMovies(`${searchApi}${searchedMovie}`);
        searchedMovie.value = '';
    }
});
