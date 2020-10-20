window.onload = function () {

    var tooltip = '<g data-t-id="{id}" transform="matrix(0.001,0,0,0.001,{x},{y})" ><path stroke="#FFCA28" fill="#fff" d="M 0,0 L -10,-10 H -85 Q -90,-10 -90,-15  V -65   Q -90,-70 -85,-70 H 85 Q 90,-70 90,-65 V -15 Q 90,-10 85,-10 H 10  L 0,0 z" ></path>{text}</g>';

    var tooltipText = '<text text-anchor="middle" width="130" fill="#F57C00" x="0" y="-32">{val}</text>';



    var chart = new OrgChart(document.getElementById('tree'), {
        template: 'ana',
        orientation: OrgChart.orientation.bottom_left,
        enableSearch: false,
        nodeBinding: {
            tooltip: 'tooltip'
        }
    });

    chart.on('redraw', function (sender) {
        var nodeElements = sender.element.querySelectorAll('[node-id]');
        for (var i = 0; i < nodeElements.length; i++) {
            var nodeElement = nodeElements[i];
            nodeElement.addEventListener('mouseover', function () {
                var id = this.getAttribute('node-id');
                var tooltipElement = document.querySelector('[data-t-id="' + id + '"]');
                if (!tooltipElement) return;
                var transformStart = OrgChart._getTransform(tooltipElement);
                
                var transformEnd = transformStart.slice(0);
                transformEnd[0] = 1;
                transformEnd[3] = 1;
                OrgChart.anim(tooltipElement, { transform: transformStart }, { transform: transformEnd }, 300, OrgChart.anim.outBack);
            });
            nodeElement.addEventListener('mouseleave', function () {
                var id = this.getAttribute('node-id');
                var tooltipElement = document.querySelector('[data-t-id="' + id + '"]');
                if (!tooltipElement) return;
                var transformStart = OrgChart._getTransform(tooltipElement);
                var transformEnd = transformStart.slice(0);
                transformEnd[0] = 0.001;
                transformEnd[3] = 0.001;
                OrgChart.anim(tooltipElement, { transform: transformStart }, { transform: transformEnd }, 300, OrgChart.anim.inBack);
            });
        }
    });


    OrgChart.events.on('render', function (sender, args) {
        for (var i = 0; i < args.res.visibleNodeIds.length; i++) {
            var node = sender.getNode(args.res.visibleNodeIds[i]);
            var data = sender.get(node.id);
            if (data.tooltip) {
                var sss = OrgChart.wrapText(data.tooltip, tooltipText);


                args.content += tooltip
                    .replace('{x}', node.x + node.w / 2)
                    .replace('{y}', node.y + 5)
                    .replace('{id}', node.id)
                    .replace('{text}', tooltipText.replace('{val}', OrgChart.wrapText(data.tooltip, tooltipText)));
            }
        }
    });


    chart.load([{ id: 0 },
    { id: 1, pid: 0, tooltip: '1 my fancy tooltip' },
    { id: 2, pid: 0, tooltip: '2 my fancy tooltip' },
    { id: 3, pid: 1, tooltip: '3 my fancy tooltip' },
    { id: 4, pid: 1, tooltip: '4 my fancy tooltip' },
    { id: 5, pid: 2, tooltip: '5 my fancy tooltip' },
    { id: 6, pid: 2, tooltip: '6 my fancy tooltip' }
    ]);


};