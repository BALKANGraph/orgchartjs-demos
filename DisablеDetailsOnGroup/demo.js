

        var chart = new OrgChart(document.getElementById("tree"), {

            nodeBinding: {
                field_0: "name",
                field_1: "title",
                img_0: "img"
            },
            tags: {
                "node-with-subtrees": {
                    template: "group",
                    subTreeConfig: {
                    siblingSeparation: 3,
                    columns: 2
                }
                }
            }
            });

            nodes = [
                {id: 0, title: "CEO", name: "Denny Curtis", img: "https://cdn.balkan.app/shared/2.jpg" }, 
                {id: 1, pid: 0, tags: ["node-with-subtrees"]}, 
                {id: 2, stpid: 1, name: "Bret Fraser", title: "Sales", img: "https://cdn.balkan.app/shared/13.jpg"}, 
                {id: 3, stpid: 1, name: "Steff Haley", title: "Sales", img: "https://cdn.balkan.app/shared/14.jpg"}, 
                {id: 4, stpid: 1, name: "Ashley Barnett", title: "Sales", img: "https://cdn.balkan.app/shared/3.jpg"}, 
                {id: 5, stpid: 1, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg"}
            ];

            chart.editUI.on('show', function (sender, nodeId) {
              var node = chart.getNode(nodeId);
              if (node.stChildrenIds.length){      
                return false;
              }
            });

            chart.load(nodes);