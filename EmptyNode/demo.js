
window.onload = function () {
    OrgChart.templates.empty = Object.assign({}, OrgChart.templates.base);
    OrgChart.templates.empty.size = [0, 0];
    OrgChart.templates.empty.node = '';
    OrgChart.templates.empty.plus = '';
    OrgChart.templates.empty.minus = '';

    var chart = new OrgChart(document.getElementById("tree"), {
        template: 'luba',
        nodeBinding: {
            field_0: 'id',
            field_1: 'pid',
        },
        tags: {
            empty: { template: 'empty' }
        },
        nodes: [
            { id: 1 },
            { id: 2, pid: 1 },
            { id: 3, pid: 1, tags: ['empty'] },
            { id: 4, pid: 1 },
            { id: 5, pid: 2 },
            { id: 6, pid: 4 },
            { id: 7, pid: 4 },
            { id: 8, pid: 3, tags: ['empty'] },
            { id: 9, pid: 8 },
            { id: 10, pid: 2 }
        ]
    });
};
