'use strict';
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error: ' + error);
    throw error;
  }
}

async function fetchAndPopulatePokemons(url) {
  try {
    const data = await fetchData(url);

    const selectElement = document.createElement('select');
    document.body.appendChild(selectElement);

    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.name;
      option.textContent = pokemon.name;
      option.setAttribute('data-url', pokemon.url);
      selectElement.appendChild(option);
    });

    return selectElement;
  } catch (error) {
    console.error('Error fetching and populating Pokemons:', error);
  }
}

async function fetchImage(url, imgElement) {
  try {
    const data = await fetchData(url);

    if (!imgElement) {
      imgElement = document.createElement('img');
      document.body.appendChild(imgElement);
    }

    imgElement.src = data.sprites['front_default'];
  } catch (error) {
    console.log('Error fetching and displaying image: ' + error);
  }
}

async function main() {
  try {
    const selectElement = await fetchAndPopulatePokemons(apiUrl);
    let imgElement;

    selectElement.addEventListener('change', async () => {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      const pokemonUrl = selectedOption.getAttribute('data-url');
      await fetchImage(pokemonUrl, imgElement);
    });
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('load', main);
