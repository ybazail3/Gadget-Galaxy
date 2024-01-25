// Inputting our team names using console.log().
console.log("Our Team: Hamzah, Selma, Yazmin, Jonathan, Luam");

//https://tinyurl.com/dynamic-html-checker
document
  .getElementById("html-checker")
  .setAttribute(
    "href",
    "https://validator.w3.org/nu/?doc=" + location.href
  );

document
  .getElementById("css-checker")
  .setAttribute(
    "href",
    "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href
  );

// This adds interactivity to our page with the year changing to current year
//set current year in span with id of this-year
let d = new Date();
let thisYear = d.getFullYear();
document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//reference to the button element
var myButton = document.getElementById("myButton");

//event listener for button
myButton.addEventListener("click", function() {
});