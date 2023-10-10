'use strict';

function hijackGoogleLogo() {
  const googleLogoElement = document.querySelector('#logo');
  googleLogoElement.style.backgroundImage =
    'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPKO5RB0j2SXZ1OIMC7oJr-EUpthqpHLzQ2e20ONy&s")';
}

hijackGoogleLogo();
