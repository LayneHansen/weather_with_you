


// City Name appears once the search has been submitted
// Push to local storage, retrieve from local storage to search fields


// Functionality for text entered into search field



// Functionality for search button

// Data prints to data card with city name above
// Forecasts for upcoming days appear in forecast windows

var cityName = $("#city-name");
console.log(cityName);

// ajax request with URL https://openweathermap.org/api

// var APIkey = "166a433c57516f51dfab1f7edaed8413";

var APIkey = "61a614007c0953840cad0a62bc2a2041";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?" + "q=Philadelphia,Philadelphia&appid=" + APIkey;

// AJAX 

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response) {
    
    console.log(queryURL);
    console.log(response);

    $("#temp").text(response.main.temp);
    $("#humid").text(response.main.humidity);

    
    
})


// Display date and time on navbar with moment.js

var currentDay = moment();
var momentDisplay = document.querySelector("#nav-time");
momentDisplay.innerHTML = currentDay.format('LLLL');