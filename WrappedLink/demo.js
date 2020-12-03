var field_template = '<text width="230" text-overflow="ellipsis"  style="font-size: 24px;" fill="#757575" x="125" y="100" text-anchor="middle">{val}</text>';						
 OrgChart.templates.olivia.field_0 = '{val}';
 
            var chart = new OrgChart(document.getElementById("tree"), {
             		mouseScrool: OrgChart.action.none,
                template: "luba",
                nodeMouseClick: OrgChart.action.none,
                nodeBinding: {
                    field_0: function (sender, node) {
                        var data = sender.get(node.id);
                        var name = data["name"];
                        var link = data["link"];                     
                        var text =  OrgChart.wrapText(name, field_template);
                        var fieldData = '<a target="_blank" href="' + link + '">' + text + '</a>';
                        return fieldData;
                    }
                },
                nodes: [
                    { id: 1, name: "some longer link name", link: "https://balkangraph.com" },
                    { id: 2, pid: 1, name: "another longer link name", link: "https://webcall.me"  },
                    { id: 3, pid: 1, name: "GetOrgChart", link: "http://getorgchart.com" }
                ]
            });