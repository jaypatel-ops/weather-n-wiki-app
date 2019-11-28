var id_endpoint= "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?format=json&callback=callback&";

var ly_endpoint= "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?&"
var apiKey= "apikey=6f1f0cfe79682e5da91987b770b9456c";

var track_id = 0;

$(document).ready( function() {
    $("#btn").on("click", function(){
        
        $.get(id_endpoint + apiKey + "&q_track=" + $("#tName").val(), function(response1){
            var json = JSON.parse(response1);
            
            $.each(json, function(i,v) {
                track_id["track_id"];
                track_id = v.body.track_list[0].track.track_id;
                console.log("track_id: "+ track_id);                        
            });
            
            $.get(ly_endpoint + apiKey + "&track_id=" + track_id, function(response){
                var json2= JSON.parse(response);
             $.each(json2, function(i,v) {
                 $("body").append(v.body.lyrics.lyrics_body+ "<br>"); 
                 
                });
            });
        });
     });    
});




