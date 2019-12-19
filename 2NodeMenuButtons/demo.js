window.onload = function() {
        OrgChart.templates.wework = Object.assign({}, OrgChart.templates.ana);

        OrgChart.templates.wework.node = '<rect x="0" y="0" height="120" width="250" fill="#039BE5" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>'
            + '<g class="weworkBtn"><rect x="0" y="0" fill="red" fill-opacity="0" width="50" height="22" >'
            + '</rect>'
            + '<circle cx="30" cy="10" r="2" fill="#000000" />'
            + '<circle cx="20" cy="10" r="2" fill="#000000" />'
            + '<circle cx="10" cy="10" r="2" fill="#000000" /></g>';

        var chart = new OrgChart(document.getElementById("tree"), {
            mouseScrool: OrgChart.action.none,
            nodeMenu: {
                edit: { text: "Edit" },
                add: { text: "Add" },
                remove: { text: "Remove" }
            },

            nodeBinding: {
                field_0: "name",
                field_1: "title"
            },
            template: "wework"
        });

        nodes = [
            { id: 1, name: "Amber McKenzie", title: "CEO" },
            { id: 2, pid: 1, name: "Ava Field", title: "IT Manager" },
            { id: 3, pid: 1, name: "Peter Stevens", title: "HR Manager" }
        ];

        chart.load(nodes);

        var mySecondNodeMenu = new OrgChart.menuUI();
        mySecondNodeMenu.init(chart);

        chart.on("redraw", function () {
            var nodeElements = document.querySelectorAll('.weworkBtn');
            for (var i = 0; i < nodeElements.length; i++) {
                nodeElements[i].addEventListener("click", function (e) {

                    e.preventDefault();
                    e.cancelBubble = true;
                    var client = OrgChart._getOffsetXY(this, e);

                    var id = findNodeId(this);

                    mySecondNodeMenu.show(client.x, client.y, id, null, {
                        myMenuItem: {
                            text: "My Menu Item",
                            icon: OrgChart.icon.add(16, 16, '#ccc'),
                            onClick: function (id) {
                                alert('My Menu Item: Node with id: ' + id + " was clicked")
                            }
                        }
                    });
                });
            }
        });

        function findNodeId(element){
            while(element){
                element = element.parentNode;
                if (element.getAttribute('node-id')){
                    return element.getAttribute('node-id');
                }
            }
            return null;
        }
    }