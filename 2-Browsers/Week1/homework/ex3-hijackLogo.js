'use strict';

function hijackGoogleLogo() {
  document.querySelector('body');
  const googleLogo = document.getElementsById('hplogo');
  googleLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  googleLogo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg 1x';
}

hijackGoogleLogo();
