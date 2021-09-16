

window.onload = function () {
    OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.myTemplate.size = [250, 20];
    OrgChart.templates.myTemplate.node = '';
    OrgChart.templates.myTemplate.name  = '<text data-width="230" style="font-size: 16px;" fill="blue" x="125" y="15" text-anchor="middle">{val}</text>';
    OrgChart.templates.myTemplate.img_0 = '';

      var chart = new OrgChart(document.getElementById("tree"), {
            mouseScrool: OrgChart.action.none,
            columns: 1,
            nodeBinding: {
                name: "name"
            },
            tags: {
                g: {
                    template: "group"
                },
                "list-item":{
                    template: "myTemplate"
                }
            },
            nodes: [
                { id: 1 },
                { id: 2, pid: 1, tags: ["g"]},
                { id: 3, pid: 1, tags: ["g"]},
                { id: 4, stpid: 2, name: "Name 1", tags: ["list-item"]},
                { id: 5, stpid: 2, name: "Name 2", tags: ["list-item"]},
                { id: 6, stpid: 3, name: "Name 3", tags: ["list-item"]},
                { id: 7, stpid: 3, name: "Name 4", tags: ["list-item"]},
                { id: 8, stpid: 3, name: "Name 5", tags: ["list-item"]}
            ]
        });    
};