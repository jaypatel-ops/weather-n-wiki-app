var weather_endpoint = "https://api.weatherbit.io/v2.0/current?key=b6c58d04639142ddbe58fee338f6c6bd";
var forecast_endpoint = "http://api.weatherbit.io/v2.0/forecast/daily?key=b6c58d04639142ddbe58fee338f6c6bd";
var w_endpoint = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=";
// console.log(endpoint);
// var hey = 1;


$(document).ready( function(){
    $("#wBtn").on("click", function(){
   
    $.get(weather_endpoint + "&country="+ $('#country').val() + "&state=" +$('#state').val() + "&city=" +$('#city').val(), function(response){   
         $.each(response, function(i,v) {
          if(v != 1){
        
        $.get(w_endpoint + v[0].city_name , function(response){
             var data= "<div class= 'card'>" + v[0].city_name + ", " + v[0].state_code + "<br>" +
                 "~ "+v[0].weather.description +" ~"+ "<br>" + "Current Tempertature: " + v[0].temp+ " °C"+ "<br>" + "Wind Speed: " + v[0].wind_spd + "<br>" + '<a href="'+response[3][1]+'"> Discover More about City </a>' + "<br>" + "</li>" + "<br>" + "</div>" ;
            console.log(response[3][1]);
                    $("#list").append(data);
//                     $("#list").append(response[3][1]);
     
          });  
          
          }
          
         });
      });
      
    });

});