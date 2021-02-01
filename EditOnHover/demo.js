window.onload = function () {
  var chart = new OrgChart(document.getElementById("tree"), {
            nodeBinding: {
                field_0: "name"
            }
        });

        chart.on('redraw', function(){
	        var nodeElements = document.querySelectorAll('[node-id]');
            for(var i = 0; i < nodeElements.length; i++){
  	            nodeElements[i].addEventListener('mouseover', function(e){
                    e.preventDefault();
                    
                    if (e.target.tagName != 'text'){
                        var nodeId = this.getAttribute('node-id');
                        chart.editUI.show(nodeId, true);                
                    }

                });

            
                nodeElements[i].addEventListener('mouseleave', function(e){
                    e.preventDefault();
                    document.querySelector('.edit-wrapper').style.display = 'none';
                });
            }
        });

chart.load([
  { id: 1, name: "Denny Curtis" },
  { id: 2, pid: 1, name: "Ashley Barnett" },
  { id: 3, pid: 1, name: "Caden Ellison" },
  { id: 4, pid: 2, name: "Elliot Patel" },
  { id: 5, pid: 2, name: "Lynn Hussain" },
  { id: 6, pid: 3, name: "Tanner May" },
  { id: 7, pid: 3, name: "Fran Parsons" }
]);