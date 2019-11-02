

window.onload = function () {

    OrgChart.slinkTemplates.myTemplate1 = Object.assign({}, OrgChart.slinkTemplates.yellow);
    OrgChart.slinkTemplates.myTemplate1.link = '<path  marker-start="url(#arrowSlinkYellow)" marker-end="url(#dotSlinkYellow)" stroke-linejoin="round" stroke="#FFCA28" stroke-width="2" fill="none" d="{d}" />';


    var chart = new OrgChart(document.getElementById("tree"), { 
        orientation: OrgChart.orientation.left,  
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        },
        slinks: [
            {from: 7, to: 1, template: 'myTemplate1'}, 
            {from: 5, to: 0, label: 'reports to' },
            {from: 2, to: 6, template: 'blue' },
        ]
    });

    chart.load([
        { id: 0},
        { id: 1, pid: 0 },
        { id: 2, pid: 0 },
        { id: 3, pid: 1 },
        { id: 4, pid: 2 },
        { id: 5, pid: 1 },
        { id: 6, pid: 2 },
        { id: 7, pid: 5 }
    ]);
};