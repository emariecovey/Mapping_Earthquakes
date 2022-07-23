console.log("something is happening");

//create map object with center of US at center and zoom level (4 on a scale from 0-18)
let map = L.map('mapid').setView([40.7, -94.5], 4);

//add tile layer for map (background of map)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Marker for SLC just for fun
let marker2 = L.marker([40.7608, -111.8910]).addTo(map);

// Add circle to map for LA, CA (same as marker but with radius)
// radius is measured in meters (so 100 is 100 meter radius)
let marker = L.circle([34.0522, -118.2437], {
    radius:300,
    color: 'yellow',
    
}).addTo(map);

// Add circle to NYC. Filled with light yellow, black around radius, large. good with dark-v10 style
let marker3 = L.circleMarker([40.7128, -74.0060], {
    radius:300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);


