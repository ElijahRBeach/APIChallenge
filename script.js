const baseURL = 'https://ghibliapi.herokuapp.com';

let formElement = document.getElementById('search-form');
let listElement = document.getElementById('film-list');

function fetchFilms() {
    fetch(`${ baseURL }/films`)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);

        for(let film of jsonData) {
            displayFilms(film)
        }
    })
}

function displayFilms(filmData) {
    let filmCard = document.createElement('li');
    let filmTitle = document.createElement('h1');
    let filmImage = document.createElement('img');
    let filmDescription = document.createElement('p');

    filmTitle.innerText = filmData.title;
    filmImage.src = filmData.image;
    filmDescription.innerText = filmData.description;

    filmCard.classList.add('film-card');
    filmTitle.classList.add('film-title');
    filmImage.classList.add('film-title');
    filmDescription.classList.add('film-description');

    filmCard.appendChild(filmTitle);
    filmCard.appendChild(filmImage);
    filmCard.appendChild(filmDescription);

    listElement.appendChild(filmCard);
}

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    fetchFilms();
})