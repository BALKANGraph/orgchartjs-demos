

window.onload = function () {   
    var chart = new OrgChart(document.getElementById("tree"), {   
        enableSearch: false,
        collapse: {
            level: 3
        },
        nodeBinding: {
            field_0: "id",
            field_1: "pid",
        }
    });    

    chart.load([
            { id: 1},
            { id: 2, pid: 1},
            { id: 3, pid: 1},
            { id: 4, pid: 2},
            { id: 5, pid: 2},
            { id: 6, pid: 3},
            { id: 7, pid: 3},
            { id: 8, pid: 4},
        ]);
    
    document.getElementById("levelCount").addEventListener("change", function(e) {          
      chart.expandCollapseToLevel(1, {
            level: e.target.value
        });
    });
};
