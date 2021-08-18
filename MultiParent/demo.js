OrgChart.CLINK_CURVE = 0;
OrgChart.templates.green = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.green.size = [250, 100];
OrgChart.templates.green.plus = "";
OrgChart.templates.green.minus = "";
OrgChart.templates.green.expandCollapseSize = 0;
OrgChart.templates.green.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#e0ecdb" stroke-width="3" stroke="#aeaeae" rx="1" ry="1"></rect>';
OrgChart.templates.green.field_0 = '<text width="230" style="font-size: 20px;" font-weight="bold" fill="#6c7a69" x="25" y="45" text-anchor="start">{val}</text>';
OrgChart.templates.green.field_1 = '<text width="230" style="font-size: 18px;" fill="#6c7a69" x="25" y="80" text-anchor="start">{val}</text>';
OrgChart.templates.green.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="3px" fill="none" d="{rounded}" />';

OrgChart.templates.red = Object.assign({}, OrgChart.templates.green);
OrgChart.templates.red.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#fc2532" stroke-width="3" stroke="#aeaeae" rx="1" ry="1"></rect>';
OrgChart.templates.red.field_0 = '<text width="230" style="font-size: 20px;" font-weight="bold" fill="#e0ecdb" x="25" y="45" text-anchor="start">{val}</text>';
OrgChart.templates.red.field_1 = '<text width="230" style="font-size: 18px;" fill="#e0ecdb" x="25" y="80" text-anchor="start">{val}</text>';

OrgChart.templates.noLink = Object.assign({}, OrgChart.templates.green);
OrgChart.templates.noLink.link = "";

OrgChart.templates.subLevel.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="3px" fill="none" d="{rounded}" />';

OrgChart.clinkTemplates.simple = Object.assign({}, OrgChart.clinkTemplates.orange);
OrgChart.clinkTemplates.simple.link = '<path stroke="#aeaeae" stroke-width="3" fill="none" d="{d}" />';


var chart = new OrgChart(document.getElementById("tree"), {
   template: "green",
   nodeBinding: {
       field_0: "name",
       field_1: "title",
       img_0: "img"
   },
   tags: {
       "subLevels1": {
           subLevels: 1
       },
       "red": {
           template: "red"
       },
       "noLink": {
           template: "noLink"
       }
   },
   clinks: [
       {from: 5, to: 1, template: "simple" }, 
        {from: 5, to: 9, template: "simple"  },
        {from: 4, to: 6, template: "simple"  },
        {from: 4, to: 7, template: "simple"  },
    ]
});

var nodes = [
   { id: 1, name: "Denny Curtis", title: "President", tags: ["red"] },
   { id: 2, name: "Nicky Phillips", title: "President", tags: ["red"] },
   { id: 3, name: "Ashley Barnett", title: "President" },
   { id: 4, pid: 1, name: "Caden Ellison", title: "Vice President Marketing" },
   { id: 5, pid: 2, name: "Elliot Patel", title: "Vice President Sales" },
   { id: 6, pid: 4, name: "Lynn Hussain", title: "Marketing Manager", tags: ["noLink"] },
   { id: 7, pid: 4, name: "Tanner May", title: "Marketing Manager", tags: ["noLink"] },
   { id: 8, pid: 5, name: "Fran Parsons", title: "Sales Manager" },
   { id: 9, pid: 3, name: "Cory Robbins", title: "Sales Manager", tags: ["subLevels1"] }
];


chart.load(nodes);

