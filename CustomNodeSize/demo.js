

window.onload = function () {
    OrgChart.templates.ana.node = '<rect x="0" y="0" height="120" width="250" fill="none" stroke-width="1" stroke="#aeaeae"></rect>';
OrgChart.templates.ana.field_0 = '<text width="230" class="field_0"  style="font-size: 18px;" fill="grey" x="10" y="25" text-anchor="left">{val}</text>';
OrgChart.templates.MyTemplateDep = Object.assign({}, OrgChart.templates.ana);
   OrgChart.templates.MyTemplateDep.size = [250, 120];
OrgChart.templates.MyTemplateDep.node = '<rect x="0" y="60" height="60" width="250" fill="none" stroke-width="1" stroke="#aeaeae" ></rect><line x1="125" y1="0" x2="125" y2="60" stroke="#aeaeae" stroke-width="1px" fill="none"></line>';



  OrgChart.templates.MyTemplateDep.field_0 = '<text width="230" class="field_0"  style="font-size: 18px;" fill="grey" x="10" y="85" text-anchor="left">{val}</text>';


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
   {id: 0, Title: 'CEO'},
   {id: 1, pid: 0, Name: 'Ashley Barnett', Title: 'Department', tags: ["Department"] },
   {id: 2, pid: 0, Name: 'Elliot Patel', Title: 'Alternate Title' },
   {id: 3, pid: 1, Name: 'Elliot Patel', Title: 'Alternate Title' },
   {id: 4, pid: 2, Name: 'Elliot Patel', Title: 'Alternate Title' },
]);
};
