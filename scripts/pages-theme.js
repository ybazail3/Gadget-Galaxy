'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const themeStylesheetLight = document.querySelector('#theme-stylesheet-light');
  const themeStylesheetDark = document.querySelector('#theme-stylesheet-dark');
  const themeButton = document.querySelector('#theme');

  // Disable dark theme stylesheet by default
  themeStylesheetDark.disabled = true;

  themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    const isDarkTheme = document.body.classList.contains('dark');
    themeButton.innerHTML = isDarkTheme ? 'Light' : 'Dark';

    // Toggle between light and dark theme stylesheets
    if (isDarkTheme) {
      themeStylesheetLight.disabled = true; // Disable light theme stylesheet
      themeStylesheetDark.disabled = false; // Enable dark theme stylesheet
    } else {
      themeStylesheetLight.disabled = false; // Enable light theme stylesheet
      themeStylesheetDark.disabled = true; // Disable dark theme stylesheet
    }
  });
});
