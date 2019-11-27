var w_endpoint = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search="
var input;
console.log(w_endpoint);
// var url = w_endpoint + wInput;
// console.log(url)

$(document).ready( function(){
$.get(w_endpoint + $('#wInput').val(), function(response){
  
    $("#wBtn").on("click", function(){
      console.log( $('#wInput').val());
      console.log(w_endpoint + $('#wInput').val());
        console.log(response);
     


      });
    });
});