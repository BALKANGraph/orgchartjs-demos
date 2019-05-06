

window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "name"
        }
    });

    chart.on('redraw', function(){

        var nodeElements = document.querySelectorAll('[node-id]');
        
        for(var i = 0; i < nodeElements.length; i++){
            var nodeElement = nodeElements[i];
            nodeElement.ondrop = function(ev) {
                ev.preventDefault();   
                var id = ev.dataTransfer.getData("id");
                var item = document.querySelector('[data-id="' + id + '"]');
                var name = item.innerHTML;

                var nodeElement = ev.target;
                while(!nodeElement.hasAttribute('node-id')){
                    nodeElement = nodeElement.parentNode;
                }                
                var pid = nodeElement.getAttribute('node-id');               
                
                chart.addNode({
                    id: id,
                    pid: pid,
                    name: name
                });

                item.parentNode.removeChild(item);
            }

            nodeElement.ondragover = function(ev) {
                ev.preventDefault();
            }
        }
        
    });

    chart.load([
        {id: 1, name: 'Janae Barrett'},
        {id: 2, pid: 1, name: 'Lexie Cole' },
        {id: 3, pid: 1, name: 'Aaliyah Webb' },
    ]);

    var items = document.querySelectorAll('.item');
    for(var i = 0; i < items.length; i++){
        var item = items[i];
        item.draggable = true;
        item.ondragstart = function(ev) {
            ev.dataTransfer.setData("id", ev.target.getAttribute('data-id'));
        }
    }
};
