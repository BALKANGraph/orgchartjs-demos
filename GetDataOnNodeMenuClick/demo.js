
window.onload = function () { 
    var chart = new OrgChart(document.getElementById("tree"), {
        nodeMenu: {
            add: { text: "Add New" },
            remove: { text: "Remove" },
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
          tags: {
            M: {
                group: true,
                groupName: "Directors",
                groupState: OrgChart.EXPAND,
                template: "group_grey"
            }
        }
    });
    
       chart.nodeMenuUI.on('show', function(sender, args){
       		alert(sender.obj.getBGNode(args.firstNodeId).tags);
          
          var node = sender.obj.getBGNode(args.firstNodeId);
          
          if (node.isChildOfGroup){
          	node = sender.obj.getBGNode(node._groupParentNodeId);
          }
       		if (node.childrenIds.length){
           args.menu = {
              add: { text: "Add New" },
           }
          }
          else{
          args.menu = {
              add: { text: "Add New" },
            	remove: { text: "Remove" },
           }
          }
    });
    
    chart.load([
            { id: 1, tags: ["F"], name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 2, pid: 1, tags: ["M"], name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 11, pid: 1, tags: ["M"], name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 3, pid: 1, tags: ["R"],name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
            { id: 4, pid: 2, tags: ["R"],name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 5, pid: 2, tags: ["T"],name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
            { id: 6, pid: 3, tags: ["Y"],name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
            { id: 7, pid: 3, tags: ["U"],name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
        ]);
};
