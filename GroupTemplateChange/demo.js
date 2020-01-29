

window.onload = function () {

    OrgChart.templates.group_grey_new = Object.assign({}, OrgChart.templates.group_grey);
  
    OrgChart.templates.group_grey_new.node = '<rect rx="5" x="0" y="0" height="{h}" width="{w}" fill="url(#{randId})" stroke-width="1" stroke="#aeaeae"></rect>';
  
     
     var chart = new OrgChart(document.getElementById("tree"), {
          template: "luba",
  
          nodeBinding: {
              field_0: "name",
              field_1: "title",
              img_0: "img"
          },
          tags: {
              Directors: {
                  group: true,
                  groupName: "Directors",
                  groupState: OrgChart.EXPAND,
                  template: "group_grey_new"
              },
              HRs: {
                  group: true,
                  groupName: "HR Team",
                  groupState: OrgChart.COLLAPSE,
  
                  template: "group_grey_new"
              },
  
              Devs: {
                  group: true,
                  groupName: "Dev Team",
                  groupState: OrgChart.EXPAND,
                  template: "group_grey_new"
              }
          },
          nodes: [
              { id: 1, tags: ["Directors"], name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
              { id: 2, tags: ["Directors"], name: "Marley Wilson", title: "Director", img: "https://cdn.balkan.app/shared/3.jpg" },
              { id: 3, tags: ["Directors"], name: "Bennie Shelton", title: "Shareholder", img: "https://cdn.balkan.app/shared/4.jpg" },
  
              { id: 4, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },
  
              { id: 5, pid: 1, tags: ["HRs"], name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
              { id: 6, pid: 1, tags: ["HRs"], name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" },
  
              { id: 7, pid: 1, name: "Skye Terrell", title: "Manager", img: "https://cdn.balkan.app/shared/12.jpg" },
  
              { id: 8, pid: 4, tags: ["Devs"], name: "Jordan Harris", title: "JS Developer", img: "https://cdn.balkan.app/shared/6.jpg" },
              { id: 9, pid: 4, tags: ["Devs"], name: "Will Woods", title: "JS Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
              { id: 10, pid: 4, tags: ["Devs"], name: "Skylar Parrish", title: "node.js Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
              { id: 11, pid: 4, tags: ["Devs"], name: "Ashton Koch", title: "C# Developer", img: "https://cdn.balkan.app/shared/9.jpg" }
          ]
      });
};
