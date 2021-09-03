var chart;
function tglHandler(tglWrapper, x, id)
{
    var tgl = tglWrapper.querySelector('.tgl');
    var childrenIds = chart.getNode(id).childrenIds;

    var cx = tgl.getAttribute('cx');
    if (cx == x + 22) {
        tgl.setAttribute("cx", x + 32);
        for (i = 0; i < childrenIds.length; i++) {
            var node = chart.get(childrenIds[i]);
            node.tags = ["mainTemplateBlue"];
            chart.updateNode(node);
        }
    }
    else if (cx == x + 32) {
        tgl.setAttribute("cx", x + 22);
        for (i = 0; i < childrenIds.length; i++) {
            var node = chart.get(childrenIds[i]);
            node.tags = ["mainTemplate"];
            chart.updateNode(node);
        }
    }

};

function tglHandler1(tglWrapper)
{
    var tgl = tglWrapper.querySelector('.tgl1');
    var node = chart.get(tgl.parentElement.parentElement.getAttribute('node-id'));
    var cx = tgl.getAttribute('cx');
    if (cx == 32) {
        tgl.setAttribute("cx", 42);
        node.tags = ["mainTemplateBlue"];
        chart.updateNode(node);
    }
    else if (cx == 42) {
        tgl.setAttribute("cx", 32);
        node.tags = ["mainTemplate"];
        chart.updateNode(node);
    }
};



