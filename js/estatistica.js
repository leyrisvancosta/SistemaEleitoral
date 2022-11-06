google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(nominal_vote);
google.charts.setOnLoadCallback(white_and_null_vote);


function nominal_vote() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Votos nominais válidos'],
        ['2006', 95996733],
        ['2010', 101590153],
        ['2014', 104023802],
        ['2018', 107050749],
        ['2022', 118229719]
    ]);

    var options = {
        title: 'Dados das eleições presidenciais no Brasil',
        legend: { position: 'bottom' },
        backgroundColor: '#E4E4E4',
        is3D: true
    };

    var chart = new google.visualization.LineChart(document.getElementById('nominal_vote'));
    chart.draw(data, options);
}


function white_and_null_vote() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Votos em branco', 'Votos nulos'],
        ['2006', 2866205, 5957521],
        ['2010', 3479340, 6124254],
        ['2014', 4420489, 6678592],
        ['2018', 3106937, 7206222],
        ['2022', 1964779, 3487874]
    ]);

    var options = {
        title: 'Dados das eleições presidenciais no Brasil (Votos em branco e nulos)',
        legend: { position: 'bottom' },
        backgroundColor: '#E4E4E4',
        is3D: true
    };

    var chart = new google.visualization.LineChart(document.getElementById('white_and_null_vote'));
    chart.draw(data, options);
}


