window.onload = function () {
        
    function iterate(c, n, ids){      
          ids.push(n.id)
        for(var i = 0; i < n.childrenIds.length; i++){
            iterate(c, c.getNode(n.childrenIds[i]), ids)
        }
    }

    var chart = new OrgChart(document.getElementById("tree"), {
    nodeBinding: {
          field_0: "name",
          field_1: "title",
          img_0: "img"
      },
      nodeMenu: {
          remove: { text: "Remove" }
      },
    
  });

  nodes = [
    { id: 1 },
          { id: 2, pid: 1 },
          { id: 3, pid: 1 },
          { id: 4, pid: 2 },
          { id: 5, pid: 2 },
          { id: 6, pid: 3 },
          { id: 7, pid: 3 },
          { id: 8, pid: 6 },
          { id: 9, pid: 7 }
      ];



      
    chart.on('remove', function (sender, nodeId) {

          var ids = [];

      var node = chart.getNode(nodeId);
      iterate(sender, node, ids);

      for(var i = 0; i < ids.length; i++)
      {
        sender.remove(ids[i]);
      }
      sender.draw();

      return false; 
    });  


      chart.load(nodes);
  }