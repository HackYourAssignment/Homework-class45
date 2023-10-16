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
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function fetchAndPopulatePokemons(data) {
  // Create a button element
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'button');
  document.body.appendChild(buttonElement);
  buttonElement.textContent = 'Find your favorite Pokemon!';

  // Create a select element
  const select = document.createElement('select');
  select.setAttribute('id', 'selection');
  document.body.appendChild(select);

  // Add event listener to the button for click event
  buttonElement.addEventListener('click', () => {
    // Iterate through the data.results array
    data.results.forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.setAttribute('value', option.url);
      select.appendChild(optionElement);
      optionElement.textContent = option.name;
    });
  });
}

async function fetchImage() {
  const selectElement = document.getElementById('selection');
  selectElement.addEventListener('change', async () => {
    const selectedUrl = selectElement.value;

    try {
      const response = await fetchData(selectedUrl);
      const selectedImage = response.sprites.front_default;

      // Remove any existing image
      const existingImage = document.querySelector('#displayedImage');
      if (existingImage) {
        existingImage.remove();
      }

      if (selectedImage) {
        const image = document.createElement('img');
        image.setAttribute('src', selectedImage);
        image.setAttribute('id', 'displayedImage'); // Set an ID for removal later
        document.body.appendChild(image);
      }
    } catch (error) {
      console.log(error);
    }
  });
}

function renderError(errorMessage) {
  const errorElement = document.createElement('h1');
  errorElement.textContent = errorMessage;
  document.body.appendChild(errorElement);
}

async function main() {
  try {
    const responseData = await fetchData(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    fetchAndPopulatePokemons(responseData);
    fetchImage();
  } catch (error) {
    console.error(error);
    renderError(error.message);
  }
}

window.addEventListener('load', main);
