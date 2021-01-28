window.onload = function () {
        

    var chart = new OrgChart(document.getElementById("tree"), {
      enableDragDrop: true,
    nodeBinding: {
          field_0: "id",
          field_1: "pid"
      },
    
  });

  var nodes = [
          { id: 1, name: "Denny Curtis", title: "CEO" },
          { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager" },
          { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager" },
          { id: 4, pid: 2, name: "Elliot Patel", title: "Sales" },
          { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales" },
          { id: 6, pid: 3, name: "Tanner May", title: "Developer" }
  ];


  var array = [];
  var movingNode = {};

      document.querySelector('#undo').addEventListener('click', function(){
        if (array.length > 0) {
          var undoNode = array.pop();
          console.log(undoNode);
          var id = undoNode.draggedNodeId;
          var pid = undoNode.draggedNodePid;
          chart.updateNode({id, pid});
        }

      });

      chart.on('drag', function (sender, draggedNodeId) {

          var node = chart.get(draggedNodeId);
          draggedNodePid = node.pid;
          movingNode = {draggedNodeId, draggedNodePid};
      });

      chart.on('drop', function (sender, draggedNodeId, droppedNodeId) {
        array.push(movingNode);
        console.log(array);
      });

      chart.load(nodes);

  }
  