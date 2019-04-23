
var chart;

function init() {
    chart = new OrgChart(document.getElementById("tree"), {
        template: 'luba',
        enableSearch: false,
        nodes: [
            { id: 1 },
            { id: 2, pid: 1 },
            { id: 3, pid: 1 },
        ]
    });
}

document.getElementById('epdf').addEventListener('click', function () {
    chart.exportPDF({ filename: 'My.pdf' });
});

document.getElementById('ecsv').addEventListener('click', function () {
    chart.exportCSV('My.csv');
});

document.getElementById('exml').addEventListener('click', function () {
    chart.exportXML('My.xml');
});

document.getElementById('esvg').addEventListener('click', function () {
    chart.exportSVG({ filename: 'My.svg' });
});

document.getElementById('epng').addEventListener('click', function () {
    chart.exportPNG({ filename: 'My.png' });
});

document.getElementById('ixml').addEventListener('click', function () {
    chart.importXML();
});

document.getElementById('icsv').addEventListener('click', function () {
    chart.importCSV();
});


window.onload = function () {
    init();
};