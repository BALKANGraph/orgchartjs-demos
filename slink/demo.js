OrgChart.slinkTemplates.myorange = Object.assign({}, OrgChart.slinkTemplates.orange);
OrgChart.slinkTemplates.myorange.defs = '';
OrgChart.slinkTemplates.myorange.link = '<path stroke-dasharray="4, 2" stroke="grey" stroke-width="1" fill="none" d="{d}" />'

       var chart = new OrgChart(document.getElementById("tree"), {
       mouseScrool: OrgChart.action.none,
               nodeMenu:{
               edit: {text:"Edit"},
               add: {text:"Add"},
               remove: {text:"Remove"}
           },
           
           nodeBinding: {
               field_0: "id",
               field_1: "pid"
           },

           slinks: [
               {from: 4, to: 1, label: 'text', template: 'myorange'}, 
               {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' },
           ]   
       });  

       var nodes = [
               { id: 1},
               { id: 2, pid: 1 },
               { id: 3, pid: 1 },
               { id: 4, pid: 2 },
               { id: 5, pid: 2 },
               { id: 6, pid: 3 }

           ];
       
       chart.load(nodes);