window.onload = function () {
 
    var colors = ["#FFCA28", "#F57C00", "#039be5"]
  
    OrgChart.templates.ana.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[0] + '" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
    OrgChart.templates.color0 = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.color0.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[0] + '" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
    OrgChart.templates.color1 = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.color1.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[1] + '" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
    OrgChart.templates.color2 = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.color2.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[2] + '" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
  
        var chart = new OrgChart(document.getElementById("tree"), {
          enableDragDrop: true,
        nodeBinding: {
              field_0: "name",
              field_1: "id",
              img_0: "img"
          },
        tags: {
          "color1": {
            template: "color1",
          },
          "color2": {
            template: "color2",
          }
         }
      });
  
      nodes = [
        { id: 1, name: "Denny Curtis", img: "https://cdn.balkan.app/shared/2.jpg" },
              { id: 2, pid: 1, tags: ["color1"], name: "Ashley Barnett", img: "https://cdn.balkan.app/shared/3.jpg" },
              { id: 3, pid: 1, tags: ["color2"], name: "Caden Ellison", img: "https://cdn.balkan.app/shared/4.jpg" },
              { id: 4, pid: 2, name: "Elliot Patel", img: "https://cdn.balkan.app/shared/5.jpg" },
              { id: 5, pid: 2, tags: ["color1"], name: "Lynn Hussain", img: "https://cdn.balkan.app/shared/6.jpg" },
              { id: 6, pid: 4, tags: ["color2"], name: "Tanner May", img: "https://cdn.balkan.app/shared/7.jpg" }
          ];
  
      
        var tempNode = {};
  
        var getNodeData = function(tempNode, node) {
          tempNode.name = node.name;
          tempNode.title = node.title;
          tempNode.img = node.img;
          tempNode.tags = node.tags;
        }
  
  
      document.querySelector('#swap').addEventListener('click', function(){
  
          var node1 = document.getElementById("id1").value - 1;
          var node2 = document.getElementById("id2").value - 1;
  
        
          getNodeData(tempNode, nodes[node2]);
  
          nodes[node2].name = nodes[node1].name;
          nodes[node2].title = nodes[node1].title;
          nodes[node2].img = nodes[node1].img;        
          nodes[node2].tags = nodes[node1].tags;
  
  
          nodes[node1].name = tempNode.name;
          nodes[node1].title = tempNode.title;
          nodes[node1].img = tempNode.img;        
          nodes[node1].tags = tempNode.tags;
  
  
          chart.draw();
      });;
       
          chart.load(nodes);
  
      }