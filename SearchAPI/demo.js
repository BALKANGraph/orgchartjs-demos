


window.onload = function () {
    function exportStart(sender, svg) {
        var id = 3;
        var rect = svg.querySelector('[node-id="' + id + '"] rect');
        rect.style.fill = "#F57C00";
    }

    function onRedrawHandler(sender) {
        var rect = sender.getNodeElement(3).getElementsByTagName("rect")[0];
        rect.style.fill = "#F57C00";
    }

    var chart;
    chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        },
        menu: {
            pdf: { text: "Export PDF" }
        },
        nodeMenu: {
            add: {
                text: "add"
            },
            remove: {
                text: "remove"
            }
        },
        
    });

    var elements = document.getElementsByClassName("search-btn");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            var searchname = this.innerHTML;
            var result = chart.find(searchname);
            if (result.length == 1) {
                chart.center(result[0].id);

            }
            else if (result.length > 1) {
                chart.searchUI.find(searchname);
            }
        });
    }

    chart.on('redraw', function (sender) {
        onRedrawHandler(sender);
     });  

     chart.on('exportstart', function (sender, args) {
        exportStart(sender, args.content);
     });  

    nodes = [
        { id: 1 },
        { id: 2, pid: 1 },
        { id: 3, pid: 1 },
        { id: "Name", pid: 2 },
        { id: 5, pid: 2 },
        { id: 6, pid: 3 },
        { id: "Name 1", pid: 3 }
    ];

    chart.load(nodes);
}