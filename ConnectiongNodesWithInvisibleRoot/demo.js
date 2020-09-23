window.onload = function () {
    OrgChart.templates.hiddenTemplate = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.hiddenTemplate.size = [0, 0];
    OrgChart.templates.hiddenTemplate.node = '';
    OrgChart.templates.hiddenTemplate.plus = '';
    OrgChart.templates.hiddenTemplate.minus = '';

    OrgChart.templates.rootTemplate = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.rootTemplate.link = '';

    var chart = new OrgChart(document.getElementById("tree"), {
      nodeBinding: {
          field_0: "name",
          field_1: "title",
          img_0: "img"
      },
      tags: {
          hiddenRoot: { template: 'hiddenTemplate' },
          root: { template: 'rootTemplate' }
      },
    
  });

  nodes = [
    { id: 1, tags: ['hiddenRoot'], name: "Denny Curtis", title: "CEO" },
          { id: 2, pid: 1, tags: ['root'],  name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
          { id: 3, pid: 1, tags: ['root'], pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
          { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
          { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
          { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
          { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
      ];

      chart.load(nodes);
}