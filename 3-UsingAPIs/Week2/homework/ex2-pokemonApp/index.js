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
const pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const body = document.body;

async function fetchData(url) {
  const resp = await fetch(url);
  if (resp.ok) {
    return await resp.json();
  }
  throw new Error(
    `Something went wrong while fetching data! status code : ${resp.status} - status text : ${resp.statusText}`
  );
}

async function fetchAndPopulatePokemons(selectBtn) {
  const pokemons = await fetchPokemons();

  for (let i = 0; i < pokemons.results.length; i++) {
    const option = document.createElement('option');
    option.text = pokemons.results[i].name;
    selectBtn.add(option);
  }

  const selectDiv = document.createElement('div');
  selectDiv.classList.add('select-div');

  selectDiv.appendChild(selectBtn);
  body.appendChild(selectDiv);
}

async function fetchImage(selectBtn, pokemons) {
  const pokemon = document.getElementById('pokemon');
  if (pokemon) {
    pokemon.parentNode.removeChild(pokemon);
  }

  const selectedValue = selectBtn.options[selectBtn.selectedIndex].value;
  const selectedPokemonUrl = pokemons.results.find(
    (pokemon) => pokemon.name === selectedValue
  ).url;

  const pokemonData = await fetchData(selectedPokemonUrl);

  const avatar = document.createElement('img');
  avatar.src =
    pokemonData.sprites.front_shiny ?? pokemonData.sprites.front_default;
  avatar.alt = pokemonData.name;

  const div = document.createElement('div');
  div.id = 'pokemon';
  div.appendChild(avatar);

  const avatarContainer = document.createElement('div');
  avatarContainer.appendChild(div);
  body.appendChild(avatarContainer);
}

async function main() {
  const pokemons = await fetchPokemons();

  const div = document.createElement('div');
  div.classList.add('get-btn');
  const btn = document.createElement('button');
  btn.textContent = 'Get Pokemon';
  btn.type = '';
  div.appendChild(btn);
  body.appendChild(div);

  const selectBtn = document.createElement('select');

  selectBtn.addEventListener('change', () => {
    fetchImage(selectBtn, pokemons);
  });

  btn.addEventListener('click', async () => {
    await fetchAndPopulatePokemons(selectBtn);
  });
}

window.addEventListener('load', main);

let pokemonsData;
async function fetchPokemons() {
  if (pokemonsData) {
    return pokemonsData;
  }
  try {
    pokemonsData = await fetchData(pokemonsUrl);
    return pokemonsData;
  } catch (error) {
    console.log(error.message);
  }
}
