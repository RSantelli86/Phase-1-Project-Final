document.addEventListener('DOMContentLoaded', () => {
    fetchCharacters();

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', filterCharacters);
});

let characters = [];

function fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => {
            characters = data.results;
            displayCharacters(characters);
        });
}

function displayCharacters(characterList) {
    const characterContainer = document.getElementById('character-list');
    characterContainer.innerHTML = '';
    characterList.forEach((character) => {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character';
        characterDiv.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
        `;
        characterDiv.addEventListener('click', () => displayCharacterDetails(character));
        characterContainer.appendChild(characterDiv);
    });
}

function displayCharacterDetails(character) {
    const detailsContainer = document.getElementById('character-details');
    detailsContainer.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}">
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <p>Origin: ${character.origin.name}</p>
    `;
}

function filterCharacters(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCharacters = characters.filter((character) =>
        character.status.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filteredCharacters);
}