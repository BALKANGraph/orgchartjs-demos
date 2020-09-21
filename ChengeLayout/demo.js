window.onload = function () {
        
  nodes = [
    { id: 1 },
    { id: 2, pid: 1 },
    { id: 3, pid: 1 },
    { id: 4, pid: 1 },
    { id: 5, pid: 1 },
    { id: 6, pid: 1 },
    // { id: 7, pid: 1 },
    // { id: 8, pid: 1 },
    // { id: 9, pid: 1 },
    // { id: 10, pid: 1 }
    ];


      
  var chart = new OrgChart(document.getElementById("tree"), {
    layout: OrgChart.treeLeftOffset,
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
    }      
});


  if (nodes.length > 8) {
    chart._layoutConfigs['base'].layout = OrgChart.tree;
  }

    chart.load(nodes);
}
