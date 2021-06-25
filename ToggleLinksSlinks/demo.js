window.onload = function () {
  OrgChart.templates.hiddenLinks = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.hiddenLinks.link = '';

  OrgChart.slinkTemplates.hiddenSlinks = Object.assign({}, OrgChart.slinkTemplates.orange);
  OrgChart.slinkTemplates.hiddenSlinks.link = '';
  
  //centering the slinks:
  
  OrgChart.templates.hiddenLinks.expandCollapseSize = 0;
  OrgChart.templates.hiddenLinks.plus = '<circle cx="0" cy="0" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
    + '<line x1="-11" y1="0" x2="11" y2="0" stroke-width="1" stroke="#aeaeae"></line>'
    + '<line x1="" y1="-11" x2="" y2="11" stroke-width="1" stroke="#aeaeae"></line>';
  OrgChart.templates.hiddenLinks.minus = '<circle cx="0" cy="0" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
    + '<line x1="-11" y1="0" x2="11" y2="0" stroke-width="1" stroke="#aeaeae"></line>';

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