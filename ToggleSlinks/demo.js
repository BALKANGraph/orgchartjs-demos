window.onload = function () {
  OrgChart.slinkTemplates.hiddenSlinks = Object.assign({}, OrgChart.slinkTemplates.orange);
  OrgChart.slinkTemplates.hiddenSlinks.link = '';
  
  OrgChart.slinkTemplates.myTemplate1 = Object.assign({}, OrgChart.slinkTemplates.orange);
  OrgChart.slinkTemplates.myTemplate1.labelPosition = 'start';
        
  OrgChart.slinkTemplates.myTemplate2 = Object.assign({}, OrgChart.slinkTemplates.blue);
  OrgChart.slinkTemplates.myTemplate2.labelPosition = 'end';
        
  OrgChart.slinkTemplates.myTemplate3 = Object.assign({}, OrgChart.slinkTemplates.yellow);

  
  var chart = new OrgChart(document.getElementById("tree"), { 
      nodeBinding: {
          field_0: "id",
          field_1: "pid"
      },
      slinks: [
          {from: 7, to: 1, template: "myTemplate1", label: "start" }, 
          {from: 5, to: 0, template: "myTemplate2" , label: "end" },
          {from: 2, to: 6, template: "myTemplate3"  },
      ]
  });

  var nodes = [
      { id: 0},
      { id: 1, pid: 0 },
      { id: 2, pid: 0 },
      { id: 3, pid: 1 },
      { id: 4, pid: 2 },
      { id: 5, pid: 1 },
      { id: 6, pid: 2 },
      { id: 7, pid: 5 }
  ];

  chart.load(nodes);

  var array = [];
  var labels = [];

  document.querySelector('#orange').addEventListener('click', function(){
      for (i = 0; i < chart.config.slinks.length; i++){
        if (chart.config.slinks[i].template != "myTemplate1"){
          array[i] = chart.config.slinks[i].template;
          labels[i] = chart.config.slinks[i].label;
          chart.config.slinks[i].template = "hiddenSlinks";
          chart.config.slinks[i].label = "";

        }
      }
      chart.draw();
      for (i = 0; i < chart.config.slinks.length; i++){
        if (array[i] == undefined) array[i] = "myTemplate1";
          chart.config.slinks[i].template = array[i];
          chart.config.slinks[i].label = labels[i];
      }
  });

  document.querySelector('#yellow').addEventListener('click', function(){
      for (i = 0; i < chart.config.slinks.length; i++){
        if (chart.config.slinks[i].template != "myTemplate3"){
          array[i] = chart.config.slinks[i].template;
          labels[i] = chart.config.slinks[i].label;
          chart.config.slinks[i].template = "hiddenSlinks";
          chart.config.slinks[i].label = "";
        }
      }
      chart.draw();
      for (i = 0; i < chart.config.slinks.length; i++){
          if (array[i] == undefined) array[i] = "myTemplate3";
          chart.config.slinks[i].template = array[i];
          chart.config.slinks[i].label = labels[i];

      }
  });

  document.querySelector('#blue').addEventListener('click', function(){
      for (i = 0; i < chart.config.slinks.length; i++){
        if (chart.config.slinks[i].template != "myTemplate2"){
          array[i] = chart.config.slinks[i].template;
          labels[i] = chart.config.slinks[i].label;
          chart.config.slinks[i].template = "hiddenSlinks";
          chart.config.slinks[i].label = "";
        } 
      }
      chart.draw();
      for (i = 0; i < chart.config.slinks.length; i++){
          if (array[i] == undefined) array[i] = "myTemplate2";
          chart.config.slinks[i].template = array[i];
          chart.config.slinks[i].label = labels[i];
      }
  });

};