

window.onload = function () {

    OrgChart.templates.group_grey.columns = 1;

      var chart = new OrgChart(document.getElementById("tree"), {
        mouseScrool: OrgChart.action.none,
            template: "olivia",
            nodeMouseClickBehaviour: OrgChart.action.edit,
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
                },
                Devs: {
                    group: true,
                    groupName: "Dev Team",
                    groupState: OrgChart.EXPAND,
                    template: "group_grey"
                }
                
            },

            nodes: [
                { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
                { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },

                { id: 3, pid: 1, name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
                { id: 4, pid: 2, tags: ["Devs"], name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" },
                { id: 5, pid: 2, tags: ["Devs"],name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/7.jpg" },

              { id: 6, pid: 3, tags: ["HRs"], name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/6.jpg" },
              { id: 7, pid: 3, tags: ["HRs"], name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/8.jpg" }
            ]
        });    
};
