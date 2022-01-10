
window.onload = function () {   

    var chart = new OrgChart(document.getElementById("tree"), {
            collapse: {
                level: 2,
                allChildren: true
            }        
        });  
        
        nodes = [
            { id: 1 },
            { id: 2, pid: 1 },
            { id: 3, pid: 1 },
            { id: 4, pid: 2 },
            { id: 5, pid: 2 },
            { id: 6, pid: 3 },
            { id: 7, pid: 3 },
            { id: 8, pid: 4 },
            { id: 9, pid: 4 },
            { id: 10, pid: 5 },
            { id: 11, pid: 5 },
            { id: 12, pid: 6 },
            { id: 13, pid: 6 },
            { id: 14, pid: 7 },
            { id: 15, pid: 7 },
            { id: 16, pid: 8 },
            { id: 17, pid: 8 },
            { id: 18, pid: 9 }
        
        ];
    
    
        function iterate(c, n, nodesToExpand){
            if (Array.isArray(n)){
                for(var i = 0; i < n.length; i++){
                    iterate(c, n[i])
                }
                return;
            }
    
            nodesToExpand.push(n.id);
            for(var i = 0; i < n.stChildrenIds.length; i++){
                iterate(c, c.getNode(n.stChildrenIds[i]), nodesToExpand)
            }
            
            for(var i = 0; i < n.childrenIds.length; i++){
                iterate(c, c.getNode(n.childrenIds[i]), nodesToExpand)
            }
        };
    
        chart.on('expcollclick', function (sender, collapsing, id, ids) {
            if (!collapsing) {
                var nodesToExpand = [];
                iterate(sender, chart.getNode(id), nodesToExpand);
                chart.expand(id, nodesToExpand)
                return false;
            }
        });  
    
        chart.load(nodes);
    };
    