


window.onload = function () {

    OrgChart.templates.binary = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.binary.size = [50, 50];
    OrgChart.templates.binary.node = '<circle cx="25" cy="25" r="25" fill="#039BE5"></circle>';
    OrgChart.templates.binary.plus = '';
    OrgChart.templates.binary.minus = '';
    OrgChart.templates.binary.field_0 = '<text fill="#ffffff" x="25" y="30" text-anchor="middle">{val}</text>';
    OrgChart.templates.binary.link = '<path stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}"/>';
    OrgChart.templates.binary.svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:block;background-color: #2E2E2E;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>';

    OrgChart.templates.empty = Object.assign({}, OrgChart.templates.binary);
    OrgChart.templates.empty.node = '';
    OrgChart.templates.empty.size = [50, 50];
    OrgChart.templates.empty.link = '';

    var chart;


    chart = new OrgChart(document.getElementById('tree'), {
        template: 'binary',
        levelSeparation: 40,
        enableSearch: false,
        nodeMouseClick: OrgChart.action.expandCollapse,
        tags: {
            empty: { template: 'empty' }
        },
        nodeBinding: {
            field_0: 'id'
        }
    });

    chart.on('ready', function (sender, tree) {
        var nodes = tree.nodes;
        for (var id in nodes) {
            var node = nodes[id];
            if (node.parent && node.parent.children.length == 1) {

                var siblingNode = new OrgChart.node(node.id + 'sibling', node.parent.id, null, ['empty'], 'empty');

                if (node.parent.id == 6) //add left
                    node.parent.children.splice(0, 0, siblingNode);
                else //add right
                    node.parent.children.push(siblingNode);

                siblingNode.parent = node.parent;
                nodes[siblingNode.id] = siblingNode;
            }
        }
    });

    chart.load([
        { id: 1 },
        { id: 2, pid: 1 },
        { id: 3, pid: 1 },
        { id: 4, pid: 2 },
        { id: 5, pid: 3 },
        { id: 6, pid: 3 },
        { id: 7, pid: 4 },
        { id: 8, pid: 4 },
        { id: 9, pid: 5 },
        { id: 10, pid: 5 },
        { id: 12, pid: 6 },
        { id: 13, pid: 7 },
        { id: 14, pid: 7 },
        { id: 15, pid: 8 },
        { id: 16, pid: 8 },
        { id: 17, pid: 9 },
        { id: 20, pid: 12 },
        { id: 21, pid: 12 }
    ]);
}
