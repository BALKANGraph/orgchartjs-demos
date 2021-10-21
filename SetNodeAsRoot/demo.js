   
window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        template: 'olivia',
        mode: 'dark',
        nodeMenu: {
            rood:{
                icon: '',
                text: 'Set As Root',
                onClick: function(nodeId){
                    if (chart.config.roots.indexOf(nodeId) == -1){
                        chart.config.roots.push(nodeId);
                        chart.draw();
                    }
                }
            }
        },
        layout: OrgChart.tree,
        nodeBinding:{
            field_0: 'id',
            field_1: 'pid'
        },
        roots: [2, 3],
        nodes: [
            { id: 1 },
            { id: 2, pid: 1 },
            { id: 3, pid: 1 },
            { id: 4, pid: 1 },
            { id: 5, pid: 2 },
            { id: 6, pid: 2 },
            { id: 7, pid: 2 },
            { id: 8, pid: 3 },
            { id: 9, pid: 3 },
            { id: 10, pid: 3 },
            { id: 11, pid: 3 },
            { id: 12, pid: 3 },
            { id: 13, pid: 3 },
            { id: 14, pid: 4 },
            { id: 15, pid: 4 },
            { id: 16, pid: 4 }
        ]
    });
};
