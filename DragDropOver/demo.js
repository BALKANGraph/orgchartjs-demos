
window.onload = function () {

  OrgChart.templates.ana.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="white" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>' +
'<line x1="2" y1="117" x2="248" opacity="0" y2="117" stroke="#aeaeae" stroke-width="2"></line>';

  OrgChart.templates.ana.field_0 = '<text data-width="230" style="font-size: 18px;" fill="#aeaeae" x="125" y="95" text-anchor="middle">{val}</text>';
  OrgChart.templates.ana.field_1 = '<text data-width="130" data-text-overflow="multiline" style="font-size: 14px;" fill="#aeaeae" x="230" y="30" text-anchor="end">{val}</text>';

var chart = new OrgChart(document.getElementById("tree"), {
  template: "ana",
  enableDragDrop: true,
  
  nodeBinding: {
      field_0: "name",
      field_1: "title",
      img_0: "img"
  },
 
});



chart.load([
{ id: 1, name: "Denny Curtis", title: "CEO" },
  { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager" },
  { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager" },
  { id: 4, pid: 2, name: "Elliot Patel", title: "Sales" },
  { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales" },
  { id: 6, pid: 3, name: "Tanner May", title: "Developer" },
  { id: 7, pid: 3, name: "Fran Parsons", title: "Developer" }
]);

}