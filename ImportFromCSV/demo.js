
window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
      menu: {
          importCSV: { 
              text: "Import CSV",
              icon: OrgChart.icon.csv(24,24, '#7A7A7A'),
              onClick: function(){ chart.importCSV(); }
          },
          csv: { text: "Export CSV" }
      },
          mouseScrool: OrgChart.action.none,
          nodeBinding: {
              field_0: "id",
              field_1: "pid"
          },
          tags: {
              g: {
                  template: "group"
              }
          },
          nodes: [
              { id: 1 },
              { id: 2, pid: 1, tags: ["g"]},
              { id: 3, pid: 1, tags: ["g"]},
              { id: 4, stpid: 2},
              { id: 5, stpid: 2},
              { id: 6, stpid: 3},
              { id: 7, stpid: 3}
          ]
      });    
};
