'use strict';

function requestData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP error ocurred. Status: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      if (error.message.includes('HTTP error')) {
        throw error;
      } else {
        throw new Error(
          `Network error ocurred: ${error.name} - ${error.message}.`
        );
      }
    });
}

function renderImage(data) {
  console.log(data);
  const imgElement = document.createElement('img');
  imgElement.alt = data.alt;
  imgElement.src = data.img;
  document.body.appendChild(imgElement);
}

function renderError(error) {
  console.log(error);
  const h1Element = document.createElement('h1');
  h1Element.textContent = error.message;
  document.body.appendChild(h1Element);
}

async function main() {
  try {
    const data = await requestData('https://xkcd.now.sh/?comic=latest');
    renderImage(data);
  } catch (error) {
    renderError(error);
  }
}

window.addEventListener('load', main);
