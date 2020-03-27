window.onload = function () {

    OrgChart.slinkTemplates.blue.link = '<path class="path1"  stroke-dasharray="4, 2" marker-start="url(#dotSlinkBlue)" marker-end="url(#arrowSlinkBlue)" stroke-linejoin="round" stroke="#039BE5" stroke-width="2" fill="none" d="{d}" />';
 
 
    OrgChart.templates.ula.link = '<path stroke-linejoin="round" stroke="#AFD4FE" stroke-width="10" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>' +
     '<path class="path" stroke-width="4" fill="none" stroke="#ffffff" stroke-dasharray="10"  d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>';
         var chart = new OrgChart(document.getElementById("tree"), {
             template: "ula",
             nodes: [{id: 0}, {id: 1, pid: 0}, {id: 2, pid: 0}, {id: 3, pid: 1}, {id: 4, pid: 1}, {id: 5, pid: 2}, {id: 6, pid: 2}, {id: 7, pid: 4}, {id: 8, pid: 6}],
 
             slinks: [
                 {from: 0, to: 1, template: 'blue'}, {from: 5, to: 7, template: 'blue'}
             ]
         });
     
   }