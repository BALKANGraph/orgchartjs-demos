

window.onload = function () {
    var doNotDragNodesWithIdArr = ["1", "2", "3", "4"];
    // if you'd like to disable by names:
   // var namesToNotDrag = ["name1", "name2", "name3", "name4"];
        
    var chart = new OrgChart(document.getElementById("tree"), {
        enableDragDrop: true,
        nodeBinding: {
            field_0: "id", //field_0: "name"
            field_1: "pid"
        }
    });  
    
    chart.on("drag", function(sender, draggedNodeId){
       if (doNotDragNodesWithIdArr.indexOf(draggedNodeId) != -1){
           return false;
       }
    });

    // if you'd like to disable by names:
    // chart.on("drag", function(sender, draggedNodeId){
    //     var data = chart._get(draggedNodeId);
    //     var name = data.name;
    //     if (namesToNotDrag.indexOf(name) != -1){       
    //         return false;
    //     }
    // });
    
    chart.load([
            { id: "1", name: "name1"},
            { id: "2", pid: "1", name: "name2" },
            { id: "3", pid: "1", name: "name3" },
            { id: "4", pid: "2", name: "name4" },
            { id: "5", pid: "2", name: "name5" },
            { id: "6", pid: "3", name: "name6" },
            { id: "7", pid: "3", name: "name7" },
            { id: "8", pid: "4", name: "name8" },
            { id: "9", pid: "5", name: "name9" }


        ]);
};
