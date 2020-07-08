window.onload = function () {
   
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "derek",
        align: OrgChart.ORIENTATION,
        toolbar: {
            layout: true,
            zoom: true,
            fit: true,
            expandAll: true
        },
        nodeBinding: {
            field_0: "name",
        },
  });

  nodes = [
        { id: 1, name: "Jack Hill",  },
        { id: 2, pid: 1, name: "Lexie Cole" },
        { id: 3, pid: 1, name: "Janae Barrett" },
        { id: 4, pid: 2, name: "Elliot Ross" },
        { id: 5, pid: 2, name: "Anahi Gordon" },
        { id: 6, pid: 2, name: "Nash Ingram" },
        { id: 7, pid: 3, name: "Alice Gray" },
        { id: 8, pid: 3, name: "Anne Ewing" },
        { id: 9, pid: 3, name: "Reuben Mcleod" }
    ];

 chart.on('init', function(sender){
    sender.toolbarUI.showLayout();
});

    chart.load(nodes);
};
