$(function() {

  $.ajax({
    url:"http://138.68.64.12:3018/sales",
    method: "GET",
    success:function(data){
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        var venditori = data[i].salesman
        console.log(venditori)
      }

    }
  });

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Novembre", "Dicembre"],
        datasets: [{
            label: "Vendite totali",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 2000, 45, 20, 15, 23, 40, 8],
        }]
    },

    // Configuration options go here
    options: {}
});


})
