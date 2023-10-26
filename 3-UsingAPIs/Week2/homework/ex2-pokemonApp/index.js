'use strict';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function fetchAndPopulatePokemons(url, selectElement) {
  try {
    const data = await fetchData(url);
    const { results } = data;
    for (const pokemon of results) {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      option.id = 'pokemon-' + pokemon.name;
      selectElement.appendChild(option);
    }
  } catch (error) {
    console.error(error);
  }
}

async function fetchImage(url, imgElement) {
  try {
    const data = await fetchData(url);
    imgElement.src = data.sprites.front_default;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  document.addEventListener('DOMContentLoaded', async () => {
    const selectElement = document.querySelector('select');
    const imgElement = document.querySelector('img');
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    selectElement.addEventListener('change', async (event) => {
      const selectedPokemonUrl = event.target.value;
      fetchImage(selectedPokemonUrl, imgElement);
    });

    fetchAndPopulatePokemons(apiUrl, selectElement);
  });
}

main();
