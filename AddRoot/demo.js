
window.onload = function () { 
    var chart = new OrgChart(document.getElementById("tree"), {
        enableDragDrop: true,
        nodeMenu: {
            addParent: { text: "Add Root", icon: OrgChart.icon.add(24, 24, '#ccc'), onClick: function(nodeId){
            var id = OrgChart._randomId();
            chart.add({
              id: id,
              pid: "",
              name: "Added Parent"
            });
            var mainNode = chart.get(nodeId);
            mainNode.pid = id;
            chart.update(mainNode);
            chart.draw();
            } },
            add: { text: "Add Child" },
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title"
        }, 
        
        nodes: [
            { id: 1, name: "Denny Curtis", title: "CEO"},
        ]
        
   });
          
};
