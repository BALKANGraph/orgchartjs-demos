

window.onload = function () {
    var doNotDragNodesWithIdArr = ["1", "2", "3", "4"];
        
    var chart = new OrgChart(document.getElementById("tree"), {
        enableDragDrop: true,
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        }
    });  
    
    chart.on("drag", function(sender, draggedNodeId){
       if (doNotDragNodesWithIdArr.indexOf(draggedNodeId) != -1){
    
           return false;
       }
    });
    
    chart.load([
            { id: "1"},
            { id: "2", pid: "1" },
            { id: "3", pid: "1" },
            { id: "4", pid: "2" },
            { id: "5", pid: "2" },
            { id: "6", pid: "3" },
            { id: "7", pid: "3" },
            { id: "8", pid: "4" },
            { id: "9", pid: "5" }


        ]);
};
