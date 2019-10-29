

window.onload = function () {

    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding:{
                field_0: "name",
                field_1: "title",
        }
});
    
    

    chart.on('add', function(sender, node) {

        addNewNode();
        return false;
    });
    
    function addNewNode(){
        var node = { id: 1, name: "Denny Curtis", title: "CEO" };
        chart.addNode(node);
    }

    chart.load([
        
    ]);
};
