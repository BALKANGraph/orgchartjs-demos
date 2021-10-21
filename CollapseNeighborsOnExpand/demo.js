window.onload = function () {
  var chart = new OrgChart(document.getElementById("tree"), {
    template: "ana",
    enableDragDrop: true,
    nodeBinding: {
      field_0: "name",
      field_1: "title",
      img_0: "img",
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
  ];

  chart.on('expcollclick', function (sender, isCollpasing, id, ids) {

    if (!isCollpasing) {
      var collapseIds = [];
      var clickedNode = chart.getNode(id);

      var ln = clickedNode.leftNeighbor;
      while (ln) {
        for (var i = 0; i < ln.childrenIds.length; i++) {
          collapseIds.push(ln.childrenIds[i])
        }
        ln = ln.leftNeighbor;
      }

      var rn = clickedNode.rightNeighbor;
      while (rn) {
        for (var i = 0; i < rn.childrenIds.length; i++) {
          collapseIds.push(rn.childrenIds[i])
        }
        rn = rn.rightNeighbor;
      }
      chart.collapse(id, collapseIds)

      chart.collapse(id, collapseIds, function () {
        chart.expand(id, clickedNode.childrenIds)
      })
      return false;
    }
  });


  chart.load(nodes)

};