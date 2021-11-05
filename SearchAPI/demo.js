window.onload = function () {

    var chart;
    chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
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
            var result = chart.search(searchname);
            if (result.length == 1) {
                chart.center(result[0].id);

            }
            else if (result.length > 1) {
                chart.searchUI.find(searchname);
            }
        });
    }


    nodes = [
        { id: "1" },
        { id: "2", pid: "1" },
        { id: "3", pid: "1" },
        { id: "Name", pid: "2" },
        { id: "5", pid: "2" },
        { id: "6", pid: "3" },
        { id: "Name1", pid: "3" }
    ];

    chart.load(nodes);
}