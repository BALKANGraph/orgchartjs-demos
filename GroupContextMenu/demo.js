

window.onload = function () {


    var chart = new OrgChart(document.getElementById("tree"), {
        enableDragDrop: true,
        nodeMouseClick: OrgChart.action.edit,
        nodeMenu: {
            details: { text: "Details" },
            edit: { text: "Edit" },
            add: { text: "Add" },
            remove: { text: "Remove" }
        },
        dragDropMenu: {},
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
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
                groupState: OrgChart.COLLAPSE,

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
            }
        }
    });

    var groupContextMenu = new OrgChart.menuUI();
    groupContextMenu.init(chart);

    chart.on('redraw', function (sender) {
        for (var id in sender.nodes) {
            var node = sender.nodes[id];
            if (node.isGroup) {
                var nodeElement = document.querySelector('[node-id=' + node.id + ']');
                if (nodeElement){
                    nodeElement.addEventListener('contextmenu', function (e) {
                        e.preventDefault();
                        var id = this.getAttribute('node-id');
                        groupContextMenu.show(e.pageX, e.pageY, id, null, {
                            addInGroup: {
                                text: "Add New In Group",
                                icon: OrgChart.icon.add(16, 16, '#ccc'),
                                onClick: function (id) {
                                    var node = sender.getBGNode(id);
                                    var pid = node.bgnodes[0].pid;
                                    chart.addNode({ id: OrgChart._randomId(), pid: pid, tags: node.tags });
                                }
                            }
                        });
                    });
                }
            }
        }

        groupContextMenu.hide();
    });

    chart.on('drop', function (sender, draggedNodeId, droppedNodeId) {
        if (draggedNodeId == 1){
            return false;
        }

        if (droppedNodeId == 4){
            return false;
        }
    });
   

    chart.dragDropMenuUI.on('show', function(sender, args){
        args.menu = {
            addInGroup: { text: "Add in group" },
            addAsChild: { text: "Add as child" }
        }
    });            


    chart.load([
        { id: 1, tags: ["Directors"] },
        { id: 2, tags: ["Directors"] },
        { id: 3, tags: ["Directors"] },

        { id: 4, pid: 1 },

        { id: 5, pid: 1, tags: ["HRs"] },
        { id: 6, pid: 1, tags: ["HRs"] },

        { id: 7, pid: 1 },

        { id: 8, pid: 4, tags: ["Devs"] },
        { id: 9, pid: 4, tags: ["Devs"] },
        { id: 10, pid: 4, tags: ["Devs"] },
        { id: 11, pid: 4, tags: ["Devs"] },

        { id: 12, pid: 7, tags: ["Sales"] },
        { id: 13, pid: 7, tags: ["Sales"] }
    ]);
};
