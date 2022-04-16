var chart;
// var chartb;


// function requestData() {

        
//         $.ajax({
//             url: '/torque',
//             success: function(point) {
//                 var series = chart.series[0],
//                 shift = series.data.length > 20;
//                 chart.yAxis[0].setExtremes(0,30000);
//                 chart.series[0].addPoint(point, true, shift);
//             },
//             cache: false
//         });

//     setTimeout(requestData, 300);
// }
var series = chart.series


$(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'barchart',
            // events: {
            //     load: requestData
            // }
        },
        title: {
            text: 'Torque '
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Value',
                margin: 10
            }
        },
        plotOptions: {
            
            series: {
                color:'hsl(18, 84%, 59%)',
                allowPointSelect: true,
                marker: {
                    fillColor: 'hsl(18, 84%, 59%)',
                    states: {
                        select: {
                            fillColor: 'red',
                            lineWidth: 0
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Data',
            data: [
                {
                    name: "Chrome",
                    y: 62.74,
                    drilldown: "Chrome"
                },
                {
                    name: "Firefox",
                    y: 10.57,
                    drilldown: "Firefox"
                },
                {
                    name: "Internet Explorer",
                    y: 7.23,
                    drilldown: "Internet Explorer"
                },
                {
                    name: "Safari",
                    y: 5.58,
                    drilldown: "Safari"
                },
                {
                    name: "Edge",
                    y: 4.02,
                    drilldown: "Edge"
                },
                {
                    name: "Opera",
                    y: 1.92,
                    drilldown: "Opera"
                },
                {
                    name: "Other",
                    y: 7.62,
                    drilldown: null
                }
            ]
            
        }]
    });
});

