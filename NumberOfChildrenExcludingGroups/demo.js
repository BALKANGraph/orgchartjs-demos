OrgChart.templates.rony.field_number_children = '<circle cx="60" cy="110" r="15" fill="#F57C00"></circle><text fill="#ffffff" x="60" y="115" text-anchor="middle">{val}</text>';

window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
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
            field_number_children: "numberOfChildren"
        },
        tags: {
            "group": {
                template: "group",
            }
        }
    });


    var iterate = function (c, n, args){

         for (i = 0; i<n.childrenIds.length; i++) {
          var node = c.getNode(n.childrenIds[i]);
           if (node.stChildrenIds.length <= 0) {
              args.count += 1;
           }
         }

         
       for(var i = 0; i < n.stChildrenIds.length; i++){
       		var node = c.getNode(n.stChildrenIds[i]);
          iterate(c, node, args);  
        }
        
        for(var i = 0; i < n.childrenIds.length; i++){    
        		
            var node = c.getNode(n.childrenIds[i]);
            	iterate(c, node, args);  
            
        }
       	args.count += n.stChildrenIds.length;
    }

     chart.on('field', function(sender, args){
         if (args.name == "numberOfChildren"){
             var arg = {
                 count: 0
             };
             iterate(sender, chart.getNode(args.data.id), arg);
             args.value = arg.count;
         }
     });


    chart.load([

        { id: "devs", name: "Dev Team", pid: 4, tags: ["devs-group", "group"], description: "Research and Development" },
        { id: "sales", name: "Sales Team", pid: 9, tags: ["sales-group", "group"], description: "Sales and Marketing" },
        { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 4, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: "hrs", pid: 1, name: "HR Team", tags: ["hrs-group", "group"], description: "Human Resource | London" },
        { id: 5, stpid: "hrs", name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
        { id: 6, stpid: "hrs", name: "Marcel Brooks", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" },
        { id: 7, stpid: "hrs", name: "Maxwell Bates", title: "HR", img: "https://cdn.balkan.app/shared/12.jpg" },
        { id: 8, stpid: "hrs", name: "Asher Watts", title: "Junior HR", img: "https://cdn.balkan.app/shared/13.jpg" },
        { id: 9, pid: 1, name: "Skye Terrell", title: "Manager", img: "https://cdn.balkan.app/shared/12.jpg" },
        { id: 10, stpid: "devs", name: "Jordan Harris", title: "JS Developer", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 11, stpid: "devs", name: "Will Woods", title: "JS Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 12, stpid: "devs", name: "Skylar Parrish", title: "node.js Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
        { id: 13, stpid: "devs", name: "Ashton Koch", title: "C# Developer", img: "https://cdn.balkan.app/shared/9.jpg" },
        { id: 14, stpid: "sales", name: "Bret Fraser", title: "Sales", img: "https://cdn.balkan.app/shared/13.jpg" },
        { id: 15, stpid: "sales", name: "Steff Haley", title: "Sales", img: "https://cdn.balkan.app/shared/14.jpg" }
    ]);
};
