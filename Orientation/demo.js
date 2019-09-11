

window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        enableSearch: false,
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        },
        nodes: [
            { id: 1 },
            { id: 2, pid: 1},
            { id: 3, pid: 1}
        ]
    });

    for(var orientation in OrgChart.orientation){
        var option = document.createElement('option');
        option.innerHTML = orientation;
        option.value = OrgChart.orientation[orientation];
        document.querySelector('#orientation').appendChild(option);
    }

    document.querySelector('#orientation').addEventListener('change', function(){
        chart.config.orientation = parseInt(this.value);
        chart.draw();
    });
};
