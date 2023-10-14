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
function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Oops...HTTP or network ');
      }
    })
    .then((jsonData) => {
      return jsonData;
    });
}

function fetchAndPopulatePokemons(data) {
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'button');
  document.body.appendChild(buttonElement);
  buttonElement.textContent = 'Get Pokemon!';

  const selectElement = document.createElement('select');
  selectElement.setAttribute('id', 'mySelect');
  document.body.appendChild(selectElement);

  buttonElement.addEventListener('click', () => {
    selectElement.style.width = 'auto';
    data.results.forEach((pokemon) => {
      const optionElement = document.createElement('option');
      optionElement.setAttribute('value', pokemon.url);
      selectElement.appendChild(optionElement);
      optionElement.textContent = pokemon.name;
    });
  });
}

async function fetchImage() {
  const selectElement = document.getElementById('mySelect');
  let displayedImage = null;

  selectElement.addEventListener('change', async () => {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedUrl = selectedOption.value;

    try {
      const response = await fetchData(selectedUrl);
      const selectedImage = response.sprites.front_default;

      if (selectedImage) {
        if (displayedImage) {
          displayedImage.remove();
        }
        const image = document.createElement('img');
        image.setAttribute('src', selectedImage);
        document.body.appendChild(image);

        displayedImage = image;
      }
    } catch (error) {
      console.log(error);
    }
  });
}

async function main() {
  try {
    const response = await fetchData(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    const populatePokemon = fetchAndPopulatePokemons(response);
    fetchImage(populatePokemon);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
