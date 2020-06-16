window.onload = function () { 
    var chart = new OrgChart(document.getElementById("tree"), {
    enableSearch: false,
        nodeMenu: {
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img",
        },
        nodes: [
            { id: 1, name: "Denny Curtis", emps: ["emp 1", "emp 11"] },
            
            { id: 2, pid: 1, name: "Denny Curtis", emps: ["emp 22", "emp 222", "emp 222"] }
            ]
    });
    
    chart.nodeMenuUI.on('show', function(sender, args){
    		var data = chart.get(args.firstNodeId);
        var m = {};
        for(var i= 0; i < data.emps.length; i++){
                m["myMenuItem" + i] =  { text: data.emps[i], icon: OrgChart.icon.add(16,16,"#ccc"), onClick: function(id) {
                chart.editUI.show(id, true)
                
                } } 
        };
        
        args.menu = m;

    });
};
