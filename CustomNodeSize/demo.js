

window.onload = function () {
    OrgChart.templates.ana.node = '<rect x="0" y="0" height="120" width="250" fill="none" stroke-width="1" stroke="#aeaeae"></rect>';
OrgChart.templates.ana.field_0 = '<text width="230" class="field_0"  style="font-size: 18px;" fill="grey" x="10" y="25" text-anchor="left">{val}</text>',
OrgChart.templates.MyTemplateDep = Object.assign({}, OrgChart.templates.ana);
   OrgChart.templates.MyTemplateDep.size = [250, 60];
OrgChart.templates.MyTemplateDep.node = '<rect x="0" y="0" height="60" width="250" fill="none" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';


var chart = new OrgChart(document.getElementById("tree"), {

    tags: {
         Department: {
             template: "MyTemplateDep"
         }
     },     
   nodeBinding:{
       field_0: 'Title',
   }
});

chart.load([
   {id: 0, Title: 'Department', tags: ["Department"] },
   {id: 1, pid: 0, Name: 'Ashley Barnett', Title: 'CEO'},
   {id: 2, pid: 0, Name: 'Elliot Patel', Title: 'Alternate Title' }
]);
};
