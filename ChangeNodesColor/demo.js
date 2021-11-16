window.onload = function () {
  var colors = ["#FFCA28", "#F57C00", "#039be5"];
  OrgChart.templates.color0 = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.color0.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[0] + '" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
  OrgChart.templates.color1 = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.color1.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[1] + '" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
  OrgChart.templates.color2 = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.color2.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[2] + '" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';

  var chart = new OrgChart(document.getElementById("tree"), {
nodeBinding: {
    field_0: "name"
},
tags: {
  "y": {
    template: "color0",
  },
  "o": {
    template: "color1",
  },
  "b": {
    template: "color2",
  }
},
nodeMenu:{
            details: {text:"Details"},
            edit: {text:"Edit"},
            add: {text:"Add"},
            remove: {text:"Remove"}
        },
        editForm: {
          generateElementsFromFields: false,
          elements: [
              [
                  { type: 'select', options: [{ value: 'b', text: "blue" }, { value: 'o', text: 'orange' }, { value: 'y', text: 'yellow' }], label: 'color', binding: 'color' },
              ],
          ]
        }

});

var nodes = [
    { id: 1, name: "Denny Curtis", tags: ["b"] },
    { id: 2, pid: 1, name: "Ashley Barnett", tags: ["b"] },
    { id: 3, pid: 1, name: "Caden Ellison", tags: ["o"] },
    { id: 4, pid: 2, name: "Elliot Patel", tags: ["y"] },
    { id: 5, pid: 2, name: "Lynn Hussain", tags: ["b"] },
    { id: 6, pid: 3, name: "Tanner May", tags: ["o"] },
    { id: 7, pid: 3, name: "Fran Parsons", tags: ["y"] }
];

nodes.forEach(node => {
if(node.tags) node.color = node.tags[0];
});

chart.on('update', function (sender, oldNode, newNode) {
        newNode.tags[0] = newNode.color;
    });  

chart.load(nodes);


}