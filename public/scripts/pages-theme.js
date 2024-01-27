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
