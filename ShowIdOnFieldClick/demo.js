
window.onload = function () { 

    var chart = new OrgChart(document.getElementById("tree"), {
    		nodeMouseClick: OrgChart.action.none,
        nodeBinding: {
            field_0: "f"
        }
    });
    
    chart.on('redraw', function(){
    	var filedElements = document.querySelectorAll('.field_0');
      for (var i = 0; i < filedElements.length; i++){
      		filedElements[i].addEventListener('click', function(e){
          	
          	alert('id: ' + this.parentNode.getAttribute('node-id'));
          });
      }
    })
    
    chart.load( [{ id: 1, f: "Clickable node"}, { id: 2, pid: 1, f: "Clickable node" },{ id: 3, pid: 1, f: "Clickable node" } ]);
};
