$(function() {

  $.ajax({
    url:"http://138.68.64.12:3018/sales",
    method: "GET",
    success:function(data){
     printLineChart(data);
     printPieChart(data)
    },
    error:function(){
      alert('si è verificato un errore')
    }
  });


});
function printPieChart(vendite) {
  var dati= getDataForPieChart(vendite)
  var ctx = document.getElementById('myChart2').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: dati.labels,
        datasets: [{
            label: "Totale vendite per mese",
            backgroundColor :[
              'red',
              'yellow',
              'green',
              'brown',
            ],
            borderColor: 'rgb(255, 99, 132)',
            data: dati.data,
        }]
    },
});
}
function getDataForPieChart(vendite){
  var fatturatoTotale = 0;
  var venditori = {};
  for (var i = 0; i < vendite.length; i++) {
    var vendita = vendite[i];
    var venditore = vendita.salesman
    if (!venditori[venditore]) {
      venditori[venditore]=0
    }
    venditori[venditore] += vendita.amount
    fatturatoTotale += vendita.amount
  }
  var dati = {
    labels :[],
    data: [],
  };
  for (var chiaveVenditore  in venditori) {
    var perecentualeVenditeVenditore = (venditori[chiaveVenditore]*100)/fatturatoTotale
    dati.labels.push(chiaveVenditore)
    dati.data.push(perecentualeVenditeVenditore)
  }
  return dati
}

function printLineChart(vendite) {
  var dati= getDataForLineChart(vendite);
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: dati.labels,
        datasets: [{
            label: "Totale vendite per mese",
            borderColor: 'rgb(255, 99, 132)',
            data: dati.data,
        }]
    },
});
}
function getDataForLineChart(vendite) {
  var mesi = {
    'Jan':0,
    'Feb':0,
    'Mar':0,
    'Apr':0,
    'May':0,
    'Jun':0,
    'Jul':0,
    'Aug':0,
    'Sep':0,
    'Oct':0,
    'Nov':0,
    'Dec':0,
  };

  for (var i = 0; i < vendite.length; i++) {
    var vendita = vendite[i];
    var dataDellaVendita = moment(vendita.date, 'DD-MM-YYYY')
    var meseDellaVendita = dataDellaVendita.format('MMM')
    mesi[meseDellaVendita]+= vendita.amount
  }
  var dati = {
    labels:[],
    data:[],
  };
  for (var chiaveMese in mesi) {
    dati.labels.push(chiaveMese)
    dati.data.push(mesi[chiaveMese])
  }
  return dati;
}
