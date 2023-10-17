'use strict';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `HTTP error ocurred. Status: ${response.status} ${response.statusText}`
      );
    }
    const fetchedData = await response.json();
    return fetchedData;
  } catch (error) {
    if (error.message.includes('HTTP error')) {
      console.log(error);
      throw error;
    } else {
      console.log(error);
      throw new Error(
        `Network error ocurred: ${error.name} - ${error.message}.`
      );
    }
  }
}

async function fetchAndPopulatePokemons(url) {
  try {
    const divElement = document.createElement('div');
    divElement.id = 'pokemonsList';
    document.body.appendChild(divElement);

    const selectElement = document.createElement('select');
    selectElement.id = 'pokemonOptions';
    divElement.appendChild(selectElement);

    const data = await fetchData(url);
    const pokemons = data.results;

    pokemons.forEach((pokemon) => {
      const optionElement = document.createElement('option');
      optionElement.textContent = pokemon.name;
      selectElement.appendChild(optionElement);
    });

    selectElement.addEventListener('change', fetchImage);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function fetchImage() {
  try {
    const selectedPokemonName = document.getElementById('pokemonOptions').value;

    const detailsUrl = `https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}/`;

    const data = await fetchData(detailsUrl);

    const imageUrl = data.sprites.front_default;

    const existingImage = document.getElementById('pokemonImage');
    if (existingImage) {
      existingImage.remove();
    }

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = selectedPokemonName;
    imgElement.id = 'pokemonImage';

    document.body.appendChild(imgElement);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function main() {
  const publicAPI = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  await fetchData(publicAPI);
  await fetchAndPopulatePokemons(publicAPI);
  await fetchImage();
}

window.onload = main;
