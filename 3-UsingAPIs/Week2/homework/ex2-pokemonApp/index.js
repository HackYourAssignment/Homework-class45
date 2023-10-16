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
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function fetchAndPopulatePokemons(selectElement) {
  const { results: pokemons } =
    (await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151')) || {};

  try {
    pokemons?.forEach((pokemon, index) => {
      const option = document.createElement('option');
      option.value = index + 1;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error(error);
  }
}

async function fetchImage(pokemonId, imgElement) {
  try {
    const data = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const imageUrl = data?.sprites?.front_default;
    imgElement.src = imageUrl;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  function createElementAndAppend(type, attributes, parent) {
    const element = document.createElement(type);
    for (const [key, value] of Object.entries(attributes)) {
      element[key] = value;
    }
    parent.appendChild(element);
    return element;
  }

  const button = createElementAndAppend(
    'button',
    { textContent: 'Get Pokemon!', type: 'button' },
    document.body
  );

  const selectElement = createElementAndAppend(
    'select',
    { id: 'pokemon-select' },
    document.body
  );
  const imgElement = createElementAndAppend(
    'img',
    {
      id: 'pokemon-image',
      src: 'image.jpg',
      alt: 'Pokemon image',
    },
    document.body
  );

  button.addEventListener('click', async () => {
    await fetchAndPopulatePokemons(selectElement);
  });

  selectElement.addEventListener('change', (event) => {
    fetchImage(event.target.value, imgElement);
  });
}

main();
