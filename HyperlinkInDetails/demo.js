
window.onload = function () { 
    var chart = new OrgChart(document.getElementById("tree"), {
      mouseScrool: OrgChart.action.none,
      nodeBinding: {
               img_0: "img",
          field_0: "name",
          field_1: "company",
      },
     nodes: [
          { id: 1, name: "Amber McKenzie", company: "BALKANGraph", img: "https://cdn.balkan.app/shared/2.jpg" },
          { id: 2, pid: 1, name: "Ava Field", company: "BALKANGraph", img: "https://cdn.balkan.app/shared/3.jpg"},
          { id: 3, pid: 1, name: "Rhys Harper", company: "BALKANGraph", img: "https://cdn.balkan.app/shared/4.jpg"}
      ]
  });   
  
  chart.editUI.on('field', function(sender, args){
     if (args.type == 'details' && args.name == 'company'){

          var txt = args.field.querySelector('input');
          var txtVal = txt.value;
          if (txt){
                                 

          var a = document.createElement('a');
      		var linkText = document.createTextNode("BALKANGraph.com");
      	  a.appendChild(linkText);
          a.title = "my title text";
          a.href = "https://balkangraph.com/";
          a.target = "_blank";
     
               
              var parent = args.field.querySelector('div');
              var br = document.createElement("br");
              parent.appendChild(br);
              parent.appendChild(a);

              txt.remove();

          }
      }
  });
};
