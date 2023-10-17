'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const body = document.querySelector('body');
const selectBtn = document.createElement('select');

async function fetchData(url) {
  const resp = await fetch(url);
  if (resp.ok) {
    const data = await resp.json();
    return data;
  }
  throw new Error('something wrong!');
}

async function fetchAndPopulatePokemons() {
  const data = await fetchData(url);
  const selectDiv = document.createElement('div');
  selectDiv.classList.add('select-div');
  selectDiv.appendChild(selectBtn);

  for (let i = 0; i < data.results.length; i++) {
    const option = document.createElement('option');
    option.text = data.results[i].name;
    selectBtn.add(option);
  }
  body.appendChild(selectDiv);

  selectBtn.addEventListener('change', fetchImage);
}

async function fetchImage() {
  const pokemon = document.getElementById('pokemon');

  if (pokemon) {
    pokemon.parentNode.removeChild(pokemon);
  }

  const data = await fetchData(url);
  const selectedValue = selectBtn.options[selectBtn.selectedIndex].value;
  const avatarContainer = document.createElement('div');
  const div = document.createElement('div');
  div.id = 'pokemon';
  const avatar = document.createElement('img');

  const selectedPokemonUrl = data.results.find(
    (pokemon) => pokemon.name === selectedValue
  ).url;

  const pokemonData = await fetchData(selectedPokemonUrl);

  avatar.src =
    pokemonData.sprites.front_shiny ?? pokemonData.sprites.front_default;
  avatar.alt = pokemonData.name;

  div.appendChild(avatar);
  avatarContainer.appendChild(div);
  body.appendChild(avatarContainer);
}

function main() {
  const div = document.createElement('div');
  div.classList.add('get-btn');
  const btn = document.createElement('button');
  btn.textContent = 'Get Pokemon';
  btn.type = '';
  div.appendChild(btn);
  body.appendChild(div);

  try {
    btn.addEventListener('click', fetchAndPopulatePokemons);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
