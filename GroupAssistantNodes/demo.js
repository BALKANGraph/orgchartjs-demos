

window.onload = function () {

    var chart = new OrgChart(document.getElementById("tree"), {
        tags: {
            g1: {
                group: true,
                groupName: "HR Team",
                groupState: OrgChart.EXPAND,
                template: "group_grey"
            },
            g2: {
                group: true,
                groupName: "HR Team",
                groupState: OrgChart.EXPAND,
                template: "group_grey"
            },
            assistant:{
                template: 'olivia'
            }
        },
        nodeBinding:{
            field_0: 'id',
            field_1: 'pid'
        }
    });


    chart.load([
        {id:1},
        {id:2, pid:1},
        {id:3, pid:1},
        {id:4, pid:1, tags: ['g1', 'assistant']},
        {id:5, pid:1, tags: ['g1', 'assistant']},
        {id:6, pid:1, tags: ['g1', 'assistant']},
        {id:7, pid:1, tags: ['g1', 'assistant']}
    ]);
};
