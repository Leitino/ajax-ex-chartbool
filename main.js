$(function() {

  $.ajax({
    url:"http://138.68.64.12:3018/sales",
    method: "GET",
    success:function(data){
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        totvendite=0
        var vendite = data[i].amount
        var mese = moment(data[i].date, 'DD, MM, YYYY');
        console.log(mese)
        totvendite = totvendite + vendite
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                datasets: [{
                    label: "Totale vendite",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [totvendite, totvendite, totvendite],
                }]
            },

            // Configuration options go here
            options: {}
        });


      }
        console.log(totvendite)
    }
  });
});
