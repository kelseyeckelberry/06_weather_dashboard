var date = moment().add(0, 'days').format('MM/DD/YYYY');
var card1Date = moment().add(1, 'days').format('MM/DD/YYYY');
var card2Date = moment().add(2, 'days').format('MM/DD/YYYY');
var card3Date = moment().add(3, 'days').format('MM/DD/YYYY');
var card4Date = moment().add(4, 'days').format('MM/DD/YYYY');
var card5Date = moment().add(5, 'days').format('MM/DD/YYYY');

// $(document).ready(function() {
// var storeSearchedCity = [];
// });

$(".btn").on("click", function() {
    var value = $(".form-control").val();
    displayWeatherInfo(value);
    day1Forecast(value);
    day2Forecast(value);
    day3Forecast(value);
    day4Forecast(value);
    day5Forecast(value);
});

function displayWeatherInfo(searchedCity) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&units=imperial&appid=077cc081d0edde56ae0ece8d0be5b7df"

    $('tbody').empty();
    $('thead').empty();
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //console.log(response);
        //storeSearchedCity = localStorage.setItem("Past Search", searchedCity);
        
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
        } else if (response.weather[0].main === "Mist") {
            var mist = $("<thead class='fas fa-cloud-rain'>");
            icon.append(mist);
        }

        tBody.append(temp, humid, wind);
        cityName.append(city);
       
    })
    //$("#data-view").prepend(cityName, tBody);
};

function day1Forecast (searchedCity) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&units=imperial&appid=077cc081d0edde56ae0ece8d0be5b7df"

    $('.forecast-date1').empty();
    $('#forecast-icon1').removeClass();
    $('.forecast-info1').empty();
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //storeSearchedCity = localStorage.setItem("Past Search", searchedCity);
        
        var forecastDate = $(".forecast-date1");
        var cardBody = $(".forecast-info1");

        var day = card1Date;
        var temp = "Temp: " + response.list[0].main.temp + "°F";
        var humid = "Humidity: " + response.list[0].main.humidity + "%";

        if (response.list[0].weather[0].main === "Clouds") {
            $("#forecast-icon1").addClass("fas fa-cloud");
        } else if (response.list[0].weather[0].main === "Clear") {
            $("#forecast-icon1").addClass("fas fa-sun");
        } else if (response.list[0].weather[0].main === "Rain") {
            $("#forecast-icon1").addClass("fas fa-cloud-showers-heavy");
        } else if (response.list[0].weather[0].main === "Snow") {
            $("#forecast-icon1").addClass("far fa-snowflake");
        } else if (response.list[0].weather[0].main === "Mist") {
            $("#forecast-icon1").addClass("fas fa-cloud-rain");
        }

        forecastDate.append(day);
        cardBody.append(temp + "<br>" + humid);
    })
};

function day2Forecast (searchedCity) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&units=imperial&appid=077cc081d0edde56ae0ece8d0be5b7df"

    $('.forecast-date2').empty();
    $('#forecast-icon2').removeClass();
    $('.forecast-info2').empty();
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //storeSearchedCity = localStorage.setItem("Past Search", searchedCity);
        console.log(response);

        var forecastDate = $(".forecast-date2");
        var cardBody = $(".forecast-info2");

        var day = card2Date;
        var temp = "Temp: " + response.list[6].main.temp + "°F";
        var humid = "Humidity: " + response.list[6].main.humidity + "%";

        if (response.list[6].weather[0].main === "Clouds") {
            $("#forecast-icon2").addClass("fas fa-cloud");
        } else if (response.list[6].weather[0].main === "Clear") {
            $("#forecast-icon2").addClass("fas fa-sun");
        } else if (response.list[6].weather[0].main === "Rain") {
            $("#forecast-icon2").addClass("fas fa-cloud-showers-heavy");
        } else if (response.list[6].weather[0].main === "Snow") {
            $("#forecast-icon2").addClass("far fa-snowflake");
        } else if (response.list[6].weather[0].main === "Mist") {
            $("#forecast-icon2").addClass("fas fa-cloud-rain");
        }

        forecastDate.append(day);
        cardBody.append(temp + "<br>" + humid);
    })
};

