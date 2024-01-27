// Inputting our team names using console.log().
console.log("Our Team: Hamzah, Selma, Yazmin, Jonathan, Luam");

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