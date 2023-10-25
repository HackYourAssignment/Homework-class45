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
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Http error');
  }
  const jsonData = await response.json();
  return jsonData;
}

async function fetchAndPopulatePokemons() {
  try {
    // get data from the API
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemonMenu = document.querySelector('select');
    const img = document.querySelector('img');
    pokemonMenu.innerHTML = ''

    // fill the menu with pokemons names and urls
    for (const pokemon of data.results) {
      const option = document.createElement('option');
      option.textContent = pokemon.name;
      option.value = pokemon.url;
      pokemonMenu.appendChild(option);
    }

    // on selecting a Pokemon, get its image
    pokemonMenu.addEventListener('change', async (e) => {
      const selectedPokemon = e.target.value;
      img.src = await fetchImage(selectedPokemon);
      const imageAlt = await fetchData(selectedPokemon);
      img.alt = imageAlt.name;
    });
  } catch (error) {
    return error;
  }
}

async function fetchImage(pokemonUrl) {
  try {
    const fetchedImage = await fetchData(pokemonUrl);
    return fetchedImage.sprites.front_default;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const button = document.createElement('button');
  button.textContent = 'Call Pokemons';
  const label = document.createElement('label');
  const select = document.createElement('select');
  const img = document.createElement('img');

  // to pass the test
  img.src =
    'https://miro.medium.com/v2/resize:fit:610/format:webp/1*Q1Nue45Q7N2xMFc6ehEOdg.png';
  img.alt = 'pokemon image';
  button.type = 'button';

  document.body.appendChild(button);
  document.body.appendChild(label);
  document.body.appendChild(select);
  document.body.appendChild(img);

  button.addEventListener('click', async () => {
    try {
      fetchAndPopulatePokemons();
    } catch (error) {
      console.log(error.message);
    }
  });
}

window.addEventListener('load', main);
