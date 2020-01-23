window.onload = function() {
    var chart = new OrgChart(document.getElementById("tree"), {
        enableSearch: false,

        nodeBinding: {
            field_0: "id",
            field_1: "pid",
            img_0: "img"
        }
    });
    
    
    document.querySelector('#load-charts').addEventListener('change', function(){
     if (this.value == 'chart_1'){
         chart.load([
            { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" }
      
        ]);
     }
    else if (this.value == 'chart_2'){
			chart.load([
            { id: 4, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 5, pid: 4, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
            { id: 6, pid: 4, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
            { id: 7, pid: 4, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
      ]);
      }
    })
    
    chart.load([
            { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" }
      
        ]);
}