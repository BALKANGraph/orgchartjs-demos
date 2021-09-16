window.onload = function () {
        
 OrgChart.templates.ana.defs = '<marker id="arrowdown" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path fill="#aeaeae" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="arrowup" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"> <path fill="#aeaeae" d="M 0 0 L 10 5 L 0 10 z" /></marker>';
 OrgChart.templates.ana.link = '<path marker-start="url(#arrowup)" marker-end="url(#arrowdown)"   stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';
 
 OrgChart.templates.ana.link_field_0 = '<text text-anchor="middle" fill="#039BE5" data-width="290" x="0" y="0" style="font-size:12px;">{val}</text>';
 
 OrgChart.templates.ana.plus = ''; 
 OrgChart.templates.ana.minus = '';

 
     var chart = new OrgChart(document.getElementById("tree"), {
         nodes: [
         { id: 1 },
         { id: 2, pid: 1 },
         { id: 3, pid: 1 }
     ]    
   });
 };
 