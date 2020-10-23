

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
    
        function getLevel(node){
            var pnodeId = node.pid;
            var nodeLevel = 0;
            var currentNode = node;
            while(pnodeId){
                nodeLevel++;
                var currentNode = chart.get(pnodeId);
                pnodeId = currentNode.pid;
            }
            return nodeLevel;
        }
    
        document.getElementById("levelCount").addEventListener("change", function(e) {         
    
            var id = "1";
            var level = e.target.value;
            var expandIds = [];
            var collapseIds = [];
            console.log(chart.nodes);
            var nodeLevel = -1;
            for (var i in chart.nodes) {
                if (!chart.nodes[i].level){
                    nodeLevel = getLevel(chart.nodes[i]);
                    console.log("nodeLevel " + nodeLevel);
                }
                else {
                    nodeLevel = chart.nodes[i].level;
                }
                if (nodeLevel == level){
                    collapseIds.push(chart.nodes[i].id);
                }
                else if (nodeLevel < level){
                    expandIds.push(chart.nodes[i].id);
                }
            }
    
            chart.expandCollapse(id, expandIds, collapseIds);
    
            });
};
