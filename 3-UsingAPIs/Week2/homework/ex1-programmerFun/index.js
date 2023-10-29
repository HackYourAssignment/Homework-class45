'use strict';
const body = document.querySelector('body');
async function requestData(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
  }
}
function renderImage(data) {
  const img = document.createElement('img');
  img.src = data.img;
  img.setAttribute('alt', 'abc');
  body.appendChild(img);
}
function renderError(error) {
  const errorHeader = document.createElement('h1');
  errorHeader.textContent = error;
  body.appendChild(errorHeader);
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
