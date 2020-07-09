window.onload = function () {
        
    OrgChart.templates.mila.defs = '<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path fill="#aeaeae" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#039BE5" /></marker>';
 OrgChart.templates.mila.link = '<path marker-start="url(#dotBlue)" marker-end="url(#arrow)"   stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';
 
 OrgChart.templates.mila.link_field_0 = '<text text-anchor="middle" fill="#039BE5" width="290" x="0" y="0" style="font-size:12px;">{val}</text>';
 
 
     var chart = new OrgChart(document.getElementById("tree"), {
         template: "mila",
         nodeBinding: {
             field_0: "name",
             field_1: "title",
             img_0: "img"
         },
         linkBinding: {
             link_field_0: "createdAt"
         },
         nodes: [
         { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
         { id: 2, pid: 1, createdAt: "Since 08/08/2018", name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
         { id: 3, pid: 1, createdAt: "Since 05/04/2018", name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" }
     ]    
   });
 };
 