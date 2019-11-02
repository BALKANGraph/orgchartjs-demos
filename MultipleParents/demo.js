

window.onload = function () {

    OrgChart.slinkTemplates.myTemplate3 = Object.assign({}, OrgChart.slinkTemplates.yellow);
    OrgChart.slinkTemplates.myTemplate3.link = '<path  marker-start="url(#arrowSlinkYellow)" marker-end="url(#dotSlinkYellow)" stroke-linejoin="round" stroke="#FFCA28" stroke-width="2" fill="none" d="{d}" />';


    var chart = new OrgChart(document.getElementById("tree"), { 
        orientation: OrgChart.orientation.left,  
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        },
        slinks: [
            {from: 7, to: 1, label: 'text', template: 'myTemplate1'}, 
            {from: 5, to: 0, template: 'myTemplate2', label: 'reports to' },
           {from: 2, to: 6, template: 'myTemplate3', label: 'lorem ipsum' },
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