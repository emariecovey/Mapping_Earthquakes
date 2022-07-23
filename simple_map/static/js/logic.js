console.log("something is happening");

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};


//create map object with center of US at center and zoom level (4 on a scale from 0-18)
let map = L.map('mapid').setView([37.5, -122.5], 10);

L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h3> Airport Name: " + feature.properties.name + "</h3>");
    }
}).addTo(map);

//add tile layer for map (background of map) (dark-v10 is dark, regular is streets-v11)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
=======
let map = L.map('mapid').setView([40.7, -94.5], 4);
//center of us coordinates: 40.7, -94.5

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];

L.polyline(line, {
    color: "blue",
    dashArray: "5, 10",
    opacity: .5
}).addTo(map);



//add tile layer for map (background of map) (dark-v10 is dark, regular is streets-v11, light grey is light-v10)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {

// Marker for SLC just for fun
//let marker2 = L.marker([40.7608, -111.8910]).addTo(map);
  
//get cities data
let cityData = cities;

cityData.forEach(city => {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: "orange",
        lineweight: 4
    })
    //the hr inserts a horizontal row. The .toLocalString formats population to have commas every 3 digits
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});