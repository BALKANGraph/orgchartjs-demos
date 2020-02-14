

var chart;
window.onload = function () {
    chart = new OrgChart(document.getElementById("tree"), {
        nodeMenu: {
            pdfWithTitle: {                
                text: 'A4 PDF',
                icon: OrgChart.icon.pdf(24, 24),
                onClick: function (id) {
                                              
                    chart.exportPDF({
                        openInNewTab: true,
                        nodeId: id,
                        header: 'my header goes here',
                        footer: 'my footer goes here',
                        format: 'A4',
                        margin: [60, 20, 60, 20]
                    });
                }
            }
          },

        nodeBinding: {
            field_0: "name",
            field_1: "title"
        },
        nodes: [
            { id: "1", name: "Jack Hill", title: "Chairman and CEO" },
            { id: "2", pid: "1", name: "Lexie Cole", title: "QA Lead" },
            { id: "3", pid: "1", name: "Janae Barrett", title: "Dev lead"},
            { id: "4", pid: "2", name: "Elliot Patel", title: "QA"},
            { id: "5", pid: "2", name: "Lynn Hussain", title: "QA"},
            { id: "6", pid: "3", name: "Tanner May", title: "Dev"},
            { id: "7", pid: "3", name: "Fran Parsons", title: "Dev"}

        ]
    });

};
