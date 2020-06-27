window.onload = function () {
        

    var chart = new OrgChart(document.getElementById("tree"), {
      enableDragDrop: true,
      nodeBinding: {
          field_0: "name",
          field_1: "title",
          img_0: "img"
      },
      menu: {
        pdf: { text: "export" }
      },
      orderBy: "myOrderId"
  });

  nodes = [
      { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
          { id: 2, myOrderId: 5, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
          { id: 3, myOrderId: 6, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
          { id: 4, myOrderId: 1, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
          { id: 5, myOrderId: 2, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
          { id: 6, myOrderId: 4, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
          { id: 7, myOrderId: 3, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
      ];

      chart.on('drop', function (sender, draggedNodeId, droppedNodeId) {
        var draggedNode = sender.getNode(draggedNodeId);
        var droppedNode = sender.getNode(droppedNodeId);
        
        if (draggedNode.level == droppedNode.level){
        
          var draggedNodeData = sender.get(draggedNodeId);
          var droppedNodeData = sender.get(droppedNodeId);
      
          var orderID = draggedNodeData.myOrderId;
          draggedNodeData.myOrderId = droppedNodeData.myOrderId;
          droppedNodeData.myOrderId = orderID;
          sender.update(draggedNodeData);
          sender.update(droppedNodeData);
          sender.draw();
          return false; 
        }
      });
      chart.load(nodes);
  }