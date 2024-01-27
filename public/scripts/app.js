'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const themeStylesheet = document.querySelector('#theme-stylesheet');
  const themeButton = document.querySelector('#theme');
  const logoImage = document.querySelector('#logo-img');

  themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    const isDarkTheme = document.body.classList.contains('dark');
    themeButton.innerHTML = isDarkTheme ? 'Light' : 'Dark';

    if (isDarkTheme) {
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