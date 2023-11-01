'use strict';

async function requestData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: HTTP status ${response.status}`);
  }

  const data = await response.json();

  return data;
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
