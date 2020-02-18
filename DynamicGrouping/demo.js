window.onload = function () {
        

    var chart = new OrgChart(document.getElementById("tree"), {
    nodeBinding: {
          field_0: "name",
          field_1: "title",
          img_0: "img"
      }
     
  });

  nodes = [
          { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/1.jpg" },
          { id: 2, pid: 1, name: "Tanner May", title: "Head", img: "https://cdn.balkan.app/shared/2.jpg" },
          { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
          { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
          { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
          { id: 6, pid: 3, name: "Ashley Barnett", title: "Developer", img: "https://cdn.balkan.app/shared/3.jpg" },
          { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
          
         

      ];

      function search(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                return myArray[i];
            }
        }
      }   


      function decNum(value) {
        for (var i in groups) {
          if (groups[i].name == value) {
              groups[i].num +=1;
              break; 
          }
        }
      }

      var groups = [];
      nodes.forEach(n => {

        if(n.title) {

          if (!Array.isArray(n.tags)){  
            n.tags = [];
          }
          
          if (!search(n.title, groups)) {
            var obj = {};
            obj.name = n.title;
            obj.num = 1;
            groups.push(obj);
            console.log(groups);
          }
          else {
            decNum(n.title);
          }
                      
          n.tags.push(n.title);
        }
      });

      groups.forEach(g => {
        if (g.num > 1) {
          chart.addTag(g.name,  {
             group: true,
             groupName: g.name,
             groupState: OrgChart.EXPAND,
            template: "group_grey"
          });
        }
      })

      chart.load(nodes);
  }