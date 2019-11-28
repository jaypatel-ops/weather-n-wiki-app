endpoint = "https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/current?key=2f20bc29ce0f4b25a2a7a8474f91a6ea";
// console.log(endpoint);
// var hey = 1;

$(document).ready( function(){
    $("#wBtn").on("click", function(){
//     console.log($('#city').val() + $('#state').val() + $('#country').val() );
    $.get(endpoint + "&country="+ $('#country').val() + "&state=" +$('#state').val() + "&city=" +$('#city').val(), function(response){
         $.each(response, function(i,v) {
          if(v != 1){
             console.log(v[0].temp);
          }
         });
        
        
        
      });
    });
});