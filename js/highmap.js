/*
 * @Author: ChenShan 
 * @Date: 2019-07-13 15:35:49 
 * @Last Modified by: ChenShan
 * @Last Modified time: 2019-07-16 21:01:30
 */

Highcharts.chart('highmap', {
    chart: {
        type: 'heatmap',
        plotBorderWidth: 1,
    },
    title: {
        text: null
    },
    xAxis: {
        categories: ['RW', 'ISRW', 'RN', 'RJ', 'RE', 'TIES', 'BFS', 'DFS']
    },
    yAxis: {
        categories: ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M'],
        title: null
    },
    colorAxis: {
        min: 0,
        minColor: '#ffffff',
        maxColor: "#68B5F0"
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },
    tooltip: {
        enabled:false,
    },
    series: [{
        borderWidth: 1,
        data: [[0, 0, 6.906878809697719], [0, 1, 44.361300666594005], [0, 2, 59.39403046327836], [0, 3, 49.52058457809068], [0, 4, 17.021671624887098], [0, 5, 64.3669823721908], [0, 6, 74.42993097619367], [0, 7, 12.703265233475532], [0, 8, 60.72545852258451], [0, 9, 93.16767658572148], [0, 10, 36.18122806160963], [0, 11, 83.46694915102721], [0, 12, 69.07051766758103], [1, 0, 96.85303438162269], [1, 1, 96.37585512209996], [1, 2, 57.33448921778154], [1, 3, 5.567527456723669], [1, 4, 88.33271049773927], [1, 5, 65.72185219192446], [1, 6, 17.683597889224195], [1, 7, 93.22473956118627], [1, 8, 96.38898358874062], [1, 9, 87.70016844458227], [1, 10, 21.298528246803766], [1, 11, 64.82915337297987], [1, 12, 8.642050284846187], [2, 0, 24.429803754984537], [2, 1, 10.230037805629568], [2, 2, 46.305590870909604], [2, 3, 60.091629531662804], [2, 4, 41.80630015553811], [2, 5, 76.44506552549088], [2, 6, 87.51544915447369], [2, 7, 66.76631206551575], [2, 8, 43.55384507402452], [2, 9, 62.78997688627634], [2, 10, 48.55364606537997], [2, 11, 7.143750006471901], [2, 12, 92.30602012039004], [3, 0, 3.8592783327387266], [3, 1, 47.88540130940591], [3, 2, 24.44530863900656], [3, 3, 13.025481194827204], [3, 4, 4.39704977259092], [3, 5, 6.836427797475314], [3, 6, 41.796717601254564], [3, 7, 26.964246615864603], [3, 8, 60.25200222429181], [3, 9, 90.72134703416793], [3, 10, 72.96314945585007], [3, 11, 6.154400300325042], [3, 12, 38.44302321489052], [4, 0, 94.94844675921216], [4, 1, 7.718907248093235], [4, 2, 22.502338243616528], [4, 3, 37.143963839827634], [4, 4, 81.01951857776328], [4, 5, 73.84674687010782], [4, 6, 64.42475727479084], [4, 7, 98.47554124530325], [4, 8, 25.24693476099169], [4, 9, 97.27931901127918], [4, 10, 50.54283306400686], [4, 11, 40.204774448326646], [4, 12, 55.22094499184136], [5, 0, 59.29730715250709], [5, 1, 42.86881737426274], [5, 2, 83.31204342018671], [5, 3, 89.70470592698898], [5, 4, 19.908618650800175], [5, 5, 93.52958947722645], [5, 6, 86.25213267248797], [5, 7, 71.10351463513618], [5, 8, 83.0489255917226], [5, 9, 77.1837777796653], [5, 10, 62.2875185247475], [5, 11, 8.806564409389281], [5, 12, 64.77459779406652], [6, 0, 48.482397135075445], [6, 1, 92.64502074038734], [6, 2, 83.23007370782778], [6, 3, 1.0519088978194016], [6, 4, 18.51494167716533], [6, 5, 63.85846414387836], [6, 6, 51.2737685230852], [6, 7, 97.2481310984748], [6, 8, 61.13815563970758], [6, 9, 9.354952944443966], [6, 10, 83.04775485015674], [6, 11, 12.728536452577284], [6, 12, 92.47550859466547]],
        
        dataLabels: {
            enabled: false,
        }
    }],

    plotOptions: {
        series: {
            cursor: 'pointer',
            events: {
                click: function(e) {
                    var y = e.point.y;
                    var selectedpolygon = '#polygon_'+String(y);
                    d3.select(selectedpolygon)
                    .attr('fill','rgb(189, 30, 30,0.5)')
                    .attr('stroke-width','2');
                    // alert(y);
                },
            }
        }
    },
});
    
document.getElementsByClassName('highcharts-credits')[0].style.display="none";