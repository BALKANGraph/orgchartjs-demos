window.onload = function () {


    function print(nodeId) {
        window.print();
    }

    var chart = new OrgChart(document.getElementById("tree"), {
        enableSearch: false,

        menu: {
            pdf: { text: "Export PDF" },
            png: { text: "Export PNG" },
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" },
            print: {
                text: "Print",
                icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"),
                onClick: print
            }
        },

        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },

        nodeMenu: {
            edit: { text: "Edit" },
        }
    });


    chart.load([
        { id: "1", name: "Jack Hill", title: "Chairman and CEO", img: "https://cdn.balkan.app/shared/1.jpg" },
        { id: "2", pid: "1", name: "Lexie Cole", title: "QA Lead", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: "3", pid: "1", name: "Janae Barrett", title: "Technical Director", img: "https://cdn.balkan.app/shared/3.jpg" }
    ]);
};