window.onload = function ()
{

    OrgChart.templates.mainTemplate = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.mainTemplate.size = [168, 125];
    OrgChart.templates.mainTemplate.node =
        '<rect x="0" y="0" rx="5" ry="5" height="125" width="168" fill="white" stroke-width="1" stroke="#aeaeae"></rect>' 
        + '<rect x="20" y="80" width="135" height="23" fill="#f2f2f2" stroke-width="1" stroke="#e6eee3" rx="2" ry="2"></rect>'
        + '<g onclick="event.stopPropagation(); tglHandler1(this)">'
        + '<rect x="25" y="85" width="25" height="13" fill="#969696" stroke-width="1" stroke="#e6eee3" rx="7" ry="7">'
        + '</rect>'
        + '<circle class="tgl1" cx="32" cy="91.5" r="5" fill="#fff"></circle>'
        + '</g>'
        + '<text style="font-size: 12px;" fill="#353535" x="90" y="95" text-anchor="middle" font-weight="bold">Switch On</text>'
        ;

    OrgChart.templates.mainTemplate.field_0 = '<text width="148" class="field_0"  style="font-size: 14px;" font-weight="bold" fill="#353535" x="84" y="35" text-anchor="middle">{val}</text>';
    OrgChart.templates.mainTemplate.field_1 = '<text width="148" class="field_1"  style="font-size: 12px;" fill="#5b5b5b" x="84" y="60" text-anchor="middle">{val}</text>';

    OrgChart.templates.mainTemplateBlue = Object.assign({}, OrgChart.templates.mainTemplate);
    OrgChart.templates.mainTemplateBlue.node =
        '<rect x="0" y="0" rx="5" ry="5"  height="125" width="168" fill="#EDF9FC" stroke-width="1" stroke="#aeaeae" ></rect>' 
        + '<rect x="20" y="80" width="135" height="23" fill="#EDF9FC" rx="2" ry="2"></rect>'
        + '<g onclick="event.stopPropagation(); tglHandler1(this)">'
        + '<rect x="25" y="85" width="25" height="13" fill="#0081A3" stroke-width="1" stroke="#e6eee3" rx="7" ry="7">'
        + '</rect>'
        + '<circle class="tgl1" cx="42" cy="91.5" r="5" fill="#fff"></circle>'
        + '</g>'
        + '<text style="font-size: 12px;" fill="#353535" x="90" y="95" text-anchor="middle" font-weight="bold">Switch On</text>'
        ;


    chart = new OrgChart(document.getElementById("tree"), {
        nodeMouseClick: OrgChart.action.none,
        nodeBinding: {
            field_0: "name",
            field_1: "title"
        },
        tags: {
            mainTemplate: {
                template: "mainTemplate"
            },
            mainTemplateBlue: {
                template: "mainTemplateBlue"
            }
        }
    });

    nodes = [
        { id: 1, tags: ['mainTemplateBlue'], name: "Denny Curtis", title: "CEO" },
        { id: 2, pid: 1, tags: ['mainTemplate'], name: "Ashley Barnett", title: "Sales Manager" },
        { id: 3, pid: 1, tags: ['mainTemplate'], name: "Caden Ellison", title: "Dev Manager" },
        { id: 4, pid: 1, tags: ['mainTemplate'], name: "Elliot Patel", title: "Sales" },
        { id: 5, pid: 1, tags: ['mainTemplate'], name: "Lynn Hussain", title: "Sales" },
        { id: 6, pid: 1, tags: ['mainTemplate'], name: "Tanner May", title: "Developer" },
        { id: 7, pid: 2, tags: ['mainTemplate'], name: "Fran Parsons", title: "Developer" },
        { id: 10, pid: 6, tags: ['mainTemplateBlue'], name: "Elliot Scott", title: "Developer" },
        { id: 11, pid: 1, tags: ['mainTemplate'], name: "Ashley Barnett", title: "Sales Manager" },
        { id: 13, pid: 1, tags: ['mainTemplate'], name: "Caden Ellison", title: "Dev Manager" },
        { id: 14, pid: 1, tags: ['mainTemplate'], name: "Elliot Patel", title: "Sales" },
        { id: 15, pid: 1, tags: ['mainTemplate'], name: "Lynn Hussain", title: "Sales" },
        { id: 16, pid: 1, tags: ['mainTemplate'], name: "Tanner May", title: "Developer" },
        { id: 17, pid: 2, tags: ['mainTemplate'], name: "Fran Parsons", title: "Developer" },
        { id: 110, pid: 6, tags: ['mainTemplateBlue'], name: "Elliot Scott", title: "Developer" },
        { id: 117, pid: 2, tags: ['mainTemplate'], name: "Fran Parsons", title: "Developer" },
        { id: 1110, pid: 6, tags: ['mainTemplateBlue'], name: "Elliot Scott", title: "Developer" },
        { id: 211, pid: 1, tags: ['mainTemplate'], name: "Ashley Barnett", title: "Sales Manager" },
        { id: 213, pid: 1, tags: ['mainTemplate'], name: "Caden Ellison", title: "Dev Manager" },
        { id: 214, pid: 1, tags: ['mainTemplateBlue'], name: "Elliot Patel", title: "Sales" },
        { id: 215, pid: 1, tags: ['mainTemplate'], name: "Lynn Hussain", title: "Sales" },
        { id: 216, pid: 1, tags: ['mainTemplate'], name: "Tanner May", title: "Developer" },
        { id: 217, pid: 2, tags: ['mainTemplate'], name: "Fran Parsons", title: "Developer" },
        { id: 2110, pid: 6, tags: ['mainTemplateBlue'], name: "Elliot Scott", title: "Developer" },

    ];

    // To remove the link button, delete the following "render" event:
   
        chart.on('render', function (sender, args)
    {
        for (var i = 0; i < args.res.visibleNodeIds.length; i++) {
            var node = args.res.nodes[args.res.visibleNodeIds[i]];
            var data = chart.getNode(node.id);
            var color1 = "white";
            var color2 = "#969696";
            var cx = 22;

            if (data.childrenIds.length > 0) {

                var hasNoSwitchedOn = false;

                for (var j = 0; j < node.childrenIds.length; j++) {
                    if (chart.get(node.childrenIds[j])) {
                        if (chart.get(node.childrenIds[j]).tags[0] == ["mainTemplate"]) {
                            hasNoSwitchedOn = true;
                        }

                    }
                }

                if (!hasNoSwitchedOn) {
                    color1 = "#EDF9FC";
                    color2 = "#0081A3";
                    cx = 32;
                }
                var child0 = node.childrenIds[0];

                var collapsed = chart.getNode(child0).collapsed;

                if (!collapsed) {
                    args.content += '<rect x="' + (node.x) + '" y="' + (node.y + 145)

                        + '" height="20" width="168" fill="' + color1 + '" stroke-width="1" stroke="#e6eee3" rx="5" ry="5">'
                        + '</rect>'
                        + '<g onclick="event.stopPropagation(); tglHandler(this,' + node.x + ', ' + node.id + ')">'
                        + '<rect x="' + (node.x + 15) + '" y="' + (node.y + 148)
                        + '" width="25" height="13" fill="' + color2 + '" stroke-width="1" stroke="#e6eee3" rx="7" ry="7">'
                        + '</rect>'
                        + '<circle class="tgl" cx="' + (node.x + cx) + '" cy="' + (node.y + 154.5) + '" r="5" fill="#fff"></circle>'
                        + '</g>'
                        + '<text style="font-size: 12px;"  fill="#353535" x="' + (node.x + 90) + '" y="' + (node.y + 160)
                        + '" text-anchor="middle" font-weight="bold">Switch All On</text>';
                }
            }
        }
    });

    chart.load(nodes);
    
}

