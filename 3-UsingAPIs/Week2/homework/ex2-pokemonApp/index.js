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
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(
      `Oops... Error: ${response.status}. ${response.statusText}`
    );
  }
}

function fetchAndPopulatePokemons() {
  const buttonElement = document.createElement('button');
  buttonElement.type = 'button';
  buttonElement.textContent = 'Get Pokemon!';
  document.body.appendChild(buttonElement);

  const selectElement = document.createElement('select');
  selectElement.setAttribute('id', 'mySelect');
  document.body.appendChild(selectElement);

  async function fetchDataAndPopulate() {
    selectElement.style.width = 'auto';
    try {
      const response = await fetchData(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      const data = response.results;

      selectElement.textContent = '';

      data.forEach((pokemon) => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', pokemon.url);
        optionElement.textContent = pokemon.name;
        selectElement.appendChild(optionElement);
      });
    } catch (error) {
      console.log(error);
    }
  }

  buttonElement.addEventListener('click', fetchDataAndPopulate);
}

async function fetchImage(image) {
  const selectElement = document.getElementById('mySelect');

  selectElement.addEventListener('change', async () => {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedUrl = selectedOption.value;

    try {
      const response = await fetchData(selectedUrl);
      const selectedImage = response.sprites.front_default;
      image.setAttribute('src', selectedImage);
      document.body.appendChild(image);
    } catch (error) {
      console.log(error);
    }
  });
}

async function main() {
  try {
    fetchAndPopulatePokemons();
    const image = document.createElement('img');
    await fetchImage(image);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
