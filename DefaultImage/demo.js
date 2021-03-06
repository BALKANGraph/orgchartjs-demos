window.onload = function () {
   
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "ula",
        nodeBinding: {
            field_0: "Employee Name",
            field_1: "Title",
            img_0: "Photo"
            
        },
        nodeMenu: {
            details: { text: "Details" },
            edit: { text: "Edit" },
            add: { text: "Add" },
            remove: { text: "Remove" }
        }           
  });
 
  nodes = [
        { id: 1, "Employee Name": "Denny Curtis", Title: "CEO", Photo: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, "Employee Name": "Ashley Barnett", Title: "Sales Manager", Photo: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, "Employee Name": "Caden Ellison", Title: "Dev Manager", Photo: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, "Employee Name": "Elliot Patel", Title: "Sales", Photo: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, "Employee Name": "Lynn Hussain", Title: "Sales", Photo: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 3, "Employee Name": "Tanner May", Title: "Developer", Photo: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 3, "Employee Name": "Fran Parsons", Title: "Developer" }
    ];
 
    chart.on('field', function(sender, args){
        if (args.name == "Photo" && args.value == undefined) {
            args.value = "https://cdn.balkan.app/shared/OrgChart-JS.svg";
        }
      });
 
 chart.load(nodes);    
 };