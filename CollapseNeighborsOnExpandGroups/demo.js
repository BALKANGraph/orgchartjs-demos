var chart = new OrgChart(document.getElementById("tree"), {
  
  nodeBinding: {
      field_0: "name",
      field_1: "title",
      img_0: "img"
  },
  tags: {
      group: {
          template: "group"
      }
  }
});

var nodes = [
{ id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
{ id: "group1", pid: 1, tags: ["group"]},
{ id: "group2", pid: 1, tags: ["group"]},
{ id: 2, stpid: "group1", name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
{ id: 3, stpid: "group2", name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
{ id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
{ id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", tags: ["color2"], img: "https://cdn.balkan.app/shared/6.jpg" },
{ id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
{ id: 7, pid: 3, name: "Leslie Mcclain", title: "Developer", tags: ["color1"], img: "https://cdn.balkan.app/shared/8.jpg" }

];

chart.on('expcollclick', function (sender, isCollpasing, id, ids) {
if (!isCollpasing){
var collapseIds = [];
var clickedNode = chart.getNode(id);	
var stparent = chart.getNode(clickedNode.stpid);
if (stparent) {
  var ln = stparent.leftNeighbor;
  while(ln){
    for (var i = 0; i < ln.stChildrenIds.length; i++){
        var nodesToCollapse = chart.getNode(ln.stChildrenIds[i]).childrenIds;
        for (var j = 0; j < nodesToCollapse.length; j++){
            collapseIds.push(nodesToCollapse[j]);
        }
    }
    ln = ln.leftNeighbor;
  }

  var rn = stparent.rightNeighbor;
  while(rn){          
    for (var i = 0; i < rn.stChildrenIds.length; i++){
        var nodesToCollapse = chart.getNode(rn.stChildrenIds[i]).childrenIds;
        for (var j = 0; j < nodesToCollapse.length; j++){
            collapseIds.push(nodesToCollapse[j]);
        }
    }
    rn = rn.rightNeighbor;
  }

  chart.collapse(id, collapseIds)

  chart.collapse(id, collapseIds, function(){
    chart.expand(id, clickedNode .childrenIds)
  })
  return false;
}
}
});

chart.load(nodes);