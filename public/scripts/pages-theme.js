'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const themeStylesheet = document.querySelector('#theme-stylesheet');
  const themeButton = document.querySelector('#theme');
  const logoImage = document.querySelector('#logo-img');

  // Added event listener to toggle in between light and dark
  themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    const dTheme = document.body.classList.contains('dark');
    themeButton.innerHTML = dTheme ? 'Light' : 'Dark';

     // if statement is the theme contains dark then use dark css else use main css which is light mode
    if (dTheme) {
      themeStylesheet.href = '../css/dark.css';
      document.querySelector('#nav-stylesheet').href = '../css/dark-nav.css';
      logoImage.src = '../images/logo-dark.png'; // Change the image source
    } else {
      themeStylesheet.href = '../css/main.css';
      document.querySelector('#nav-stylesheet').href = '../css/nav.css';
      logoImage.src = '../images/logo.png'; // Change the image source back to the original
    }
  });
});
