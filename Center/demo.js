

window.onload = function () {    
    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        },
        sticky: false
    });

    chart.on('expcollclick', function(sender, collapse, id, ids){  
        if (!collapse) {
            sender.expand(id, ids, function(){              
                sender.center(id);
            });

            return false;
        }
    });

    chart.load([
            { id: 1 },
            { id: 2, pid: 1 },
            { id: 3, pid: 1 },
            { id: 4, pid: 2 },
            { id: 5, pid: 2 },
            { id: 6, pid: 3 },
            { id: 7, pid: 3 },            
            { id: 8, pid: 4 },
            { id: 9, pid: 4 },
            { id: 10, pid: 5 },
            { id: 11, pid: 5 },
            { id: 12, pid: 6 },
            { id: 13, pid: 6 },
            { id: 14, pid: 7 },
            { id: 15, pid: 7 },
            { id: 16, pid: 8 },
            { id: 17, pid: 8 },
            { id: 18, pid: 9 }
        ]);
};