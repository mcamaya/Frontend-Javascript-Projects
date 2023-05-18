import fetch from "node-fetch";
const API = 'https://rickandmortyapi.com/api';

const fetchCharacters = async function(urlApi){
    try {
        const response = await fetch(urlApi);
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error);
    }
}

/* const prueba = await fetchCharacters(`${API}/character`);
console.log(prueba); */


const fetchedCharacters = await fetchCharacters(`${API}/character`);
const characterData = fetchedCharacters.results;
console.log(characterData);

const cardsContainer = document.querySelector('#cards-container');

async function getCharacters(character){
    cardsContainer.innerHTML += `
    <div class="col-12 col-md-4 justify-content-center d-flex">
        <div class="card m-4">
            <div class="card2 p-4 d-flex flex-column">
                <img class="card-shadow w-75 align-self-center rounded" src="${character.image}" alt="character-img">
                <div class="mt-3 ms-2">
                    <p><strong>Name: </strong>${character.name}</p>
                    <p><strong>Species: </strong>${character.species}</p>
                    <p><strong>Status: </strong>${character.status}</p>
                    <p><strong>Gender: </strong>${character.gender}</p>
                    <p><strong>Location: </strong>${character.location.name}</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

for(character of characterData){
    getCharacters(character);
}
