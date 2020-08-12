OrgChart.templates.myInvisibleGroup = Object.assign({}, OrgChart.templates.group);
OrgChart.templates.myInvisibleGroup.node = "";

OrgChart.templates.newTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.newTemplate.size = [250, 60];
OrgChart.templates.newTemplate.node = '<rect x="0" y="0" height="60" width="250" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
OrgChart.templates.newTemplate.field_0 = '<text width="230" style="font-size: 18px;" fill="#039BE5" x="125" y="35" text-anchor="middle">{val}</text>';

var chart = new OrgChart(document.getElementById("tree"), {
    enableDragDrop: true,
    nodeBinding: {
        field_0: "name"
    },
    tags: { 
        "invisible": {
            subTreeConfig: {	
                columns: 1
            },
            template: "myInvisibleGroup"
        },
        newNode : {
            template: "newTemplate"
        }
    },
    nodes: [
        { id: "0", tags: ["invisible"]},
        { id: 1, stpid: "0", name: "Amber McKenzie" },
        { id: 2, pid: 1, name: "Ava Field" },
        { id: 3, pid: 1, name: "Peter Stevens" },
        { id: 4, tags: ["invisible"]},
        { id: 5, stpid: 4, tags: ["newNode"], name: "new node 1"},
        { id: 6, stpid: 4, tags: ["newNode"], name: "new node 2"},
        { id: 7, stpid: 4, tags: ["newNode"], name: "new node 3"}
    ]
});