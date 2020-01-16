
window.onload = function () {
    OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);

    OrgChart.templates.myTemplate.node =  '<rect style="opacity: 0.3" x="-20" y="-20" height="160" width="290" fill="red" stroke-dasharray="20 3" stroke-width="7" rx="5" ry="5" stroke="blue"></rect>' + OrgChart.templates.myTemplate.node;
    
    
    var chart = new OrgChart(document.getElementById("tree"), {    
                              mouseScrool: OrgChart.action.none,
                layout: OrgChart.treeRightOffset,
                mixedHierarchyNodesSeparation: 50,
                enableSearch: false, 
                tags: {
                myTemplate:{
                template: "myTemplate"
                }
                },
                nodes: [
                    { id: "1"  },
                    { id: "2", pid: "1"},
                    { id: "3", pid: "1"},
                    { id: "4", pid: "2"},
                    { id: "5", pid: "2"},
                    { id: "7", pid: "3"},
                    { id: "8", pid: "3", tags: ["myTemplate"]}
                ]
            });      
}

