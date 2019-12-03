endpoint = "https://api.weatherbit.io/v2.0/current?key=b6c58d04639142ddbe58fee338f6c6bd";
// console.log(endpoint);
// var hey = 1;

console.log("Here");
$(document).ready( function(){
    $("#wBtn").on("click", function(){
    $.get(endpoint + "&country="+ $('#country').val() + "&state=" +$('#state').val() + "&city=" +$('#city').val(), function(response){
         $.each(response, function(i,v) {
          if(v != 1){
             console.log(v[0].temp);
             var data= "<div class= 'card'>" + "<li class='list-group-item'>" + v[0].city_name + ", " + v[0].state_code + "<br>" +
                 "~ "+v[0].weather.description +" ~"+ "<br>" + "Current Tempertature: " + v[0].temp+ " °C"+ "<br>" + "Wind Speed: " + v[0].wind_spd  + "<br>" + "</li>" + "<br>" + "</div>" ;
              $("#list").append(data);
          }
             
         });
        
        
        
      });
    });
});