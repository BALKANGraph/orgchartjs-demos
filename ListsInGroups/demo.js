
window.onload = function () {
    OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.myTemplate.size = [250, 20];
    OrgChart.templates.myTemplate.node = '';
    OrgChart.templates.myTemplate.field_0  = '<text width="230" style="font-size: 16px;" fill="blue" x="125" y="15" text-anchor="middle">{val}</text>';
    OrgChart.templates.myTemplate.field_1  = '';
    OrgChart.templates.myTemplate.img_0 = '';
    OrgChart.templates.group_grey.groupName = '<text width="{elastic_width}" style="font-size: 24px;" fill="#F57C00" x="135" y="40" text-anchor="middle">{val}</text>';
    
    OrgChart.templates.group_grey.groupNodesSeparation = 0;
    
    OrgChart.MAXIMIZE = '';
    
    OrgChart.MINIMIZE = '';
    
    OrgChart.templates.MyCustomTemplate = Object.assign({}, OrgChart.templates.myTemplate);
    OrgChart.templates.MyCustomTemplate.field_0  = '<text width="230" style="font-size: 16px;" fill="#000" x="125" y="15" text-anchor="middle">{val}</text>';
    
    OrgChart.templates.group_grey.columns = 1;
      var chart = new OrgChart(document.getElementById("tree"), {
            template: "myTemplate",
            nodeBinding: {
                field_0: "name",
                field_1: "title",
            },
            tags: {
                Directors: {
                    group: true,
                    groupName: "Directors",
                    groupState: OrgChart.EXPAND,
                    template: "group_grey"
                },
                HRs: {
                    group: true,
                    groupName: "HR Team",
                    groupState: OrgChart.EXPAND,
    
                    template: "group_grey"
                },
                Sales: {
                    group: true,
                    groupName: "Sales Team",
                    groupState: OrgChart.EXPAND,
                    template: "group_grey"
                },
                Devs: {
                    group: true,
                    groupName: "Dev Team",
                    groupState: OrgChart.EXPAND,
                    template: "group_grey"
                },
                "MyCustomTemplate":{
                    template: "MyCustomTemplate"
                }
            },
            nodes: [
                { id: 0, tags: ["Directors", "MyCustomTemplate"], name: "Skylar Parrish", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
    
                { id: 1, tags: ["Directors"], name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
                { id: 2, tags: ["Directors"], name: "Marley Wilson", title: "Director", img: "https://cdn.balkan.app/shared/3.jpg" },
                { id: 3, tags: ["Directors"], name: "Bennie Shelton", title: "Shareholder", img: "https://cdn.balkan.app/shared/4.jpg" },
    
    
                { id: 5, pid: 1, tags: ["HRs"], name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
                { id: 6, pid: 1, tags: ["HRs"], name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" },
    
    
                { id: 8, pid: 1, tags: ["Devs"], name: "Jordan Harris", title: "JS Developer", img: "https://cdn.balkan.app/shared/6.jpg" },
                { id: 9, pid: 1, tags: ["Devs"], name: "Will Woods", title: "JS Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
                { id: 10, pid: 1, tags: ["Devs"], name: "Skylar Parrish", title: "node.js Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
                { id: 11, pid: 1, tags: ["Devs"], name: "Ashton Koch", title: "C# Developer", img: "https://cdn.balkan.app/shared/9.jpg" },
    
                { id: 12, pid: 1, tags: ["Sales"], name: "Bret Fraser", title: "Sales", img: "https://cdn.balkan.app/shared/13.jpg" },
                { id: 13, pid: 1, tags: ["Sales"], name: "Steff Haley", title: "Sales", img: "https://cdn.balkan.app/shared/14.jpg" }
            ]
      });
};