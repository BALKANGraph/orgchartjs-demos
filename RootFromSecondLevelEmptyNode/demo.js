function init() {

    OrgChart.templates.empty = Object.assign({}, OrgChart.templates.base);
    OrgChart.templates.empty.size = [0, 0];
    OrgChart.templates.empty.node = '';
    OrgChart.templates.empty.plus = '';
    OrgChart.templates.empty.minus = '';
    OrgChart.templates.empty.img_0 = '';
    
    OrgChart.templates.root = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.root.link = '';
    
    OrgChart.templates.emptyroot = Object.assign({}, OrgChart.templates.empty);
    OrgChart.templates.emptyroot.link = '';


    var chart = new OrgChart(document.getElementById("tree"), {
        template: 'ana',
        nodeBinding: {
            field_0: 'id',
            field_1: 'pid',
        },
        tags: {
            empty: { template: 'empty' },
            emptyroot: { template: 'emptyroot' },
            root: { template: 'root' }
        }
    });			
    
    chart.load(
    [
            { id: 1 },
            { id: 2, pid: 1 },
            { id: 3, pid: 1, "tags": ['empty'] },
            { id: 4, pid: 1 },
            { id: 5, pid: 2 },
            { id: 6, pid: 4 },
            { id: 7, pid: 4 },
            { id: 8, pid: 3, "tags": ['empty'] },
            { id: 9, pid: 8, spids: [1003]},
            { id: 10, pid: 2 },
            { id: 1000, "tags": ['emptyroot'] },
            { id: 1002, pid: 1000, "tags": ['emptyroot'] },
            { id: 1003, pid: 1002, "tags": ['root']  },
            { id: 1004, pid: 1003 },
            { id: 1005, pid: 1003 }
        ]);
}

window.onload = function () {
    init();
};
