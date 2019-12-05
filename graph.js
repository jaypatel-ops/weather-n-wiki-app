$(document).ready( function(){
$("#fBtn").on("click", function(){
   $.get(forecast_endpoint + "&city=" + $('#f_input').val(), function(response){
        
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

       function drawChart() {
              console.log(response.data[0].datetime);
         
            var data = google.visualization.arrayToDataTable([
        

          [  'Day',          'Max Temperature',               'Min Temperature'  ],
          ["Tomorrow",  response.data[0].max_temp,      response.data[0].min_temp],
          ["+2 Days" ,  response.data[1].max_temp,      response.data[1].min_temp],
          ["+3 Days" ,  response.data[2].max_temp,      response.data[2].min_temp],
          ["+4 Days" ,  response.data[3].max_temp,      response.data[3].min_temp],
          ["+5 Days" ,  response.data[4].max_temp,      response.data[4].min_temp],
          ["+6 Days" ,  response.data[5].max_temp,      response.data[5].min_temp],
//           ["+7 Days" ,  response.data[6].max_temp,      response.data[6].min_temp],
//           ["+8 Days" ,  response.data[7].max_temp,      response.data[7].min_temp],
//           ["+9 Days" ,  response.data[8].max_temp,      response.data[8].min_temp],
//           ["+10 Days",  response.data[9].max_temp,      response.data[9].min_temp]
          
     ])
        

        var options = {
          title: 'Weather Forecast',
          curveType: 'function',
          legend: { position: 'left' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);


      }

         });
   
    });
});