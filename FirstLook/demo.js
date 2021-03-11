

window.onload = function () {
    OrgChart.templates.ana.plus = '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
        + '<text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{collapsed-children-count}</text>';

    OrgChart.templates.invisibleGroup.padding = [20, 0, 0, 0];

    var chart = new OrgChart(document.getElementById("tree"), {
        template: "ana",
        enableDragDrop: true,
        assistantSeparation: 170,
        menu: {
            pdfPreview: {
                text: "Export to PDF",
                icon: OrgChart.icon.pdf(24, 24, '#7A7A7A'),
                onClick: preview
            },
            csv: { text: "Save as CSV" }
        },
        nodeMenu: {
            details: { text: "Details" },
            edit: { text: "Edit" },
            add: { text: "Add" },
            remove: { text: "Remove" }
        },
        align: OrgChart.ORIENTATION,
        toolbar: {
            fullScreen: true,
            zoom: true,
            fit: true,
            expandAll: true
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        tags: {
            "top-management": {
                template: "invisibleGroup",
                subTreeConfig: {
                    orientation: OrgChart.orientation.bottom,
                    collapse: {
                        level: 1
                    }
                }
            },
            "it-team": {
                subTreeConfig: {
                    layout: OrgChart.mixed,
                    collapse: {
                        level: 1
                    }
                },
            },
            "hr-team": {
                subTreeConfig: {
                    layout: OrgChart.treeRightOffset,
                    collapse: {
                        level: 1
                    }
                },
            },
            "sales-team": {
                subTreeConfig: {
                    layout: OrgChart.treeLeftOffset,
                    collapse: {
                        level: 1
                    }
                },
            },
            "seo-menu": {
                nodeMenu: {
                    addSharholder: { text: "Add new sharholder", icon: OrgChart.icon.add(24, 24, "#7A7A7A"), onClick: addSharholder },
                    addDepartment: { text: "Add new department", icon: OrgChart.icon.add(24, 24, "#7A7A7A"), onClick: addDepartment },
                    addAssistant: { text: "Add new assitsant", icon: OrgChart.icon.add(24, 24, "#7A7A7A"), onClick: addAssistant },
                    edit: { text: "Edit" },
                    details: { text: "Details" },
                }
            },
            "menu-without-add": {
                nodeMenu: {
                    details: { text: "Details" },
                    edit: { text: "Edit" },
                    remove: { text: "Remove" }
                }
            },
            "department": {
                template: "group",
                nodeMenu: {
                    addManager: { text: "Add new manager", icon: OrgChart.icon.add(24, 24, "#7A7A7A"), onClick: addManager },
                    remove: { text: "Remove department" },
                    edit: { text: "Edit department" },
                    nodePdfPreview: { text: "Export department to PDF", icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"), onClick: nodePdfPreview }
                }
            }
        }
    });

    chart.on("added", function (sender, id) {
        sender.editUI.show(id);
    });

    chart.on('drop', function (sender, draggedNodeId, droppedNodeId) {
        var draggedNode = sender.getNode(draggedNodeId);
        var droppedNode = sender.getNode(droppedNodeId);

        if (droppedNode.tags.indexOf("department") != -1 && draggedNode.tags.indexOf("department") == -1) {
            var draggedNodeData = sender.get(draggedNode.id);
            draggedNodeData.pid = null;
            draggedNodeData.stpid = droppedNode.id;
            sender.updateNode(draggedNodeData);
            return false;
        }
    });

    chart.editUI.on('field', function (sender, args) {
        var isDeprtment = sender.node.tags.indexOf("department") != -1;
        var deprtmentFileds = ["name"];

        if (isDeprtment && deprtmentFileds.indexOf(args.name) == -1) {
            return false;
        }
    });

    chart.on('exportstart', function (sender, args) {
        args.styles = document.getElementById('myStyles').outerHTML;
    });

    chart.load([
        { id: "top-management", tags: ["top-management"] },
        { id: "hr-team", pid: "top-management", tags: ["hr-team", "department"], name: "HR department" },
        { id: "it-team", pid: "top-management", tags: ["it-team", "department"], name: "IT department" },
        { id: "sales-team", pid: "top-management", tags: ["sales-team", "department"], name: "Sales department" },

        { id: 1, stpid: "top-management", name: "Nicky Phillips", title: "CEO", img: "https://cdn.balkan.app/shared/anim/1.gif", tags: ["seo-menu"] },
        { id: 2, pid: 1, name: "Rowan Hall", title: "Shareholder (51%)", img: "https://cdn.balkan.app/shared/2.jpg", tags: ["menu-without-add"] },
        { id: 3, pid: 1, name: "Danni Anderson", title: "Shareholder (49%)", img: "https://cdn.balkan.app/shared/3.jpg", tags: ["menu-without-add"] },

        { id: 4, stpid: "hr-team", name: "Jordan Harris", title: "HR Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 5, pid: 4, name: "Emerson Adams", title: "Senior HR", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 6, pid: 4, name: "Kai Morgan", title: "Junior HR", img: "https://cdn.balkan.app/shared/6.jpg" },

        { id: 7, stpid: "it-team", name: "Cory Robbins", title: "Core Team Lead", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 8, pid: 7, name: "Billie Roach", title: "Backend Senior Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
        { id: 9, pid: 7, name: "Maddox Hood", title: "C# Developer", img: "https://cdn.balkan.app/shared/9.jpg" },
        { id: 10, pid: 7, name: "Sam Tyson", title: "Backend Junior Developer", img: "https://cdn.balkan.app/shared/10.jpg" },

        { id: 11, stpid: "it-team", name: "Lynn Fleming", title: "UI Team Lead", img: "https://cdn.balkan.app/shared/11.jpg" },
        { id: 12, pid: 11, name: "Jo Baker", title: "JS Developer", img: "https://cdn.balkan.app/shared/12.jpg" },
        { id: 13, pid: 11, name: "Emerson Lewis", title: "Graphic Designer", img: "https://cdn.balkan.app/shared/13.jpg" },
        { id: 14, pid: 11, name: "Haiden Atkinson", title: "UX Expert", img: "https://cdn.balkan.app/shared/14.jpg" },
        { id: 15, stpid: "sales-team", name: "Tyler Chavez", title: "Sales Manager", img: "https://cdn.balkan.app/shared/15.jpg" },
        { id: 16, pid: 15, name: "Raylee Allen", title: "Sales", img: "https://cdn.balkan.app/shared/16.jpg" },
        { id: 17, pid: 15, name: "Kris Horne", title: "Sales Guru", img: "https://cdn.balkan.app/shared/8.jpg" },
        { id: 18, pid: "top-management", name: "Leslie Mcclain", title: "Personal assistant", img: "https://cdn.balkan.app/shared/9.jpg", tags: ["assistant", "menu-without-add"] }
    ]);

    function preview() {
        OrgChart.pdfPrevUI.show(chart, {
            format: 'A4'
        });
    }

    function nodePdfPreview(nodeId) {
        OrgChart.pdfPrevUI.show(chart, {
            format: 'A4',
            nodeId: nodeId
        });
    }

    function addSharholder(nodeId) {
        chart.addNode({ id: OrgChart.randomId(), pid: nodeId, tags: ["menu-without-add"] });
    }

    function addAssistant(nodeId) {
        var node = chart.getNode(nodeId);
        var data = { id: OrgChart.randomId(), pid: node.stParent.id, tags: ["assistant"] };
        chart.addNode(data);
    }


    function addDepartment(nodeId) {
        var node = chart.getNode(nodeId);
        var data = { id: OrgChart.randomId(), pid: node.stParent.id, tags: ["department"] };
        chart.addNode(data);
    }

    function addManager(nodeId) {
        chart.addNode({ id: OrgChart.randomId(), stpid: nodeId });
    }
};
