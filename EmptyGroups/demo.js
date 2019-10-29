
window.onload = function () {
    OrgChart.REMOVE_GROUP_IF_HAS_ONE_NODE = false;
    
    OrgChart.templates.empty = Object.assign({}, OrgChart.templates.base);
    OrgChart.templates.empty.size = [210, 40];
    OrgChart.templates.empty.node = '';
    OrgChart.templates.empty.plus = '';
    OrgChart.templates.empty.minus = '';
    
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "olivia",
        enableDragDrop: true,
        nodeMouseClick: OrgChart.action.edit,
        nodeMenu: {
            details: { text: "Details" },
            edit: { text: "Edit" },
            add: { text: "Add" },
            remove: { text: "Remove" }
        },
        dragDropMenu: {
            addInGroup: { text: "Add in group" },
            addAsChild: { text: "Add as child" }
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        tags: {
            empty: {
              template: 'empty'
            },
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
    
    chart.on('drop', function(sender, draggedNodeId, droppedNodeId){
      var draggedNode = sender.getBGNode(draggedNodeId);
      var droppedNode = sender.getBGNode(droppedNodeId);
      
      if (droppedNode.isGroup){
        if (droppedNode.bgnodes.length == 1 && droppedNode.bgnodes[0].templateName == 'empty'){
        	sender.remove(droppedNode.bgnodes[0].id);
        }
      }
      
      if (draggedNode.isChildOfGroup){
      	var groupNode = sender.getBGNode(draggedNode._groupParentNodeId);
        if (groupNode.bgnodes.length == 1){
        sender.add({id: OrgChart._guid(), pid: droppedNode.pid, tags: [draggedNode._groupParentNodeId, 'empty']})
        }
      }
    });
    
    chart.load([
            { id: 1, tags: ["Directors"], name: "Billy Moore", title: "CEO", img: "https://balkangraph.com/js/img/2.jpg" },
            { id: 2, tags: ["Directors"], name: "Marley Wilson", title: "Director", img: "https://balkangraph.com/js/img/3.jpg" },
            { id: 3, tags: ["Directors"], name: "Bennie Shelton", title: "Shareholder", img: "https://balkangraph.com/js/img/4.jpg" },

            { id: 4, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://balkangraph.com/js/img/5.jpg" },

            { id: 5, pid: 1, tags: ["HRs"], name: "Glenn Bell", title: "HR", img: "https://balkangraph.com/js/img/10.jpg" },
            { id: 6, pid: 1, tags: ["HRs"], name: "Blair Francis", title: "HR", img: "https://balkangraph.com/js/img/11.jpg" },

            { id: 7, pid: 1, name: "Skye Terrell", title: "Manager", img: "https://balkangraph.com/js/img/12.jpg" },

            { id: 8, pid: 4, tags: ["Devs"], name: "Jordan Harris", title: "JS Developer", img: "https://balkangraph.com/js/img/6.jpg" },
            { id: 9, pid: 4, tags: ["Devs"], name: "Will Woods", title: "JS Developer", img: "https://balkangraph.com/js/img/7.jpg" },
            { id: 10, pid: 4, tags: ["Devs"], name: "Skylar Parrish", title: "node.js Developer", img: "https://balkangraph.com/js/img/8.jpg" },
            { id: 11, pid: 4, tags: ["Devs"], name: "Ashton Koch", title: "C# Developer", img: "https://balkangraph.com/js/img/9.jpg" },

            { id: 12, pid: 7, tags: ["empty", "Sales"] }
        ])
};
