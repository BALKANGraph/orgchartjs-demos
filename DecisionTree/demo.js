


window.onload = function () {
    OrgChart.templates.belinda.plus = "";
    OrgChart.templates.belinda.minus = "";
    OrgChart.templates.belinda.img_0 = '<clipPath id="{randId}"><circle cx="90" cy="60" r="40"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="50" y="20" width="80" height="80" ></image>';
    OrgChart.templates.belinda.field_0 = '<text data-width="170" class="field_0" style="font-size: 14px;" text-anchor="middle" fill="#ffffff"  x="90" y="130">{val}</text>';
    OrgChart.templates.yes = Object.assign({}, OrgChart.templates.belinda);
    OrgChart.templates.yes.size = [60, 60];
    OrgChart.templates.yes.node = '<circle cx="30" cy="30" r="30" fill="#F57C00" stroke-width="1" stroke="#aeaeae"></circle>';
    OrgChart.templates.yes.minus = "";
    OrgChart.templates.yes.plus = "";
    OrgChart.templates.yes.rippleRadius = 15;
    OrgChart.templates.yes.field_0 = '<text class="field_0" style="font-size: 18px;" text-anchor="middle" fill="#ffffff"  x="30" y="37">{val}</text>';
    OrgChart.templates.no = Object.assign({}, OrgChart.templates.yes);
    OrgChart.templates.no.node = '<circle cx="30" cy="30" r="30" fill="#FFCA28" stroke-width="1" stroke="#aeaeae"></circle>';

    var chart = new OrgChart(document.getElementById("tree"), {
        enableSearch: false,
        template: "belinda",
        nodeMouseClick: OrgChart.action.expandCollapse,
        mouseScrool: OrgChart.action.yScroll,
        showYScroll: OrgChart.scroll.visible,
        nodeBinding: {
            field_0: "text",
            img_0: "img"
        },
        tags: {
            yes: {
                template: "yes"
            },
            no: {
                template: "no"
            }
        },
        collapse: {
            level: 2,
            allChildren: true,
        },     
    });

    chart.on('click', function (sender, args) {
        var data = sender.get(args.node.id);
        return data.text == "YES" || data.text == "NO";
     });  

     chart.on('expcollclick', function (sender, collapse, id, ids) {
        if (!collapse) {
            var node = sender.getNode(id);
            if (node.parent) {
                sender.expand(id, ids, function () {
                    sender.expand(ids[0], sender.getNode(ids[0]).childrenIds, function () {
                        var ids = [];
                        for (var i = 0; i < node.parent.childrenIds.length; i++) {
                            var firstLevelChildId = node.parent.childrenIds[i];
                            if (firstLevelChildId != node.id) {
                                ids.push(firstLevelChildId);
                            }
                        }

                        sender.collapse(id, ids, function () {
                            sender.center(id);
                        });
                    });

                });

                return false;
            }
        }
        if (action == OrgChart.COLLAPSE) {
            var node = sender.getNode(id);
            if (node.parent) {
                ids = [];
                function collapseIds(n) {
                    if (n) {
                        for (var i = 0; i < n.childrenIds.length; i++) {
                            ids.push(n.childrenIds[i]);
                            collapseIds(sender.getBGNode(n.childrenIds[i]));
                        }
                    }
                }
                collapseIds(node);
                sender.collapse(id, ids, function () {
                    sender.expand(id, node.parent.collapsedChildrenIds, function () {
                        sender.center(id);
                    });
                });
                return false;
            }
        }
     });  

    chart.load( [
        { id: 1, text: "Is it raining?", img: "https://cdn.balkan.app/shared/raindrops-cloud.svg" },
        { id: 2, pid: 1, tags: ["yes"], text: "YES" },
        { id: 3, pid: 1, tags: ["no"], text: "NO" },
        { id: 4, pid: 2, text: "Is it windy?", img: "https://cdn.balkan.app/shared/wind.svg" },
        { id: 5, pid: 4, tags: ["yes"], text: "YES" },
        { id: 6, pid: 4, tags: ["no"], text: "NO" },
        { id: 7, pid: 5, text: "Is it extremely windy?", img: "https://cdn.balkan.app/shared/cyclone.svg" },
        { id: 8, pid: 7, tags: ["yes"], text: "YES" },
        { id: 9, pid: 7, tags: ["no"], text: "NO" },
        { id: 10, pid: 3, text: "Don't bring anything", img: "https://cdn.balkan.app/shared/empty.svg" },
        { id: 11, pid: 6, text: "Use an umbrella", img: "https://cdn.balkan.app/shared/umbrella.svg" },
        { id: 12, pid: 8, text: "Stay home", img: "https://cdn.balkan.app/shared/home.svg" },
        { id: 13, pid: 9, text: "Wear a rain jacket", img: "https://cdn.balkan.app/shared/black-jacket.svg" }
    ])
};