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
    { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
          { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
          { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
          { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
          { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
          { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
          { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
          { id: 8, pid: 6, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
          { id: 9, pid: 7, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
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