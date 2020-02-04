      

        var chart = new OrgChart(document.getElementById("tree"), {
            mouseScrool: OrgChart.action.none,
                            nodeMenu:{
                    edit: {text:"Edit"},
                    add: {text:"Add"},
                    remove: {text:"Remove"}
                },
                nodeBinding: {
                    field_0: "name",
                    field_1: "type"
                },
                nodes: [
                    { id: 1, name: "Amber McKenzie", type: "CEO", tags: ["ds"] },
                    { id: 2, pid: 1, name: "Ava Field", type: "IT Manager" },
                    { id: 3, pid: 1, name: "Peter Stevens", type: "HR Manager" }
                ]
            });   
            
    