function day3Forecast (searchedCity) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&units=imperial&appid=077cc081d0edde56ae0ece8d0be5b7df"

    $('.forecast-date3').empty();
    $('#forecast-icon3').removeClass();
    $('.forecast-info3').empty();
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //storeSearchedCity = localStorage.setItem("Past Search", searchedCity);
        
        var forecastDate = $(".forecast-date3");
        var cardBody = $(".forecast-info3");

        var day = card3Date;
        var temp = "Temp: " + response.list[14].main.temp + "°F";
        var humid = "Humidity: " + response.list[14].main.humidity + "%";

        if (response.list[14].weather[0].main === "Clouds") {
            $("#forecast-icon3").addClass("fas fa-cloud");
        } else if (response.list[14].weather[0].main === "Clear") {
            $("#forecast-icon3").addClass("fas fa-sun");
        } else if (response.list[14].weather[0].main === "Rain") {
            $("#forecast-icon3").addClass("fas fa-cloud-showers-heavy");
        } else if (response.list[14].weather[0].main === "Snow") {
            $("#forecast-icon3").addClass("far fa-snowflake");
        } else if (response.list[14].weather[0].main === "Mist") {
            $("#forecast-icon3").addClass("fas fa-cloud-rain");
        }

        forecastDate.append(day);
        cardBody.append(temp + "<br>" + humid);
    })
};

function day4Forecast (searchedCity) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&units=imperial&appid=077cc081d0edde56ae0ece8d0be5b7df"

    $('.forecast-date4').empty();
    $('#forecast-icon4').removeClass();
    $('.forecast-info4').empty();
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //storeSearchedCity = localStorage.setItem("Past Search", searchedCity);
        
        var forecastDate = $(".forecast-date4");
        var cardBody = $(".forecast-info4");

        var day = card4Date;
        var temp = "Temp: " + response.list[22].main.temp + "°F";
        var humid = "Humidity: " + response.list[22].main.humidity + "%";

        if (response.list[22].weather[0].main === "Clouds") {
            $("#forecast-icon4").addClass("fas fa-cloud");
        } else if (response.list[22].weather[0].main === "Clear") {
            $("#forecast-icon4").addClass("fas fa-sun");
        } else if (response.list[22].weather[0].main === "Rain") {
            $("#forecast-icon4").addClass("fas fa-cloud-showers-heavy");
        } else if (response.list[22].weather[0].main === "Snow") {
            $("#forecast-icon4").addClass("far fa-snowflake");
        } else if (response.list[22].weather[0].main === "Mist") {
            $("#forecast-icon4").addClass("fas fa-cloud-rain");
        }

        forecastDate.append(day);
        cardBody.append(temp + "<br>" + humid);
    })
};

function day5Forecast (searchedCity) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&units=imperial&appid=077cc081d0edde56ae0ece8d0be5b7df"

    $('.forecast-date5').empty();
    $('#forecast-icon5').removeClass();
    $('.forecast-info5').empty();
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //storeSearchedCity = localStorage.setItem("Past Search", searchedCity);
        
        var forecastDate = $(".forecast-date5");
        var cardBody = $(".forecast-info5");

        var day = card5Date;
        var temp = "Temp: " + response.list[30].main.temp + "°F";
        var humid = "Humidity: " + response.list[30].main.humidity + "%";

        if (response.list[30].weather[0].main === "Clouds") {
            $("#forecast-icon5").addClass("fas fa-cloud");
        } else if (response.list[30].weather[0].main === "Clear") {
            $("#forecast-icon5").addClass("fas fa-sun");
        } else if (response.list[30].weather[0].main === "Rain") {
            $("#forecast-icon5").addClass("fas fa-cloud-showers-heavy");
        } else if (response.list[30].weather[0].main === "Snow") {
            $("#forecast-icon5").addClass("far fa-snowflake");
        } else if (response.list[30].weather[0].main === "Mist") {
            $("#forecast-icon5").addClass("fas fa-cloud-rain");
        }

        forecastDate.append(day);
        cardBody.append(temp + "<br>" + humid);
    })
};

function renderPastSearch() {
    pastSearch = localStorage.getItem("Past Search");
    displayWeatherInfo(searchedCity);
};