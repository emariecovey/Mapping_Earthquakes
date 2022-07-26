# Mapping_Earthquakes

## Purpose
The purpose of this project was to visually show the differences between the magnitudes of earthquakes all over the world. The map created in this project is capable of showing techtonic plates in the world, all earthquakes in the past 7 days, as well as major recent earthquakes. These three different data sets can be toggled on and off on the map, and different backgrounds (dark, satalite streets, and streets) can be selected. 

Data for this project came from a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. JavaScript and the D3.js library were used to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. The Leaflet library was also used to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.

The following is an image from the project. The circles on the map represent earthquakes, and darker colors/larger circles indicate larger magnitude earthquakes. 

![earthquake image](https://github.com/emariecovey/Mapping_Earthquakes/blob/main/mapScreenShot.png)