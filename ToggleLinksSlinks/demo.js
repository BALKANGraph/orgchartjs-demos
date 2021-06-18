window.onload = function () {
    OrgChart.templates.hiddenLinks = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.hiddenLinks.link = '';

    OrgChart.slinkTemplates.hiddenSlinks = Object.assign({}, OrgChart.slinkTemplates.orange);
    OrgChart.slinkTemplates.hiddenSlinks.link = '';

    var chart = new OrgChart(document.getElementById("tree"), { 
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        },
        slinks: [
            {from: 7, to: 1, template: "hiddenSlinks" }, 
            {from: 5, to: 0, template: "hiddenSlinks"  },
            {from: 2, to: 6, template: "hiddenSlinks"  },
        ]
    });

    chart.load([
        { id: 0},
        { id: 1, pid: 0 },
        { id: 2, pid: 0 },
        { id: 3, pid: 1 },
        { id: 4, pid: 2 },
        { id: 5, pid: 1 },
        { id: 6, pid: 2 },
        { id: 7, pid: 5 }
    ]);

    document.querySelector('#btn').addEventListener('click', function(){

      if (chart.config.template == "ana") {
        chart.config.template = "hiddenLinks";
        for (i = 0; i < chart.config.slinks.length; i++){
          chart.config.slinks[i].template = "orange";
        }
        chart.draw();
      }
      else {
        chart.config.template = "ana";
        for (i = 0; i < chart.config.slinks.length; i++){
          chart.config.slinks[i].template = "hiddenSlinks";
        }
        chart.draw();
      }
    });

};