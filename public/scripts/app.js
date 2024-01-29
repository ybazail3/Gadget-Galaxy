'use strict';

// This file is for the dark styles

// Added an event listener and set variables for id attributes
document.addEventListener('DOMContentLoaded', function () {
  const themeStylesheet = document.querySelector('#theme-stylesheet');
  const themeButton = document.querySelector('#theme');
  const logoImage = document.querySelector('#logo-img');

  // Event listener to toggle in between dark and light
  themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    // Chaning the button text based on the setting dark or light
    const dTheme = document.body.classList.contains('dark');
    themeButton.innerHTML = dTheme ? 'Light' : 'Dark';

    // if statement is the theme contains dark then use dark css else use main css which is light mode
    if (dTheme) {
      themeStylesheet.href = 'public/css/dark.css';
      document.querySelector('#nav-stylesheet').href = 'public/css/dark-nav.css';
      logoImage.src = 'public/images/logo-dark.png'; // Change the image source
    } else {
      themeStylesheet.href = 'public/css/main.css';
      document.querySelector('#nav-stylesheet').href = 'public/css/nav.css';
      logoImage.src = 'public/images/logo.png'; // Change the image source back to the original
    }
  });
});