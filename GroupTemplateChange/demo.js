window.onload = function () {
    OrgChart.templates.myGroupTemplate = Object.assign({}, OrgChart.templates.group);
    OrgChart.templates.myGroupTemplate.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="none" stroke-width="1" stroke="#aeaeae"></rect>';

      var chart = new OrgChart(document.getElementById("tree"), {
            mouseScrool: OrgChart.action.none,
            orinteation: OrgChart.orientation.right_top,
            columns: 1,
            nodeBinding: {
                field_0: "id",
                field_1: "pid"
            },
            tags: {
                g: {
                    template: "myGroupTemplate"
                }
            },
            nodes: [
                { id: 1 },
                { id: 2, pid: 1, tags: ["g"]},
                { id: 3, pid: 1, tags: ["g"]},
                { id: 4, stpid: 2},
                { id: 5, stpid: 2},
                { id: 6, stpid: 3},
                { id: 7, stpid: 3}
            ]
        });    
};