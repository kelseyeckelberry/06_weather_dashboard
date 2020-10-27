var date = moment().add(10, 'days').calendar();

$(document).ready(function() {
var storeSearchedCity = "";
})

$(".btn").on("click", function() {
    var value = $(".form-control").val();
    displayWeatherInfo(value);
})

function displayWeatherInfo(searchedCity) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&units=imperial&appid=077cc081d0edde56ae0ece8d0be5b7df"

    $('tbody').empty();
    $('thead').empty();
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        storeSearchedCity = localStorage.setItem("Past Search", searchedCity);
        
        var tBody = $("tbody");
        var cityName = $("thead");
        var icon = $("thead");


        var city = response.name + " (" + date + ") ";
        var temp = $("<tr>").text("Temperature: " + response.main.temp + "°F");
        var humid = $("<tr>").text("Humidity: " + response.main.humidity + "%");
        var wind = $("<tr>").text("Wind Speed: " + response.wind.speed + " MPH");
        
        if (response.weather[0].main === "Clouds") {
            var cloud = $("<thead class='fas fa-cloud'>");
            icon.append(cloud);
        } else if (response.weather[0].main === "Clear") {
            var clear = $("<thead class='fas fa-sun'>");
            icon.append(clear);
        } else if (response.weather[0].main === "Rain") {
            var rain = $("<thead class='fas fa-cloud-showers-heavy'>");
            icon.append(rain);
        } else if (response.weather[0].main === "Snow") {
            var snow = $("<thead class='far fa-snowflake'>");
            icon.append(snow);
        }

        tBody.append(temp, humid, wind);
        cityName.append(city);
       
    })
    $("#data-view").prepend(cityName, tBody);
};

function renderPastSearch() {
    pastSearch = localStorage.getItem("Past Search");
    displayWeatherInfo(searchedCity);
}