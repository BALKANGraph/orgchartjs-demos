

var chart;
window.onload = function () {
    chart = new OrgChart(document.getElementById("tree"), {
        nodeMenu: {
            pdfPreview: { 
                text: "PDF Preview", 
                icon: OrgChart.icon.pdf(24,24, '#7A7A7A'),
                onClick: preview1
            },
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title"
        },
        nodes: [
            { id: "1", name: "Jack Hill", title: "Chairman and CEO" },
            { id: "2", pid: "1", name: "Lexie Cole", title: "QA Lead" },
            { id: "3", pid: "1", name: "Janae Barrett", title: "Technical Director"}

        ]
    });

    function preview1(id){
        OrgChart.pdfPrevUI.show(chart, {
            format: 'A4',
            nodeId: id
        });
    }
};
