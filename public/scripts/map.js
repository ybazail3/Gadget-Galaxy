// Initialize the map

token = str(os.getenv('TOKEN'))

const API_KEY = process.env.API_KEY;

const link = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;

let map;

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available
  // Create the script tag, set the appropriate attributes
  var script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDVN8xMx7wxXhW3mwyhUDCoomzWFiI_ySM&v=weekly";
  script.async = true; // Maintain async loading

  // Function to handle the library being loaded
  function handleLibraryLoad() {
    const { Map } = google.maps.importLibrary("maps");
    // Define the coordinates for the center of the map
    var center = { lat: 47.608013, lng: -122.335167 }; // San Francisco, CA
    // Create a new map instance
    map = new Map(document.getElementById("map"), {
      center: center,
      zoom: 14, // Adjust the zoom level as needed
    });
    // Add a marker to the map
    var marker = new google.maps.Marker({
      position: center,
      map: map,
      // title: 'Hello, World!' // Optional, display a tooltip on the marker
    });
  }

  // Attach the callback function to the script's `onload` event
  script.onload = handleLibraryLoad;

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
};

// function initMap() {
//     const { Map } = await google.maps.importLibrary("maps");
//     // Define the coordinates for the center of the map
//     var center = { lat: 47.608013, lng: -122.335167 }; // San Francisco, CA
//     // Create a new map instance
//     var map = new Map(document.getElementById('map'), {
//     center: center,
//     zoom: 14, // Adjust the zoom level as needed
//     });
//     // Add a marker to the map
//     var marker = new google.maps.Marker({
//     position: center,
//     map: map,
//     // title: 'Hello, World!' // Optional, display a tooltip on the marker
//     });
// }

// initMap();
