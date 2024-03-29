// Using the JS date object one for day
let myDate = new Date();
let day = myDate.getDay();

// Created empty variables that can be replaced in the switch statement
let myGreeting = "";
let myColor = "";
let myPic = "";
let today = day;
let itemType = "";
let stars = "";
let price = "";

// Set the target date and time (year, month (0-11), day, hour, minute, second)
const targetDate = new Date(2024, 2, 29, 0, 0, 0); // March 29, 2024

// to test the day
// day = 0;

// This is here so the code inside will run after the page is loaded properly
document.addEventListener('DOMContentLoaded', function () {
    
     // Update the countdown display every second
     setInterval(updateCountdown, 1000);

     function updateCountdown() {
         // Get the current date and time
         const currentDate = new Date();

         // Calculate the time remaining (in milliseconds)
         const timeRemaining = targetDate - currentDate;

         // Convert the time remaining to hours, minutes, and seconds
         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

          // Update the countdown display
        document.querySelector("#countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
     }


    // Used a switch case to change the picture, day, star rating, name of item and deal for each day of the week. There is a countdown timer that counts down 24 hours allowing the user to see when the deal is over
    switch (day) {
        case 0:
            day = "Sunday";
            today = "Sunday";
            myPic = "iphone.jpg";
            itemType = "Iphone";
            price = "Free Delivery<br>$900<br>Save $199 was: $1,099<br><i class='fa-solid fa-stopwatch'></i> Deal ends at midnight<div id='countdown'>countdown</div>";
            stars = "<div class='stars'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i></div>";
        break;
        case 1:
            day = "Monday";
            today = "Monday"; 
            myPic = "tablet.png";
            itemType = "Galaxy Tablet 3";
            price = "Free Delivery<br>$1,099<br>Save $100 was: $1,299<br><i class='fa-solid fa-stopwatch'></i> Deal ends at midnight<div id='countdown'>countdown</div>";
            stars = "<div class='stars'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i></div>";
        break;
        case 2:
            day = "Tuesday";
            today = "Tuesday";
            myPic = "apple watch.jpg";
            itemType = "Apple Watch";
            price = "Free Delivery<br>$100<br>Save $19 was: $129<br><i class='fa-solid fa-stopwatch'></i> Deal ends at midnight<div id='countdown'>countdown</div>";
            stars = "<div class='stars'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i></div>";
        break;
        case 3:
            day = "Wednesday";
            today = "Wednesday";   
            myPic = "earpods.jpg";
            itemType = "Beats Earbuds";
            price = "Free Delivery<br>$149.99<br>Save $25 was: $199.99<br><i class='fa-solid fa-stopwatch'></i> Deal ends at midnight<div id='countdown'>countdown</div>";
            stars = "<div class='stars'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i></div>";
        break;
        case 4:
            day = "Thursday";
            today = "Thursday";  
            myPic = "smarttv.jpg";
            itemType = "Smart TV";
            price = "Free Delivery<br>$1,250<br>Save $250 was: $1,500<br><i class='fa-solid fa-stopwatch'></i> Deal ends at midnight<div id='countdown'>countdown</div>";
            stars = "<div class='stars'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i></div>";
        break;
        case 5:
            day = "Friday";
            today = "Friday";    
            myPic = "laptop.jpg";
            itemType = "HP Laptop";
            price = "Free Delivery<br>$925<br>Save $75 was: $1,000<br><i class='fa-solid fa-stopwatch'></i> Deal ends at midnight<div id='countdown'>countdown</div>";
            stars = "<div class='stars'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>><i class='fa-solid fa-star'></i></div>";
        break;
        case 6:
            day = "Saturday";
            today = "Saturday";    
            myPic = "googlephone.jpg";
            itemType = "Google Phone";
            price = "Free Delivery<br>$799<br>Save $100 was: $899<br><i class='fa-solid fa-stopwatch'></i> Deal ends at midnight<div id='countdown'>countdown</div>";
            stars = "<div class='stars'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i></div>";
    }

    myPic = "../images/" + myPic;

    // Using the dom to get id selectors and change the src for the image or the html for different items
    document.querySelector("#my-pic").src = myPic;
    document.querySelector("#saleFlash").innerHTML = today;
    document.querySelector("#item-type").innerHTML = itemType;
    document.querySelector("#stars").innerHTML = stars;
    document.querySelector("#price").innerHTML = price;
    // document.querySelector("#countdown").innerHTML = countdown;

});
