window.onload = function () {

    var chart = new OrgChart(document.getElementById('tree'), {
        template: 'ana',
        nodeBinding: {
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
    
    
    chart.load([
        { id: 0, tooltip: 'At vero eos et accusamus et iusto odio'  },
        { id: 1, pid: 0, tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { id: 2, pid: 0, tooltip: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
        { id: 3, pid: 1, tooltip: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti' },
        { id: 4, pid: 1, tooltip: 'Lorem ipsum dolor sit amet' },
        { id: 5, pid: 2, tooltip: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
        { id: 6, pid: 2, tooltip: 'At vero eos et accusamus et iusto odio dignissimos' }
    ]);
    
    
    };