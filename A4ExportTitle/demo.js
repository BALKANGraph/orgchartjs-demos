
window.onload = function () {
    var chart;

    chart = new OrgChart(document.getElementById('tree'), {
        template: 'base',
        nodeBinding: {
            name: 'id',
            title: 'pid'
        },
        menu: {
            pdfWithTitle: {                
                text: 'A4 PDF',
                icon: OrgChart.icon.pdf(24, 24),
            }
        }
    });
    
    chart.on('click', function (sender, args) {
        chart.exportPDF({
            header: 'my header goes here',
            footer: 'my footer goes here',
            format: 'A4',
            margin: [60, 20, 60, 20]
        });
     });  


    chart.load([
        { id: 1 },
        { id: 2, pid: 1 },
        { id: 3, pid: 1 }
    ]);
}
