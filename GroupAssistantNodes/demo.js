window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding:{
            field_0: 'id',
            field_1: 'pid'
        },
        columns: 2
    });

    chart.load([
        {id:1},
        {id:2, pid:1},
        {id:3, pid:1},
        {id:4, pid:1, tags: ['assistant']},
        {id:5, stpid:4 },
        {id:6, stpid:4 },
        {id:7, stpid:4 },
        {id:8, stpid:4 }
    ]);
};