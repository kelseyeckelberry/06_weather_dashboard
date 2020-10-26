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

    })
};
