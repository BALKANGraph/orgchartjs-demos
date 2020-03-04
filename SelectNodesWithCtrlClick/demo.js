window.onload = function () { 
    var slectedNodeIds = [];
    var chart = new OrgChart(document.getElementById("tree"), {
                    mouseScrool: OrgChart.action.none,
        nodeBinding: {
            field_0: "name"
        }
    });


    chart.on('click', function(sender, args){
        if (args.event.ctrlKey == true){
            var nodeElement = sender.getNodeElement(args.node.id);
            if (nodeElement.classList.contains('selected')){
                nodeElement.classList.remove("selected");
                var index = slectedNodeIds.indexOf(args.node.id);
                if (index > -1) {
                    slectedNodeIds.splice(index, 1);
                }
            }
            else{
                nodeElement.classList.add("selected");
                slectedNodeIds.push(args.node.id);
            }
            return false;
        }
    });

    chart.on('redraw', function(sender, args){
        for(var i = 0; i < slectedNodeIds.length; i++){                
            var nodeElement = sender.getNodeElement(slectedNodeIds[i]);
            nodeElement.classList.add("selected");
        }
    });


    chart.load([
            { id: 1, name: "Amber McKenzie" },
            { id: 2, pid: 1, name: "Ava Field" },
            { id: 3, pid: 1, name: "Peter Stevens" },
            { id: 4, pid: 1, name: "Someone Else" }
        ]);

    


   document.getElementById('btn').addEventListener('click', function () {
        alert(JSON.stringify(slectedNodeIds))
   })
};
