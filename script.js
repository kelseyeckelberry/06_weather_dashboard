var date = moment().add(10, 'days').calendar();
console.log(date);

$(document).ready(function() {
var storeSearchedCity = "";
})

$(".btn").on("click", function() {
    var value = $(".form-control").val();
    displayWeatherInfo(value);
    //console.log(value);
})

function displayWeatherInfo(searchedCity) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&units=imperial&appid=077cc081d0edde56ae0ece8d0be5b7df"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var tBody = $("tbody");
        var cityName = $("thead");


        var city = response.name + " (" + date + ") ";
        var temp = $("<tr>").text("Temperature: " + response.main.temp + "°F");
        var humid = $("<tr>").text("Humidity: " + response.main.humidity + "%");
        var wind = $("<tr>").text("Wind Speed: " + response.wind.speed + " MPH");
        //console.log(temp, humid, wind);

        tBody.append(temp, humid, wind);
        cityName.append(city);
    })
};
