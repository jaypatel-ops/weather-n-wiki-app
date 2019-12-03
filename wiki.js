var w_endpoint = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=";

$(document).ready( function(){
    $("#btn").on("click", function(){
    console.log($('#input').val());
    $.get(w_endpoint + $('#input').val(), function(response){
        console.log(response);
     
      });
    });
});