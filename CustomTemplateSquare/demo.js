


window.onload = function () {

    var chart = new OrgChart(document.getElementById("tree"), {
        template: "myTemplate",
        levelSeparation: 100,
        siblingSeparation: 70,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            field_2: "team",
            img_0: "img"
        },
        nodeMenu: {
            details: { text: "Details" },
            edit: { text: "Edit" },
            add: { text: "Add" },
            remove: { text: "Remove" }
        },
        tags: {
            dotted: {
                template: "myTemplateDotted"
            },
            vacant: {
              template: "myTemplateVacant"
            }
        },     
       
    });

    nodes = [
            { id: 1, name: "Denny Curtis", title: "CEO", team: "Overall team: x", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 2, pid: 1, name: "Ashley Barnett", title: "Dev Manager", team: "Overall team: x", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", team: "Overall team: x", img: "https://cdn.balkan.app/shared/4.jpg" },
            { id: 4, pid: 1, tags: ["dotted"], name: "Elliot Patel", title: "Sales", team: "Overall team: x" },
            { id: 5, pid: 2, tags: ["vacant"], name: "Vacant", title: "Sales", team: "Overall team: x" },
            { id: 7, pid: 2, tags: ["vacant"], name: "Vacant", title: "Sales", team: "Overall team: x" }
        ];


        
    var selectedNode = null;

    function switchSelected(node) {

      if (selectedNode != null) {
        selectedNode.classList.remove("selected");
      }  
      node.classList.add("selected");
      selectedNode = node;
    }


    chart.on('click', function(sender, args){
      var nodeElement = sender.getNodeElement(args.node.id);  
      switchSelected(nodeElement);
    });

    document.querySelector('body').addEventListener('click', function(evt) {
    
      if (evt.target.classList.contains('edit-photo') ) {
        selectedNode.classList.remove("selected");  
    
      }

    }, true); 


    chart.nodeMenuUI.on('show', function(sender, args){
       var nodeElement = chart.getNodeElement(args.firstNodeId); 
       switchSelected(nodeElement);
    });

    chart.load(nodes);
  }
};