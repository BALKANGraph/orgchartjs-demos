window.onload = function () { 
    var chart = new OrgChart(document.getElementById("tree"), {
        orientation: OrgChart.orientation.right_top,
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        }
    });
    

chart.on('init', function(sender){
    document.getElementById("loadImg").style.display = "none";
});
    

    setTimeout(function(){        
        chart.load([{id: 0}, {id:1,pid:0}]);
    },    
    2000);
};