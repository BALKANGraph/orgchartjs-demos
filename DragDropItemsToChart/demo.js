OrgChart.templates.myInvisibleGroup = Object.assign({}, OrgChart.templates.group);
OrgChart.templates.myInvisibleGroup.node = "";

OrgChart.templates.floatingTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.floatingTemplate.size = [250, 60];
OrgChart.templates.floatingTemplate.node = '<rect x="0" y="0" height="60" width="250" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
OrgChart.templates.floatingTemplate.field_0 = '<text width="230" style="font-size: 18px;" fill="#039BE5" x="125" y="35" text-anchor="middle">{val}</text>';

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
        floatingNode : {
            template: "floatingTemplate"
        }
    },
    nodes: [
        { id: "0", tags: ["invisible"]},
        { id: 1, stpid: "0", name: "Amber McKenzie" },
        { id: 2, pid: 1, name: "Ava Field" },
        { id: 3, pid: 1, name: "Peter Stevens" },
        { id: 4, tags: ["invisible"]},
        { id: 5, stpid: 4, tags: ["floatingNode"], name: "floating topic"},
        { id: 6, stpid: 4, tags: ["floatingNode"], name: "floating topic"},
        { id: 7, stpid: 4, tags: ["floatingNode"], name: "floating topic"}
    ]
});

nodes = [
        { id: "0", tags: ["invisible"]},
        { id: 1, stpid: "0", name: "Amber McKenzie" },
        { id: 2, pid: 1, name: "Ava Field" },
        { id: 3, pid: 1, name: "Peter Stevens" },
        { id: 4, tags: ["invisible"]},
        { id: 5, stpid: 4, tags: ["floatingNode"], name: "floating topic"},
        { id: 6, stpid: 4, tags: ["floatingNode"], name: "floating topic"},
        { id: 7, stpid: 4, tags: ["floatingNode"], name: "floating topic"}
    ];

chart.on('drop', function (sender, draggedNodeId, droppedNodeId) {
    var nodeMoved = nodes.filter(n => {
        return n.id === draggedNodeId
    });
    nodeMoved[0].tags.pop();
});

    chart.load(nodes);