var w_endpoint = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=";

$(document).ready( function(){
    $("#wBtn").on("click", function(){
    console.log($('#wInput').val());
    $.get(w_endpoint + $('#wInput').val(), function(response){
        console.log(response);
     
      });
    });
});