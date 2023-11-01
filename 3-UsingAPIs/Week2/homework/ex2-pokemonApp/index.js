'use strict';

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: HTTP status ${response.status}`);
  }
  const fetchedData = await response.json();
  return fetchedData;
}

async function fetchAndPopulatePokemons(url) {
  const selectElement = document.getElementById('pokemonOptions');

  const data = await fetchData(url);
  const pokemons = data.results;

  pokemons.forEach((pokemon) => {
    const optionElement = document.createElement('option');
    optionElement.textContent = pokemon.name;
    selectElement.appendChild(optionElement);
  });

  selectElement.addEventListener('change', fetchImage);
}

async function fetchImage() {
  const selectedPokemonName = document.getElementById('pokemonOptions').value;

  const pokemonImg = document.getElementById('pokemonImage');

  const detailsUrl = `https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}/`;

  const data = await fetchData(detailsUrl);

  const imageUrl = data.sprites.front_default;

  pokemonImg.src = imageUrl;
  pokemonImg.alt = selectedPokemonName;
}

async function main() {
  const publicAPI = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  // Create pokemons list
  const divElement = document.createElement('div');
  divElement.id = 'pokemonsList';
  document.body.appendChild(divElement);

  // Append select element for pokemon options
  const selectElement = document.createElement('select');
  selectElement.id = 'pokemonOptions';
  divElement.appendChild(selectElement);

  // Create image element to display the selected pokemon image
  const imgElement = document.createElement('img');
  imgElement.id = 'pokemonImage';
  imgElement.src = '';
  imgElement.alt = '';
  document.body.appendChild(imgElement);

  // Fetch required data
  try {
    await fetchAndPopulatePokemons(publicAPI);
    await fetchImage();
  } catch (error) {
    console.log(error);
  }
}

window.onload = main;
