window.onload = function() {
    OrgChart.slinkTemplates.myorange = Object.assign({}, OrgChart.slinkTemplates.orange);
    OrgChart.slinkTemplates.myorange.defs = '';
    OrgChart.slinkTemplates.myorange.link = '<path stroke-dasharray="4, 2" stroke="grey" stroke-width="1" fill="none" d="{d}" />';
    
    OrgChart.slinkTemplates.arrows = Object.assign({}, OrgChart.slinkTemplates.orange);
    OrgChart.slinkTemplates.arrows.defs = 
        '<marker id="arrowStartSlinkOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path fill="#F57C00" d="M 0 0 L 10 5 L 0 10 z" /></marker>'
    
    + '<marker id="arrowEndSlinkOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"> <path fill="#F57C00" d="M 0 0 L 10 5 L 0 10 z" /></marker>';
    
    OrgChart.slinkTemplates.arrows.link = '<path stroke-dasharray="4, 2" marker-start="url(#arrowEndSlinkOrange)" marker-end="url(#arrowStartSlinkOrange)" stroke-linejoin="round" stroke="#F57C00" stroke-width="2" fill="none" d="{d}" />';
    
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
                   {from: 2, to: 3, label: 'text', template: 'arrows'}, 
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
            }