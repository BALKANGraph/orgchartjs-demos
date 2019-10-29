
window.onload = function () { 
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "deborah",
          mouseScrool: OrgChart.action.none,
      nodeBinding: {
               img_0: "img",
          field_0: "name",
          field_1: "title",
      },
     nodes: [
          { id: 1, name: "Amber McKenzie", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut scelerisque eros.", img: "https://balkangraph.com/js/img/2.jpg" },
          { id: 2, pid: 1, name: "Ava Field", title: "Suspendisse molestie dolor porttitor ante lobortis, id dapibus turpis eleifend.", img: "https://balkangraph.com/js/img/3.jpg"},
          { id: 3, pid: 1, name: "Rhys Harper", title: "Sed varius ligula non odio vulputate feugiat.", img: "https://balkangraph.com/js/img/4.jpg"}
      ]
  });   
  
  chart.editUI.on('field', function(sender, args){
     if (args.type == 'details' && args.name == 'title'){

          var txt = args.field.querySelector('input');
          var txtVal = txt.value;
          if (txt){
                                 
              var pEl = document.createElement("p");
              
              pEl.innerHTML = txtVal;
              
              pEl.style.width = '100%';                    
              pEl.style.fontSize = '16px';
              pEl.style.color = 'rgb(122, 122, 122)';
              pEl.style.marginTop = '1px';
                    
              var parent = args.field.querySelector('div');
              parent.appendChild(pEl);

              txt.remove();

          }
      }
  });
};
