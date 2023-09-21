'use strict';

function hijackGoogleLogo() {
  const logo = document.querySelector('.k1zIA.rSk4se img');

  logo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  logo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
}

hijackGoogleLogo();
