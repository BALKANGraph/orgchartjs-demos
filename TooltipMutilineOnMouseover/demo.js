window.onload = function () {

    var chart = new OrgChart(document.getElementById('tree'), {
        template: 'ana',
        nodeBinding: {
            field_0: "name",
            tooltip: 'tooltip'
        }
    });
    
    chart.on('redraw', function (sender) {
        var nodeElements = sender.element.querySelectorAll('[node-id]');
        for (var i = 0; i < nodeElements.length; i++) {
            var nodeElement = nodeElements[i];
            nodeElement.addEventListener('mouseover', function (e) {
                var id = this.getAttribute('node-id');
                var tooltip = document.getElementById("tooltip");
                var tooltipContent = document.querySelector(".tooltip-content");
               
                var position = OrgChart._menuPosition(this, tooltip, sender.getSvg());
                
                tooltipContent.innerHTML = sender.get(id).tooltip;
                tooltip.style.left = position.x + 250 + "px";
                tooltip.style.top =  position.y  +   "px";
                tooltip.classList.add("visible");
    
            });
        
            nodeElement.addEventListener('mouseleave', function () {
                var tooltip = document.getElementById("tooltip");
                if (tooltip){
                    tooltip.classList.remove('visible');
                }
            });
        }
    });

    // tooltip on a field
    // chart.on('redraw', function (sender) {
    //     var nodeElements = sender.element.querySelectorAll('[node-id]');
    //     var fieldElements = sender.element.querySelectorAll('[node-id] text');
    //     for (var i = 0; i < fieldElements.length; i++) {
    //        var nodeElement = nodeElements[i];
    //         var fieldElement = fieldElements[i];
    //        fieldElement.addEventListener('mouseover', function (e) {
    //             var id = nodeElement.getAttribute('node-id');
    //             var tooltip = document.getElementById("tooltip");
    //             var tooltipContent = document.querySelector(".tooltip-content");
               
    //             var position = OrgChart._menuPosition(this, tooltip, sender.getSvg());
                
    //             tooltipContent.innerHTML = sender.get(id).tooltip;
    //             tooltip.style.left = position.x + 50 + "px";
    //             tooltip.style.top =  position.y + "px";
    //             tooltip.classList.add("visible");
    
    //         });
        
    //         fieldElement.addEventListener('mouseleave', function () {
    //             var tooltip = document.getElementById("tooltip");
    //             if (tooltip){
    //                 tooltip.classList.remove('visible');
    //             }
    //         });
    //     }
    // });
    
    
    chart.load([
        { id: 0, name: "node0", tooltip: 'At vero eos et accusamus et iusto odio'  },
        { id: 1, name: "node1", pid: 0, tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { id: 2, name: "node2", pid: 0, tooltip: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
        { id: 3, name: "node3", pid: 1, tooltip: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti' },
        { id: 4, name: "node4", pid: 1, tooltip: 'Lorem ipsum dolor sit amet' },
        { id: 5, name: "node5", pid: 2, tooltip: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
        { id: 6, name: "node6", pid: 2, tooltip: 'At vero eos et accusamus et iusto odio dignissimos' }
    ]);
    
    
    };