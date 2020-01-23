
window.onload = function () { 
    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
          field_0: "name",
          field_1: "title"          
        },
      });

       nodes = [
            { id: 1, myCondition: true, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
            { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
            { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
            { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
        ];

        
        for (var i = 0; i < nodes.length; i++) {

          if (nodes[i].myCondition == true){
            nodes[i].name = "<tspan style='fill:red;'>" + nodes[i].name + "</tspan>";
          }
        }

        chart.load(nodes);
};
