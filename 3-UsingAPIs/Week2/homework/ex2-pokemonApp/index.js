'use strict';
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status}:${response.statusText}`);
  }
  return response.json();
}

function fetchAndPopulatePokemons(data) {
  data.results.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.name;
    option.textContent = element.name;
    document.querySelector('select').appendChild(option);
  });

  const imgElement = document.createElement('img');

  document.body.appendChild(imgElement);
}

async function fetchImage(data) {
  const imgElement = document.querySelector('img');

  const selectElement = document.querySelector('select');

  const selectedElementValue = selectElement.value;

  const selectedPokemon = data.results.find(
    (element) => element.name === selectedElementValue
  );

  const selectedPokemonResponse = await fetchData(selectedPokemon.url);
  imgElement.src = selectedPokemonResponse.sprites.front_default;
  imgElement.alt = selectedElementValue;
}

function initializePage() {
  const button = document.createElement('button');
  button.textContent = 'GET POKEMON!';
  document.body.appendChild(button);

  const selectElement = document.createElement('select');
  document.body.appendChild(selectElement);
}

function main() {
  initializePage();

  const button = document.querySelector('button');
  button.type = 'button';

  button.addEventListener('click', async () => {
    try {
      const data = await fetchData(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      fetchAndPopulatePokemons(data);

      await fetchImage(data);

      document.querySelector('select').addEventListener('change', async () => {
        await fetchImage(data);
      });
    } catch (error) {
      console.log(error);
    }
  });
}

window.addEventListener('load', main);
