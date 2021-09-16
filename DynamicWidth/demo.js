window.onload = function () {

  OrgChart.templates.dynamic = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.dynamic.size = [300, 40];
  OrgChart.templates.dynamic.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#039BE5" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';     
  OrgChart.templates.dynamic.field_0 = '<text data-width="270" style="font-size: 18px;" fill="#fff" x="150" y="25" text-anchor="middle">{val}</text>';


var fieldWidth = 0;

var chart = new OrgChart(document.getElementById("tree"), {
    template: "dynamic",
    nodeBinding: {
        field_0: "name"
    },
});

chart.on('redraw', function (sender) {
  var allNodesRect = document.querySelectorAll('[data-n-id] rect');
  for (i = 0; i < allNodesRect.length; i++) {
    var nodeText = document.querySelector('[data-n-id="' + (i + 1) + '"] text');
    var nodeRect = document.querySelector('[data-n-id="' + (i + 1) + '"] rect');
    fieldWidth = nodeText.getComputedTextLength();
    nodeRect.style.width = fieldWidth + 20;
    console.log(fieldWidth);
    nodeRect.style.x = 150 - (fieldWidth / 2) - 10;
  }
});


chart.load([
    { id: 1, name: "one" },
    { id: 2, pid: 1, name: "one two three" },
     { id: 3, pid: 1, name: "one two" },
     { id: 4, pid: 2, name: "one two three four" },
    { id: 5, pid: 2, name: "one two three four five" },
    { id: 6, pid: 3, name: "one two three four five six seven" },
    { id: 7, pid: 3, name: "one two three four five six" }
 ]);

}