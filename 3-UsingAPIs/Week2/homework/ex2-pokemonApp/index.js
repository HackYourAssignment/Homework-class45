'use strict';
const body = document.querySelector('body');
const pokemonSelect = document.getElementById('pokemon');
const submitButton = document.getElementById('button');

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error();
    }
  } catch (error) {
    throw error;
  }
}

function fetchAndPopulatePokemons(data) {
  for (let i = 0; i < data.results.length; i++) {
    const optionElement = document.createElement('option');
    optionElement.setAttribute('value', data.results[i].url);
    optionElement.textContent = data.results[i].name;
    pokemonSelect.appendChild(optionElement);
  }
  submitButton.addEventListener('click', function () {
    const selectedValue = pokemonSelect.value;
    if (selectedValue) {
      fetchImage(selectedValue);
    }
  });
}

async function fetchImage(url) {
  try {
    const response = await fetchData(url);
    const imageUrl = response.sprites.front_default;
    const existingImage = document.querySelector('body img');
    if (existingImage) {
      existingImage.remove();
    }
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', imageUrl);
    body.appendChild(imgElement);
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

async function main() {
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
  fetchAndPopulatePokemons(data);
}

main();
