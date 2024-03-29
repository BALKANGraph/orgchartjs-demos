window.onload = function () {
    OrgChart.templates.noMenuTemplate = Object.assign({}, OrgChart.templates.olivia);
    OrgChart.templates.noMenuTemplate.nodeMenuButton = '';
    OrgChart.templates.subLevel.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{rounded}" />';

    var chart = new OrgChart(document.getElementById("tree"), {
        template: 'olivia',
        mode: 'dark',
        nodeBinding: {
            field_0: "subLevel",
            field_1: "id"
        },
        nodeMenu: {
            subLevels0: { text: "Move to sub level 0", icon: OrgChart.icon.details(24, 24, "#7A7A7A"), onClick: function (nodeId) { chart._get(nodeId).tags = ["sub level 0"]; chart.draw(); } },
            subLevels1: { text: "Move to sub level 1", icon: OrgChart.icon.details(24, 24, "#7A7A7A"), onClick: function (nodeId) { chart._get(nodeId).tags = ["sub level 1"]; chart.draw(); } },
            subLevels2: { text: "Move to sub level 2", icon: OrgChart.icon.details(24, 24, "#7A7A7A"), onClick: function (nodeId) { chart._get(nodeId).tags = ["sub level 2"]; chart.draw(); } },
            subLevels3: { text: "Move to sub level 3", icon: OrgChart.icon.details(24, 24, "#7A7A7A"), onClick: function (nodeId) { chart._get(nodeId).tags = ["sub level 3"]; chart.draw(); } }
        },
        tags: {
            "sub level 0": {
                subLevels: 0,
            },
            "sub level 1": {
                subLevels: 1
            },
            "sub level 2": {
                subLevels: 2
            },
            "sub level 3": {
                subLevels: 3
            },
            "no menu": {
                template: "noMenuTemplate"
            }
        },

    });

    var nodes = [
        { id: 1, tags: ["sub level 0", "no menu"] },
        { id: 2, pid: 1, tags: ["sub level 0"] },
        { id: 3, pid: 1, tags: ["sub level 1"] },
        { id: 4, pid: 1, tags: ["sub level 2"] },
        { id: 5, pid: 1, tags: ["sub level 3"] }

    ];

    chart.on('field', function (sender, args) {
        if (args.name == "subLevel") {
            var node = sender.getNode(args.node.id);
            if (node.tags.length) {
                args.value = node.tags[0];
            }
        }
    });


    chart.load(nodes);
};