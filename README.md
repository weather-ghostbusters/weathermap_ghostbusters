# weathermap_ghostbusters


Weather Map Project:


1. Create a new html file called weather_map.html.

2. Using HTML, CSS, jQuery, Ajax, and the Dark Sky API, start by showing the current conditions for San Antonio on your page.

3. Update your layout and Ajax request(s) to display a three-day forecast for San Antonio that looks like the screenshot below, minus icons.
    


Include icons-

1. Download the weather icons of your choosing locally and store in a folder in your project called icon. Climacons would be a great choice.

2. Create an array of JS objects containing a property for each of the following conditions: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night.

3. Add a property to the array of icon objects for the url to the location that the appropriate icon is stored locally.

4. Use jQuery to add any icons needed to the document.

5. Create input boxes for "Latitude" and "Longitude" and a <button> that will take the values from those inputs and feed them into your API request.

6. Go back to your Mapbox Maps API exercise. Recreate the map below your three-day forecast. Draw the map with a draggable marker starting on San Antonio. Once the user stops dragging the pin, grab its coordinates and feed those into your Dark Sky API. Update the three day forecast with the information from those coordinates (you should also get rid of your input boxes at this point).

7. Add a Mapbox text input to search by location and have the forecast update when a new location is searched.

