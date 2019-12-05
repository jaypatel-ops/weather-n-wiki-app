var w_endpoint = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=";

$(document).ready( function(){
    $("#wiBtn").on("click", function(){
    console.log($('#input').val());
    $.get(w_endpoint + $('#input').val(), function(response){
        var data1 =  "<div class= 'card'>" + "Top 5 Wiki Results "  + "<br>" + '<a href="'+response[3][0]+'"> R1 </a>' + "<br>" + '<a href="'+response[3][1]+'"> R2 </a>' + "<br>" + '<a href="'+response[3][2]+'"> R3 </a>' + "<br>" + '<a href="'+response[3][3]+'"> R4 </a>' + "<br>" + '<a href="'+response[3][4]+'"> R5 </a>' + "<br>" + "</div>";
      
        $("#list").append(data1);
        console.log(response);
     
      });
    });
});