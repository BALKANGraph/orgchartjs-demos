

window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
   //     roots: [2],
        align: OrgChart.ORIENTATION
    });

    chart.on("renderbuttons", function(sender, args){
        var pnode = sender.getNode(args.node.pid);     
        if (!pnode)  return;
        var t = OrgChart.t(args.node.templateName);
        args.html += '<g control-expcoll-up-id="{id}" transform="matrix(1,0,0,1,{x},{y})"  style="cursor:pointer;">'
            .replace('{id}', args.node.id)
            .replace('{x}', args.node.x + (args.node.w / 2) - (t.expandCollapseSize / 2))
            .replace('{y}', args.node.y - t.expandCollapseSize / 2);
        args.html += !args.node.parent ? t.plus : t.minus;        
        args.html += OrgChart.grCloseTag;
    });

    chart.on("redraw", function(sender){
        var upElements = document.querySelectorAll('[control-expcoll-up-id]');
        for(var i = 0; i < upElements.length; i++){
            upElements[i].addEventListener('click', function(){
                var id = this.getAttribute('control-expcoll-up-id');
                var node = sender.getNode(id);
                var pnode = sender.getNode(node.pid);
                
                if (pnode && !node.parent){
                    sender.config.roots = [pnode.id];
                    //sender.center(node.id, {vertical: false, horizontal: false, parentState: OrgChart.COLLAPSE_PARENT_SUB_CHILDREN_EXCEPT_CLICKED, rippleId: node.id});
                    sender.draw(OrgChart.action.update, {id: node.id});

                }
                else if (node.parent){
                    sender.config.roots = [node.id];
                    sender.draw();
                }
            })
        }
    });

    chart.load([
            { id: 0 },
            { id: 1, pid : 0 },
            { id: 2, pid : 0 },
            { id: 3, pid : 0 },
            { id: 4, pid : 1 },
            { id: 5, pid : 1 },            
            { id: 6, pid : 2 },
            { id: 7, pid : 2 },            
            { id: 8, pid : 3 },
            { id: 9, pid : 3 }
        ]);
};
