


// City Name appears once the search has been submitted

var currentLat;
var currentLon;

// Push to local storage, retrieve from local storage to prior search fields


// Functionality for text entered into search field
// happens when page is refreshed


// Functionality for search button


// Data prints to data card with city name above

var cityName = $("#city-name");
console.log(cityName);

// Forecasts for upcoming days appear in forecast windows

var dayOne;
var dayTwo;
var dayThree;
var dayFour;
var dayFive;


// FUNCTION TO SET AND GET TEXT

// $("#search-button").on('click', function () {
    
//     var citySearch = $("#search-window");
//     console.log(citySearch);
//     localStorage.setItem("city search", citySearch);

// })

// $("#search-window").val(localStorage.getItem("city search"));

function citySearchText (searchText) {

    var textField = $(searchText);
    return textField.val();

}

citySearchText ();
console.log(citySearchText);



var APIkey = "61a614007c0953840cad0a62bc2a2041";

var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly&appid=" + APIkey;

// var queryURL = "https://api.openweathermap.org/data/2.5/onecall?
// + "lat=" + currentLat + "&lon=" + currentLon + "&exclude=minutely,hourly" + "&appid=" + APIkey;

// GOOGLE MAPS

// application key: 

// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&latlng=40.714224%252C-73.96145",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
// 		"x-rapidapi-key": "a7bbd14756mshc19fbfa5df97acep1021fejsn94a760da9a7f"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// var searchLat;
// var searchLon;


// AJAX 

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response) {
    
    console.log(queryURL);
    console.log(response);
    
    var tempF = $("#temp");
    tempF = (response.current.temp - 273.15) * 1.8 + 32;
    $("#temp").text(" " + tempF.toFixed(2));
    $("#humid").text(" " + response.current.humidity);
    $("#wind").text(" " + response.current.wind_speed);
    $("#uv").text(" " + response.current.uvi);
    $("#day-1-temp").text(" " + response.daily[0].temp);
    $("#day-1-humid").text(" " + response.daily[0].humidity);
    $("#day-2-temp").text(" " + response.daily[1].temp);
    $("#day-2-humid").text(" " + response.daily[1].humidity);
    $("#day-3-temp").text(" " + response.daily[2].temp);
    $("#day-3-humid").text(" " + response.daily[2].humidity);
    $("#day-4-temp").text(" " + response.daily[3].temp);
    $("#day-4-humid").text(" " + response.daily[3].humidity);
    $("#day-5-temp").text(" " + response.daily[4].temp);
    $("#day-5-humid").text(" " + response.daily[4].humidity);


    // pull data

    // set to local storage

    // populate everything in list, get from local storage
    
    // separate api call for uv index

    // separate api call for 5-day
    
})


// Display date and time on navbar with moment.js

var currentDay = moment();
var momentDisplay = document.querySelector("#nav-time");
momentDisplay.innerHTML = currentDay.format('LLLL');