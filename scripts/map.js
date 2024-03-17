// Initialize the map
function initMap() {
    // Define the coordinates for the center of the map
    var center = { lat: 47.6163 , lng: -122.3210 }; // Seattle Central College
    // Create a new map instance
    var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 12, // Adjust the zoom level as needed
    });
    // Add a marker to the map
    var marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Hello, World!' // Optional, display a tooltip on the marker
    });
    }