var chart = new OrgChart(document.getElementById("tree"), {
    mouseScrool: OrgChart.action.none,
    nodeMouseClick: OrgChart.action.edit,
                nodeMenu:{
        edit: {text:"Edit"},
        add: {text:"Add"},
        remove: {text:"Remove"}
    },
    nodeBinding: {
        field_0: "name",
        field_1: "title"
    }
});   


chart.editUI.on('field', function(sender, args){
        if (args.name == "Add new field"){
        return false;
    }
});


chart.load([
        { id: 1, name: "Amber McKenzie", title: "CEO" },
        { id: 2, pid: 1, name: "Ava Field", title: "IT Manager" },
        { id: 3, pid: 1, name: "Peter Stevens", title: "HR Manager" }
    ]);
    