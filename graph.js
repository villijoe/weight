/**
 * Created by Orion on 27.03.2016.
 */
function graph(obj, array) {

    var colors = Highcharts.getOptions().colors;

    $('#container').highcharts({
        chart: {},
        credits: {
            enabled: false
        },
        data: {
            dateFormat: 'dd/mm/YYYY'
        },
        title: {
            text: 'My Weight',
            x: -20 //center
        },
        plotOptions: {
            line: {
                dataLabels: {
                    align: 'center',
                    enabled: true
                },
                enableMouseTracking: false,
                //shadow: true
            }
        },
        subtitle: {
            text: 'Days',
            x: -20
        },
        xAxis: {
            //type: 'datetime',
            categories: obj
        },
        yAxis: {
            title: {
                text: 'Weight'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            followPointer: true,
            valueSuffix: ' kg'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2016',
            data: array,
            /*pointStart: obj[0],
             pointIntervalUnit: 'day',
             zoneAxis: 'x',
             zones: [{
             value: obj[2],
             color: colors[5]
             }, {
             value: obj[3],
             color: colors[2]
             }, {
             value: obj[4],
             color: colors[2]
             }]*/
        }]
    });
}