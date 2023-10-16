'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-5-using-the-vscode-debugger

Use the VSCode Debugger to fix the bugs
--------------------------------------------------------------- --------------*/
const fetch = require('node-fetch');

async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function renderLaureate({ knownName, birth, death }) {
  try {
    console.log(`\nName: ${knownName.en}`);
    console.log(`Birth: ${birth.date}, ${birth.place.locationString.en}`);
    if (death) {
      console.log(`Death: ${death.date}, ${death.place.locationString.en}`);
    }
  } catch (error) {
    throw error.message;
  }
}

async function renderLaureates(laureates) {
  try {
    await laureates.laureates.forEach(renderLaureate);
  } catch (error) {
    throw new Error('Error in render');
  }
}

async function fetchAndRender() {
  try {
    const laureates = await getData(
      'http://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    await renderLaureates(laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

fetchAndRender();
