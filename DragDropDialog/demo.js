window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        enableDragDrop: true,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },

    });

    chart.on("drop", function(sender, draggedNodeId, droppedNodeId){
      $( function() {
        $( "#dialog" ).dialog({
          buttons: {
            OK: function() {
              $( this ).dialog( "close" );
              chart.updateNode({ id: draggedNodeId, pid: droppedNodeId});
            },
            Cancel: function() {
              $( this ).dialog( "close" );
              
            }
          }
        });
      } );
      return false;
    });


    nodes = [
    { id: "1", name: "name1"},
            { id: "2", pid: "1", name: "name2" },
            { id: "3", pid: "1", name: "name3" },
            { id: "4", pid: "2", name: "name4" },
            { id: "5", pid: "2", name: "name5" },
            { id: "6", pid: "3", name: "name6" },
            { id: "7", pid: "3", name: "name7" },
            { id: "8", pid: "4", name: "name8" },
            { id: "9", pid: "5", name: "name9" }
        ];
        chart.load(nodes);
};