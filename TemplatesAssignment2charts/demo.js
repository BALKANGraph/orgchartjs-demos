window.onload = function () {
        
  OrgChart.templates.isla1 = Object.assign({}, OrgChart.templates.isla);     
  OrgChart.templates.isla1.node = '<rect filter="url(#isla-shadow1)" x="0" y="20" rx="5" ry="5" height="100" width="180" fill="#FFF" stroke-width="1" stroke="#039BE5" ></rect><rect x="25" y="75" rx="10" ry="10" height="20" width="130" fill="#039BE5" stroke-width="3" stroke="#039BE5"></rect><rect fill="#ffffff" stroke="#039BE5" stroke-width="1" x="70" y="0" rx="13" ry="13" width="40" height="40"></rect><circle stroke="#FFCA28" stroke-width="3" fill="none" cx="90" cy="12" r="8"></circle><path d="M75,34 C75,17 105,17 105,34" stroke="#FFCA28" stroke-width="3" fill="none"></path>';
  OrgChart.templates.isla1.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="isla-shadow1"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   0 0 0 0 0    0 0 0 0  0 0 0 0.5 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';

  
  OrgChart.templates.isla2 = Object.assign({}, OrgChart.templates.isla);
  OrgChart.templates.isla2.node = '<rect filter="url(#isla-shadow2)" x="0" y="20" rx="5" ry="5" height="100" width="180" fill="#FFF" stroke-width="1" stroke="green" ></rect><rect x="25" y="75" rx="10" ry="10" height="20" width="130" fill="green" stroke-width="3" stroke="green"></rect><rect fill="#ffffff" stroke="green" stroke-width="1" x="70" y="0" rx="13" ry="13" width="40" height="40"></rect><circle stroke="#FFCA28" stroke-width="3" fill="none" cx="90" cy="12" r="8"></circle><path d="M75,34 C75,17 105,17 105,34" stroke="#FFCA28" stroke-width="3" fill="green"></path>';
  OrgChart.templates.isla2.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="isla-shadow2"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   1 1 1 1 1   0 0 0 0 0  0 0 0 0.5 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';

  OrgChart.templates.isla2.field_1 = '<text width="160" style="font-size: 13px;" fill="green" x="90" y="64" text-anchor="middle">{val}</text>';

  nodes = [
        { id: 1, name: "Denny Curtis", title: "CEO" },
        { id: 2, pid: 1, name: "Ashley Barnett" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales" },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer" },
        { id: 7, pid: 3, name: "Fran Parsons", title: "Developer" }
    ];

  var chart1 = new OrgChart(document.getElementById("tree1"), {
    template: "isla1",
    nodeBinding: {
        field_0: "name",
        field_1: "title",
    }
   
});

    chart1.load(nodes);


var chart2 = new OrgChart(document.getElementById("tree2"), {
    template: "isla2",
    nodeBinding: {
        field_0: "name",
        field_1: "title",
    }
   
});

    chart2.load(nodes);
}