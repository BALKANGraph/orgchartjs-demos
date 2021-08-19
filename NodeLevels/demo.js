
window.onload = function () { 
    var chart = new OrgChart(document.getElementById("tree"), {
        enableSearch: false,
        nodeBinding: {
            field_0: null,
        },
                    collapse: {
                level: 2
            },
    });
    
    var nodes = [
			{ id: 1},
            { id: 2, pid: 1},
            { id: 3, pid: 2},
            { id: 4, pid: 3},
            { id: 5, pid: 4},
            { id: 6, pid: 5},
            { id: 7, pid: 6},
            { id: 8, pid: 7},
            { id: 9, pid: 8},
            { id: 10, pid: 9},
            { id: 11, pid: 10},
            { id: 12, pid: 1},
            { id: 13, pid: 1},
            { id: 14, pid: 1},
            { id: 15, pid: 1},
            { id: 16, pid: 2},
            { id: 17, pid: 2},
            { id: 18, pid: 2},
            { id: 19, pid: 3},
            { id: 20, pid: 3},
            { id: 21, pid: 1},
            { id: 22, pid: 2},
            { id: 23, pid: 3},
            { id: 24, pid: 4},
            { id: 25, pid: 5},
            { id: 26, pid: 6},
            { id: 27, pid: 14},
            { id: 28, pid: 14},
            { id: 29, pid: 14},
            { id: 30, pid: 14},
            { id: 31, pid: 21},
            { id: 32, pid: 22},
            { id: 33, pid: 23},
            { id: 34, pid: 24},
            { id: 35, pid: 25},
            { id: 36, pid: 26},
            { id: 37, pid: 32},
            { id: 38, pid: 21},
            { id: 39, pid: 22},
            { id: 40, pid: 23},
            { id: 41, pid: 34},
            { id: 42, pid: 33},
            { id: 43, pid: 42},
            { id: 44, pid: 43},
            { id: 45, pid: 44},
            { id: 46, pid: 45},
            { id: 47, pid: 46},
            { id: 48, pid: 50},
            { id: 49, pid: 51},
            { id: 50, pid: 52},
            { id: 51, pid: 55},
            { id: 52, pid: 28},
            { id: 53, pid: 29},
            { id: 54, pid: 30},
            { id: 55, pid: 31},
        ];
        
    chart.on('field', function(sender, args){
        if (args.name == null){
            args.value = "level: " + chart.getNode(args.data.id).level;   
        }
    });
    
    chart.load(nodes);
        
    function getLevel(node){	
        var pnode = chart.nodes[node.pid];
        if (pnode){
            node._myLevel++;
            getLevel(pnode);
        }
    }
        document.querySelector('#GetLevels').addEventListener('click', function(){
        	var maxLevel = 0;

            for(var id in chart.nodes){
                var node = chart.nodes[id];
                node._myLevel = 0;
                getLevel(node);
                if (node._myLevel > maxLevel){
                    maxLevel = node._myLevel;
                }
            }
            alert('levels = ' + maxLevel + 1 );

        });
};