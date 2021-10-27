window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        enableDragDrop: true,
        nodeMenu: {
            addParent: {
                text: "Add Root", icon: OrgChart.icon.add(24, 24, '#ccc'), onClick: function (nodeId) {
                    var id = OrgChart.randomId();

                    var mainNode = chart.get(nodeId);
                    mainNode.pid = id;

                    chart.add({
                        id: id,
                        pid: "",
                        name: "Added Parent"
                    })
                    .update(mainNode)
                    .changeRoots(mainNode.id, [id]);
                }
            },
            add: { text: "Add Child" },
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title"
        },

        nodes: [
            { id: 1, name: "Denny Curtis", title: "CEO" },
        ]    
    });
};