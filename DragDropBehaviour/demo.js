

window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        enableDragDrop: true,
        dragDropMenu: {    
            addInGroup: { text: "Add in group" },
            addAsChild: { text: "Add as child" }         
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title"
        }
    });

    chart.dragDropMenuUI.on('show', function(sender, args){
        var node = chart.getBGNode(args.firstNodeId);

        if (node.childrenIds.length > 0){
            args.menu.addAsChildDontMoveChildren = { icon: OrgChart.icon.addAsChild(24,24, '#ccc'), text: "Add as child don't move children", onClick: function(sourceNodeId, targetNodeId){
                var sourceNode = chart.getBGNode(sourceNodeId);
                var targetNode = chart.getBGNode(targetNodeId);
                for(var i = 0; i < sourceNode.childrenIds.length; i++){
                    var childNodeId = sourceNode.childrenIds[i];
                    chart.link(childNodeId, sourceNode.pid);
                }
                chart.link(sourceNodeId, targetNodeId);
                chart.draw();
            } };

            args.menu.addAsChildDontMoveChildrenCreateNew = { icon: OrgChart.icon.addAsChild(24,24, '#ccc'), text: "Add as child don't move children and create new", onClick: function(sourceNodeId, targetNodeId){
                var sourceNode = chart.getBGNode(sourceNodeId);
                var targetNode = chart.getBGNode(targetNodeId);
                var newId = OrgChart._randomId();
                chart.add({id: newId, pid: sourceNode.pid})
                for(var i = 0; i < sourceNode.childrenIds.length; i++){
                    var childNodeId = sourceNode.childrenIds[i];
                    chart.link(childNodeId, newId);
                }
                chart.link(sourceNodeId, targetNodeId);
                chart.draw();
            } };
        }
    })

    chart.load([
            { id: 1,  name: "Billy Moore", title: "CEO" },
            { id: 4, pid: 1, name: "Billie Rose", title: "Dev Team Lead" },
            { id: 5, pid: 1,  name: "Glenn Bell", title: "HR" },
            { id: 7, pid: 1, name: "Skye Terrell", title: "Manager" },
            { id: 10, pid: 4, name: "Skylar Parrish", title: "node.js Developer" },
            { id: 11, pid: 4,  name: "Ashton Koch", title: "C# Developer" },
            { id: 12, pid: 7, name: "Bret Fraser", title: "Sales" },
            { id: 13, pid: 7,  name: "Steff Haley", title: "Sales" }
        ]);

};
