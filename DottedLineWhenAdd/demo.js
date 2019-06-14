

window.onload = function () {
    var chart = new OrgChart(document.getElementById('tree'), {
        template: 'ula',
        nodeBinding: {
            field_0: 'id',
            field_1: '[id'
        },
        nodeMenu:{
            add: { text: 'Add' }
        },
        tags:{
            dotted: 'dotted'
        }
    });

    chart.on('add', function(sender, data){
        data.tags = ['dotted'];
    });

    chart.load([
       {id: 0} ,
       {id: 1, pid: 0},
       {id: 2, pid: 0}
    ]);
};
