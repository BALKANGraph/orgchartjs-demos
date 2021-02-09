var chart = new OrgChart(document.getElementById("tree"), {
  nodeBinding: {
      field_0: "name"
  }
});

chart.editUI.on('show', function(sender, nodeId){
var node = chart.getNode(nodeId);

if ( node.tags.indexOf('noEdit') != -1){
  return false;
}
});

chart.load([
      { id: 1, name: "Denny Curtis", tags: ["noEdit"] },
      { id: 2, pid: 1, name: "Ashley Barnett" },
      { id: 3, pid: 1, name: "Caden Ellison" },
      { id: 4, pid: 2, name: "Elliot Patel" },
      { id: 5, pid: 2, name: "Lynn Hussain" },
      { id: 6, pid: 3, name: "Tanner May" },
      { id: 7, pid: 3, name: "Fran Parsons" }
  ])