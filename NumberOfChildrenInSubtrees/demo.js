OrgChart.templates.rony.field_number_children = '<circle cx="60" cy="110" r="15" fill="#F57C00"></circle><text fill="#ffffff" x="60" y="115" text-anchor="middle">{val}</text>';

window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
    layout: OrgChart.tree,
        template: "rony",
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
            img_0: "img",
            field_number_children:  function (sender, node) {	
              var args = {
                   count: 0,
                   mainNodeId: node.id
              };
              if (node.stParent && node.childrenIds.length == 0) {
                console.log("node " + node.id + " is in group");
                iterate(sender, node.stParent, args);
                return args.count;
              }
              else {
                iterate(sender, node, args);
                return args.count;
              }
            }
        },
        tags: {
            "group": {
                template: "group",
            }
        }
    });


    var iterate = function (c, n, args){

      if (!n.stChildrenIds.includes(args.mainNodeId))     {
         for (i = 0; i<n.childrenIds.length; i++) { // iterate children of the current node
          var node = c.getNode(n.childrenIds[i]); 
           if (node.stChildrenIds.length <= 0) { // if the child is not a group
              
              args.count += 1; // count that child
           }
         }
      }


       for(var i = 0; i < n.stChildrenIds.length; i++){
       		var node = c.getNode(n.stChildrenIds[i]);
           if (node.id != args.mainNodeId) 

              iterate(c, node, args);  
        }
     
        for(var i = 0; i < n.childrenIds.length; i++){    
        		
            var node = c.getNode(n.childrenIds[i]);
            	iterate(c, node, args);  
            
        }

       	
      if (!n.stChildrenIds.includes(args.mainNodeId))     {
        args.count += n.stChildrenIds.length;
      }
    } 


    chart.load([
          { id: "g0", tags: ["group"] },
          { id: 0, stpid: "g0", name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },

          { id: "g3", pid: "g0", tags: ["group"] },
          { id: 3, stpid: "g3", name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },


          { id: "g31", pid: 3, tags: ["group"] },
          { id: "g32", pid: 3, tags: ["group"] },

          { id: 5, stpid: "g31", name: "Asher Watts", title: "Junior HR", img: "https://cdn.balkan.app/shared/13.jpg" },
          { id: 6, pid: 5, name: "Skye Terrell", title: "Manager", img: "https://cdn.balkan.app/shared/12.jpg" },
          { id: 7, stpid: "g32", name: "Marcel Brooks", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" },
          { id: 8, pid: 7, name: "Maxwell Bates", title: "HR", img: "https://cdn.balkan.app/shared/12.jpg" },
          { id: 10, pid: 5, name: "Bret Fraser", title: "HR", img: "https://cdn.balkan.app/shared/13.jpg" },
          { id: 16, pid: 7, name: "Ashley Barnett", title: "Manager", img: "https://cdn.balkan.app/shared/1.jpg" },

          { id: "g4", pid: "g0", tags: ["group"] },
          { id: 9, stpid: "g4", name: "Jordan Harris", title: "JS Developer", img: "https://cdn.balkan.app/shared/6.jpg" },


          { id: "g41", pid: 9, tags: ["group"] },
          { id: "g42", pid: 9, tags: ["group"] },

          { id: 11, stpid: "g41", name: "Will Woods", title: "JS Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
          { id: 12, pid: 11, name: "Skylar Parrish", title: "node.js Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
          { id: 17, pid: 11, name: "Caden Ellison", title: "node.js Developer", img: "https://cdn.balkan.app/shared/2.jpg" },
          { id: 13, stpid: "g42", name: "Ashton Koch", title: "C# Developer", img: "https://cdn.balkan.app/shared/9.jpg" },
          { id: 14, pid: 13, name: "Bret Fraser", title: "JS Developer", img: "https://cdn.balkan.app/shared/13.jpg" },
          { id: 15, pid: 13, name: "Steff Haley", title: "JS Developer", img: "https://cdn.balkan.app/shared/14.jpg"  },

        
    ]);
};
