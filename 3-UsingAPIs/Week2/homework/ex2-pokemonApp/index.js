'use strict';
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
function fetchData(url) {
  return fetch(url)
  .then((res)=> {
    if(!res.ok){
      throw new Error(`error ${res.status}`)
    }
    return res.json();
  })
  .catch(err => {
    console.log('error' + err);
    throw err;
  })
}

function fetchAndPopulatePokemons(url) {
  return fetchData(url)
    .then((data) => {
      const selectElement = document.createElement('select');
      document.body.appendChild(selectElement);
      data.results.forEach((pokemon) => {
        const option = document.createElement('option');
        option.value = pokemon.name;
        option.textContent = pokemon.name;
         option.setAttribute('data-url', pokemon.url);
        selectElement.appendChild(option);
      });
          return selectElement;

    })
    .catch(error=>
      console.error('Error fetching and populating Pokemons:', error)
    );

}

function fetchImage(url) {
  return fetchData(url)
  .then(data =>{
    const imgElement = document.createElement('img');
    imgElement.src = data.sprites['front_default'];
    document.body.appendChild(imgElement);
  })
  .catch(error =>{
    console.log('error fetching and displaying image' + error);
  })
}

async function main() {
  try{
    const selectElement = await fetchAndPopulatePokemons(apiUrl);
    selectElement.addEventListener('change', async () => {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const pokemonUrl = selectedOption.getAttribute('data-url');
    await fetchImage(pokemonUrl);
  })
}
  catch(error){
    console.error(error);
  }
}
window.addEventListener('load', main);
