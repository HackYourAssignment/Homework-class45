'use strict';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}

async function fetchAndPopulatePokemons(url, selectElement) {
  const data = await fetchData(url);
  if (data) {
    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });
  }
}

async function fetchImage(url, imgElement) {
  const data = await fetchData(url);
  if (data) {
    imgElement.src = data.sprites.front_default;
    imgElement.alt = data.name;
  }
}

async function main() {
  const selectElement = document.getElementById('pokemonSelector');
  const imgElement = document.getElementById('pokemonImage');

  await fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon/', selectElement);

  selectElement.addEventListener('change', async () => {
    const selectedPokemonUrl = selectElement.value;
    if (selectedPokemonUrl) {
      await fetchImage(selectedPokemonUrl, imgElement);
    }
  });
}

window.addEventListener('load', main);
