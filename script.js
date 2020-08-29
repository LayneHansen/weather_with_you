// Data prints to data card with city name above

var APIkey = "61a614007c0953840cad0a62bc2a2041";


var cityName = $("#city-name");
var citySearch;
var searchLat;
var searchLon;
var searchList;
var searchListItem;



// GLOBAL FUNCTION

// $(document).ready(function () {

$("#search-button").on('click', function () {
    event.preventDefault();

    citySearch = $("#search-window").val();
    cityName.text(citySearch);


if (citySearch !== "") {
    searchCities(citySearch);

} 

})

var tempItem = localStorage.getItem("city search");
console.log(tempItem);
$("#search-1").text(tempItem);

$("#search-1").on("click", function (event) {
    var value = $("#search-1").text();
    searchCities(value);

})



if (tempItem) {
    searchCities(tempItem);

} 

function searchCities(citySearch) {
    localStorage.setItem("city search", citySearch);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIkey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var cityName = $("#city-name");
        cityName = $("#search-window").val();
        searchLat = response.coord.lat;
        searchLon = response.coord.lon;

        weatherData();

    })

}



// FUNCTION FOR ONE CALL API


function weatherData() {

    var queryTWO = "https://api.openweathermap.org/data/2.5/onecall?&units=imperial&lat=" + searchLat + "&lon=" + searchLon + "&exclude=minutely,hourly&appid=" + APIkey;

    $.ajax({
        url: queryTWO,
        method: "GET"
    })


        .then(function (response) {

            console.log(queryTWO);
            console.log(response);
            // var uvi = $("#uv").val(response.current.uvi);
            // console.log(uvi);

            // if uvi =< 3 {

            // }

            $("#temp").text(" " + response.current.temp);
            $("#humid").text(" " + response.current.humidity);
            $("#wind").text(" " + response.current.wind_speed);
            $("#uv").text(" " + response.current.uvi);
            $("#icon").attr("src", "http://openweathermap.org/img/wn/" + response.current.weather[0].icon + "@2x.png");
            //$("#date-1").text(moment().add(1, "days");
            $("#day-1-temp").text(" " + response.daily[1].temp.max);
            $("#day-1-humid").text(" " + response.daily[1].humidity);
            $("#icon-1").attr("src", "http://openweathermap.org/img/wn/" + response.daily[1].weather[0].icon + "@2x.png");
            $("#day-2-temp").text(" " + response.daily[2].temp.max);
            $("#day-2-humid").text(" " + response.daily[2].humidity);
            $("#icon-2").attr("src", "http://openweathermap.org/img/wn/" + response.daily[2].weather[0].icon + "@2x.png");
            $("#day-3-temp").text(" " + response.daily[3].temp.max);
            $("#day-3-humid").text(" " + response.daily[3].humidity);
            $("#icon-3").attr("src", "http://openweathermap.org/img/wn/" + response.daily[3].weather[0].icon + "@2x.png");
            $("#day-4-temp").text(" " + response.daily[4].temp.max);
            $("#day-4-humid").text(" " + response.daily[4].humidity);
            $("#icon-4").attr("src", "http://openweathermap.org/img/wn/" + response.daily[4].weather[0].icon + "@2x.png");
            $("#day-5-temp").text(" " + response.daily[5].temp.max);
            $("#day-5-humid").text(" " + response.daily[5].humidity);
            $("#icon-5").attr("src", "http://openweathermap.org/img/wn/" + response.daily[5].weather[0].icon + "@2x.png");

        })

}




// Display date and time on navbar with moment.js

var currentDay = moment();
var momentDisplay = document.querySelector("#nav-time");
momentDisplay.innerHTML = currentDay.format('LLLL');
