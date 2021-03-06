function drawChart(location, type, data, borderColor, backgroundColor, borderWidth, pointRadius, label, noteTag, legend, tickX, tickY){
    if(location){
        new Chart(location, {
            type: type,
            data: {
                datasets: [{
                    label: noteTag,
                    data: data,
                    borderColor:borderColor,
                    backgroundColor:backgroundColor,
                    borderWidth: borderWidth,
                    pointRadius: pointRadius,
                }],
                labels: label
            },
            options: {
                legend: {
                    display: legend //lưới biểu đồ
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks:{
                            display:tickX //hiển thị dữ liệu cột X
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display:tickY //hiển thị dữ liệu cột Y
                        }
                    }]
                }
            }
        });
    }
}
drawChart(document.getElementById('line-chart'), 'line', [1, 2, 3, 4, 9, 1, 6, 3, 4, 9, 1], '#4099ff', '#4099ff82', 4, 2, ['January', 'February', 'March', 'April', 'May', 'June', 'June', 'June', 'June', 'June', 'June'], '', false, true, true)
drawChart(document.getElementById('circle-chart'), 'doughnut', [1,2,3], 'white', ['#0afc97', '#f56565', '#4099ff'], 2, 0, ['A', 'B', 'C'], '', true, false, false)
drawChart(document.getElementById('col-chart'), 'bar', [1, 2, 3, 4, 9, 1, 6, 3, 4, 9, 1,19], '#ffffff00', '#2ed8b6', 8, 2, ['T.1', 'T.2', 'T.3', 'T.4', 'T.5', 'T.6', 'T.7', 'T.8', 'T.9', 'T.10', 'T.11', 'T.12'], 'R',true, true, true)
