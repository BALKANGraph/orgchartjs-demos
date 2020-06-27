
window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "olivia",
        nodeMouseClick: OrgChart.none,
        nodeMenu: {
            details: { text: "Details" },
            edit: { text: "Edit" },
            add: { text: "Add" },
            remove: { text: "Remove" }
        },
        columns: 2,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        tags: {
            "group": {
                template: "group",
            }
        }
    });


    var groupContextMenu = new OrgChart.menuUI();
    groupContextMenu.init(chart);

    chart.on('redraw', function (sender) {
        for (var id in sender.nodes) {
            var node = sender.nodes[id];
            if (node.stChildrenIds.length) {
                var nodeElement = document.querySelector('[node-id=' + node.id + ']');
                if (nodeElement) {
                    nodeElement.addEventListener('contextmenu', function (e) {
                        e.preventDefault();
                        var id = this.getAttribute('node-id');
                        groupContextMenu.show(e.pageX, e.pageY, id, null, {
                            addInGroup: {
                                text: "Add New In Group",
                                icon: OrgChart.icon.add(16, 16, '#ccc'),
                                onClick: function (id) {
                                    chart.addNode({ id: OrgChart.randomId(), stpid: id });
                                }
                            }
                        });
                    });
                }
            }
        }

        groupContextMenu.hide();
    });



    chart.load([
        { id: "directors", name: "Directors", tags: ["directors-group", "group"], description: "Top Management" },
        { id: "devs", name: "Dev Team", pid: 4, tags: ["devs-group", "group"], description: "Research and Development" },
        { id: "sales", name: "Sales Team", pid: 9, tags: ["sales-group", "group"], description: "Sales and Marketing" },
        { id: 1, stpid: "directors", name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, stpid: "directors", name: "Marley Wilson", title: "Director", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 4, pid: "directors", name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: "hrs", pid: "directors", name: "HR Team", tags: ["hrs-group", "group"], description: "Human Resource | London" },
        { id: 5, stpid: "hrs", name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
        { id: 6, stpid: "hrs", name: "Marcel Brooks", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" },
        { id: 7, stpid: "hrs", name: "Maxwell Bates", title: "HR", img: "https://cdn.balkan.app/shared/12.jpg" },
        { id: 8, stpid: "hrs", name: "Asher Watts", title: "Junior HR", img: "https://cdn.balkan.app/shared/13.jpg" },
        { id: 9, pid: "directors", name: "Skye Terrell", title: "Manager", img: "https://cdn.balkan.app/shared/12.jpg" },
        { id: 10, stpid: "devs", name: "Jordan Harris", title: "JS Developer", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 11, stpid: "devs", name: "Will Woods", title: "JS Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 12, stpid: "devs", name: "Skylar Parrish", title: "node.js Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
        { id: 13, stpid: "devs", name: "Ashton Koch", title: "C# Developer", img: "https://cdn.balkan.app/shared/9.jpg" },
        { id: 14, stpid: "sales", name: "Bret Fraser", title: "Sales", img: "https://cdn.balkan.app/shared/13.jpg" },
        { id: 15, stpid: "sales", name: "Steff Haley", title: "Sales", img: "https://cdn.balkan.app/shared/14.jpg" }
    ]);
};
