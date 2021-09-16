var svgIcon = '<img src="https://cdn.balkan.app/shared/hamburger.png">';


window.onload = function () { 

OrgChart.templates.ana.exportMenuButton = '<div style="position:absolute;right:{p}px;top:{p}px; width:40px;height:50px;cursor:pointer" data-ctrl-menu=""  >' + svgIcon + '</div>';

    var chart = new OrgChart(document.getElementById("tree"), {
    		template: "ana",
        menu: {
            pdf: { text: "Export PDF" },
            png: { text: "Export PNG" },
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" }
        },
        nodeBinding: {
            field_0: "id",
            field_1: "pid",
        },
        nodes: [
            { id: 1 },
            { id: 2, pid: 1 },
            { id: 3, pid: 1 }
        ]
    });
};
