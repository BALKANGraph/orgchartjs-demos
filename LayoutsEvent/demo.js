var chart = new OrgChart(document.getElementById("tree"), {    
    layout: OrgChart.mixed,
    enableSearch: false,
    nodeBinding: {
    field_0: "id",
    field_1: "title",
    img_0: "img"
},
});      


OrgChart.events.on('layout', function (args) {    
if (args.pnode.id == 100){
args.layout = OrgChart.treeLeftOffset;
}    
else if (args.pnode.id == 200){
args.layout = OrgChart.tree;
}
else if (args.pnode.id == 300) {
args.layout = OrgChart.treeRightOffset;
}
else if (args.pnode.id == 400) {
args.childrenIds = ["401", "402"];
}
else if (args.pnode.id == 500) {
args.layout = OrgChart.normal;
}
});

chart.load([
        { id: "1"  },
        { id: "2", pid: "1"},
        { id: "3", pid: "1"},
        { id: "4", pid: "2"},
        { id: "5", pid: "2"},
        { id: "6", pid: "2"},
        { id: "7", pid: "3"},
        { id: "8", pid: "3"},
        { id: "9", pid: "3"},
        { id: "10", pid: "3"},
        { id: "100", pid: "1"},
        { id: "101", pid: "100"},
        { id: "102", pid: "100"},
        { id: "103", pid: "100"},
        
        { id: "200", pid: "1"},
        { id: "201", pid: "200"},
        { id: "202", pid: "200"},
        { id: "203", pid: "200"},

                        
        { id: "300", pid: "1"},
        { id: "301", pid: "300"},
        { id: "302", pid: "300"},
        { id: "303", pid: "300"},

        { id: "400", pid: "1"},
        { id: "401", pid: "400"},
        { id: "402", pid: "400"},
        { id: "403", pid: "400"},


        { id: "500", pid: "1"},
        { id: "501", pid: "500"},
        { id: "502", pid: "500"},
        { id: "503", pid: "500"},
    ]);