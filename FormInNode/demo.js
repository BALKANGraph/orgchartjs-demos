OrgChart.templates.ana.html = '<foreignobject class="node" x="50" y="40" width="500" height="150"><div class="table-section"><form><input value="{val}" type="text" class="input-field"><br /><button type="button" class="btn">Submit</button></form></div></foreignobject>';
        
var chart = new OrgChart(document.getElementById("tree"), {
    nodeMouseClick: OrgChart.action.none,
    enableSearch: false,
    nodeBinding: {
        field_0: "name",
        html: "html"
    }
});  

      

            chart.on('redraw', function (sender, args) {
                
                var inputTableElements = document.querySelectorAll('.input-field');
                
                for(var i = 0; i < inputTableElements.length; i++){
                    inputTableElements[i].addEventListener('click', function(e){
                        e.preventDefault();
                        e.cancelBubble = true;
                        var inputValueLength = this.value ? this.value.length : 0;
                        this.focus();
                        this.setSelectionRange(inputValueLength, inputValueLength);
                    });
                    
				inputTableElements[i].addEventListener('keyup', function(e){
        
        	    var element = e.target;
                while(element && !element.hasAttribute('node-id')){
                	element  = element.parentNode;
                }
                
                var id = element.getAttribute('node-id');
                var data = chart._get(id);
                data.html = this.value;
        				chart.update(data);
  		
                    });
                }

            });

    chart.load([
        { id: "1", html: "asdfasd" },
        { id: "2", pid: "1", name: "Ava Field" },
        { id: "3", pid: "1", name: "Peter Stevens" }
    ]);               
