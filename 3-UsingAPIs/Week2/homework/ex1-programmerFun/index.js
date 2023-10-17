'use strict';

async function requestData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
}

function renderImage(data) {
  const imageElement = document.createElement('img');
  imageElement.src = data.img;
  imageElement.alt = data.title;

  document.body.appendChild(imageElement);
}

function renderError(error) {
  const errorElement = document.createElement('h1');
  errorElement.textContent = error;

  document.body.appendChild(errorElement);
  console.log(error);
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
