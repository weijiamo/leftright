<template>
  <div id="chartContainer" style="height: 300px; width: 100%;"></div>
</template>

<script>
  export default {
  components: {
    },
      ready: function(event, msg) {
        var dataPoints = [];
    var y = 0;
    var limit = 50000;
    
    for ( var i = 0; i < limit; i++ ) {
      
      y += Math.round( 10 + Math.random() * (-10 -10)); 
      dataPoints.push({ y: y});
    }
    
    var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
      zoomEnabled: true,
      zoomType: "xy",
      
      title:{
        text: "Performance Demo with 50,000 DataPoints"
      },    
      data: [
      {
        type: "line",              
        dataPoints: dataPoints
      }
      ]
    });
    chart.render();
      }
  }
</script>
