// Initialize the map

// const API_KEY = process.env.API_KEY;

// const link = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;

function initMap() {
    // Define the coordinates for the center of the map
    var center = { lat: 47.608013, lng: -122.335167 }; // San Francisco, CA
    // Create a new map instance
    var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 14, // Adjust the zoom level as needed
    });
    // Add a marker to the map
    var marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Hello, World!' // Optional, display a tooltip on the marker
    });

    
}