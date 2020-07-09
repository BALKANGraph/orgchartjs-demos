

window.onload = function () {
    OrgChart.templates.noMenuTemplate = Object.assign({}, OrgChart.templates.luba);
 OrgChart.templates.noMenuTemplate.nodeMenuButton =  '';
 
    var chart = new OrgChart(document.getElementById("tree"), {
         template: 'luba',
         nodeBinding: {
             field_0:  function(sender, node){
                 return sender.get(node.id).tags[0];
             },
             field_1: "id"
         },
         nodeMenu: {
             subLevels0: { text: "Move to sub level 0", icon: OrgChart.icon.details(24, 24, "#7A7A7A"), onClick: function(nodeId){ chart._get(nodeId).tags = ["sub level 0"]; chart.draw(); } },
             subLevels1: { text: "Move to sub level 1", icon: OrgChart.icon.details(24, 24, "#7A7A7A"), onClick: function(nodeId){chart._get(nodeId).tags = ["sub level 1"]; chart.draw(); } },
             subLevels2: { text: "Move to sub level 2", icon: OrgChart.icon.details(24, 24, "#7A7A7A"), onClick: function(nodeId){chart._get(nodeId).tags = ["sub level 2"]; chart.draw(); } },
             subLevels3: { text: "Move to sub level 3", icon: OrgChart.icon.details(24, 24, "#7A7A7A"), onClick: function(nodeId){chart._get(nodeId).tags = ["sub level 3"]; chart.draw(); } }
         },
         tags: {
             "sub level 0": {
                 subLevels: 0,
             },
             "sub level 1": {
                 subLevels: 1
             },
             "sub level 2": {
                 subLevels: 2
             },
             "sub level 3": {
                 subLevels: 3
             },
             "no menu": {
                 template: "noMenuTemplate"
             }
         },
         nodes: [
             { id: 1, tags: ["sub level 0", "no menu"] },
             { id: 2, pid: 1, tags: ["sub level 0"]},            
             { id: 3, pid: 1, tags: ["sub level 1"] },
             { id: 4, pid: 1, tags: ["sub level 2"] },
             { id: 5, pid: 1, tags: ["sub level 3"] }
 
         ]
     });
 };
 