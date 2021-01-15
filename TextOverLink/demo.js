OrgChart.templates.ana.field_1 = '';

var chart = new OrgChart(document.getElementById("tree"), {
    nodeBinding: {
        field_0: "name", 
        field_1: "app"
    },
});

chart.on('render', function(sender, args){
        for (var i = 0; i < args.res.visibleNodeIds.length; i++) {
           var node = args.res.nodes[args.res.visibleNodeIds[i]];
           var data = chart.get(node.id);

            args.content += '<rect id="approver" x="' + (node.x+35) + '" y="' + (node.y+140) + 
                '" height="20" width="180" fill="white" stroke-width="1" stroke="#aeaeae" rx="5" ry="5">' + 
                '</rect><text style="font-size: 18px;" fill="#039BE5" x="' + (node.x+125) + '" y="' + (node.y+155) + 
                '" text-anchor="middle">text over the link</text>';
        }    
});

chart.load([
        { id: 1, name: "Denny Curtis", app: "Set as approver"  },
        { id: 2, pid: 1, name: "Ashley Barnett" },
        { id: 3, pid: 1, name: "Caden Ellison" },
        { id: 4, pid: 2, name: "Elliot Patel" },
        { id: 5, pid: 2, name: "Lynn Hussain" },
        { id: 6, pid: 3, name: "Tanner May" },
        { id: 7, pid: 3, name: "Fran Parsons" }
    ]);