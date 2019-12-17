OrgChart.MAXIMIZE = "";
OrgChart.MINIMIZE = "";

var chart = new OrgChart(document.getElementById("tree"), {
mouseScrool: OrgChart.action.none,
template: "olivia",

nodeBinding: {
   field_0: "name",
   field_1: "title",
   img_0: "img"
},
tags: {
   HRs: {
       group: true,
       groupName: "HR Team",
       groupState: OrgChart.EXPAND,

       template: "group_grey"
   }
},

nodes: [
   { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
   { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },

   { id: 3, pid: 1, tags: ["HRs"], name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
   { id: 4, pid: 1, tags: ["HRs"], name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" }
]
});    