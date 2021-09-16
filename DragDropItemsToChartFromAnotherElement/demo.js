window.onload = function () {
    var currentNode = '';
    var clientXY = [0,0];


    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "id"// "name"
        }
    });

    var menu = new OrgChart.menuUI();
    menu.init(chart, {
        addAsAssistant: {
            icon: '',
            onClick: function(){
                currentNode.tags = ['assistant'];
                chart.addNode(currentNode);
            },
            text: 'Add As Assistant'
        },        
        addAsRegular: {
            icon: '',            
            onClick: function(){
                chart.addNode(currentNode);
            },
            text: 'Add As Regular'
        }
    });

    chart.on('redraw', function(){

        var nodeElements = document.querySelectorAll('[data-n-id]');
        
        for(var i = 0; i < nodeElements.length; i++){
            var nodeElement = nodeElements[i];
            nodeElement.ondrop = function(ev) {

               
                ev.preventDefault();   
                clientXY = [ev.clientX, ev.clientY];
                var id = ev.dataTransfer.getData("id");
                
                var item = document.querySelector('[data-id="' + id + '"]');
               
                var name = item.innerHTML;

                var nodeElement = ev.target;
                
                while(!nodeElement.hasAttribute('data-n-id')){
                    nodeElement = nodeElement.parentNode;
                    
                }                
                var pid = nodeElement.getAttribute('data-n-id');  

                
                chart.addNode({
                    id: id,
                    pid: pid,
                    name: name
                }, null, true);

                item.parentNode.removeChild(item);
            }

            nodeElement.ondragover = function(ev) {
                ev.preventDefault();
            }
        }
        
    });

    chart.on('add', function(sender, node){
        currentNode = node;
        menu.show(clientXY[0], clientXY[1]);
        return false;
    })

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