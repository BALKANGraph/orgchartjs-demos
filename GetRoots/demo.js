   
window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        template: 'olivia',
        mode: 'dark',      
        layout: OrgChart.tree,
        nodeBinding:{
            field_0: 'id',
            field_1: 'pid'
        }
    });
    
       var nodes =  [
            { id: 2 },
            { id: 3 },
            { id: 4, pid: 2 },
            { id: 5, pid: 2 },
            { id: 10, pid: 3 },
            { id: 11, pid: 3 },
            { id: 12, pid: 3 },
            { id: 13, pid: 3 },
            { id: 14, pid: 2 },
            { id: 15, pid: 2 },
            { id: 16, pid: 2 }
        ];
        
         
         chart.on('init', function (sender) {
            alert("You have " + chart.roots.length + " roots.\n" +
                "See the result of console.log(chart.roots) for more details.");
            console.log(chart.roots);
        });  

        
        chart.load(nodes);
    
    
};
