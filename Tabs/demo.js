

window.onload = function () {
    var chart1 = new OrgChart(document.getElementById("chart1"), {
        template: 'olivia',
        mode: 'dark',
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        }
    });

    var chart2 = new OrgChart(document.getElementById("chart2"), {
        template: 'olivia',
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        }
    });

    var chart3 = new OrgChart(document.getElementById("chart3"), {
        template: 'ana',
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        }
    });

    $("#tabs").tabs({
            activate: function (event, ui) {
                var tabId = ui.newPanel.attr('id');

                switch (tabId) {
                    case 'tabs-1':
                        chart1.load([{ id: 0 }, { id: 1, pid: 0 }, { id: 2, pid: 0 }]);
                        break;
                    case 'tabs-2':
                        chart2.load([{ id: 3 }, { id: 4, pid: 3 }, { id: 5, pid: 3 }]);
                        break;
                    case 'tabs-3':
                        chart3.load([{ id: 6 }, { id: 7, pid: 6 }, { id: 8, pid: 6 }]);
                        break;
                }
            }
        }
    );

    chart1.load([{ id: 0 }, { id: 1, pid: 0 }, { id: 2, pid: 0 }]);
};
