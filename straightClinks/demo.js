

window.onload = function () {
    OrgChart.CLINK_CURVE = 0;
var chart = new OrgChart(document.getElementById('tree'), {
    template: 'olivia',
    orientation: OrgChart.orientation.top,
    clinks: [
        {from: 4, to: 0, label: 'text'}, 
        {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' }
    ]             
});

chart.load([
        { id: 0},
        { id: 1, pid: 0 },
        { id: 2, pid: 0 },
        { id: 3, pid: 1 },
        { id: 4, pid: 2 },
        { id: 5, pid: 1 },
        { id: 6, pid: 2 }
    ]);
};
