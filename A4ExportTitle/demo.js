
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
                onClick: function () {
                    chart.exportPDF({
                        extraHtml: '<div style="text-align:center;">my title goes here<div>',
                        format: 'A4'
                    });
                }
            }
        }
    });

    chart.load([
        { id: 1 },
        { id: 2, pid: 1 },
        { id: 3, pid: 1 }
    ]);
}
