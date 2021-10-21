var field_template = '<text data-width="230" data-text-overflow="ellipsis"  style="font-size: 24px;" fill="#757575" x="125" y="100" text-anchor="middle">{val}</text>';
OrgChart.templates.olivia.field_0 = '{val}';

var chart = new OrgChart(document.getElementById("tree"), {
    mouseScrool: OrgChart.action.none,
    template: 'olivia',
    mode: 'dark',
    nodeMouseClick: OrgChart.action.none,
    nodeBinding: {
        field_0: "name"
    },

});

var nodes = [
    { id: 1, name: "BALKAN OrgChart JS", link: "https://balkan.app/OrgChartJS" },
    { id: 2, pid: 1, name: "BALKAN App on linkedIn", link: "https://www.linkedin.com/company/balkanapp" },
    { id: 3, pid: 1, name: "BALKAN OrgChart", link: "https://balkan.app/OrgChart" }
];

chart.on('field', function (sender, args) {
    if (args.name == "name") {
        var name = args.data["name"];
        var link = args.data["link"];
        var text = OrgChart.wrapText(name, field_template);
        var fieldData = '<a target="_blank" href="' + link + '">' + text + '</a>';
        args.value = fieldData;
    }
});

chart.load(nodes);