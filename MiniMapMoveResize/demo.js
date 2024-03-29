window.onload = function () {
        

    var chart = new OrgChart(document.getElementById("tree"), {
      miniMap: true,
      enableDragDrop: true,
    nodeBinding: {
          field_0: "name",
          field_1: "title",
          img_0: "img"
      },
    
  });

  nodes = [
    { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
          { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
          { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
          { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
          { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
          { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" }
      ];

   
      chart.load(nodes);

      var miniMap = document.getElementsByClassName("mini-map");

      var myMiniMap = miniMap[0];
      myMiniMap.style.removeProperty("bottom");
      myMiniMap.style.top = '20px';
      myMiniMap.style.removeProperty("left");
      myMiniMap.style.right = '20px';

      document.querySelector("canvas[data-id='mini-map']").setAttribute('width' , '175');
      document.querySelector("canvas[data-id='mini-map']").setAttribute('height' , '98');
      chart.draw();

  }
  