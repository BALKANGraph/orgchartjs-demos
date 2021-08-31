var chart = new OrgChart(document.getElementById("tree"), {
    anim: {
        func: OrgChart.anim.outBack,
        duration: 1000
    }
});

chart.on('render', function(sender, args){
    
    if (args.res && args.res.animations){
        for (var i = 0; i < args.res.animations[1].length; i++){
            var start = args.res.animations[1][i];
            var end = args.res.animations[2][i];
            start.opacity = 0;
            end.opacity = 1;

          //  start.transform = end.transform; 
        }
    }
});


chart.load([
    { id: 0 },
    { id: 1, pid: 0 },
    { id: 2, pid: 0 }
]);