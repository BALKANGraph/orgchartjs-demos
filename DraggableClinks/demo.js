OrgChart.events.on('redraw', function (sender) {
    var clinkElements = sender.element.querySelectorAll('[c-link-from]');
    for (var i = 0; i < clinkElements.length; i++) {
        var clinkElement = clinkElements[i];
        clinkElement.addEventListener('click', function () {
            var selected = sender.element.querySelector('.clink-selected');
            if (selected) {
                selected.classList.remove('clink-selected');
            }
            this.classList.add('clink-selected');

            var from = this.getAttribute('c-link-from');
            var to = this.getAttribute('c-link-to');

            for (var j = 0; j < sender.config.clinks.length; j++) {
                var clink = sender.config.clinks[j];

                if (clink.from == from && clink.to == to) {
                    OrgChart.events.publish('clicnk-click', [sender, clink]);
                    break;
                }
            }

        });
    }

    var nodeElements = sender.getSvg().querySelectorAll('[node-id]');
    for (var i = 0; i < nodeElements.length; i++) {
        nodeElements[i].sender = sender;
        nodeElements[i].addEventListener('mousedown', mousedownHandler);
    }
});


function mousedownHandler(e) {
    var sender = this.sender;

    var svg = e.target;
    while (svg.nodeName != 'svg') {
        svg = svg.parentNode;
    }

    var w = parseInt(svg.getAttribute('width'));
    var h = parseInt(svg.getAttribute('height'));


    var viewBox = svg.getAttribute("viewBox");
    viewBox = "[" + viewBox + "]";
    viewBox = viewBox.replace(/\ /g, ",");
    viewBox = JSON.parse(viewBox);

    var scaleX = w / viewBox[2];
    var scaleY = h / viewBox[3];

    var scale = scaleX > scaleY ? scaleY : scaleX;



    var fromnode = sender.getBGNode(this.getAttribute('node-id'));
    var tonode = null;


    var moveHandler = function (e) {
        if (tonode && (tonode.id != fromnode.id)) {
            var shortest = findShortestDistance(fromnode, tonode);
            line(svg, shortest.start, shortest.end);
        }
        else {
            var end = {
                x: (e.offsetX / scale + viewBox[0]),
                y: (e.offsetY / scale + viewBox[1])
            }
            var shortest = findShortestDistanceBetweenPointerAndNode(fromnode, end)
            line(svg, shortest.start, shortest.end);
        }

    };

    var mouseenterHandler = function () {
        tonode = sender.getBGNode(this.getAttribute('node-id'));
    }

    var mouseleaveHandler = function () {
        tonode = null;
    }

    var leaveHandler = function () {
        if (tonode && (tonode.id != fromnode.id)){
            sender.addClink(fromnode.id, tonode.id).draw();
        }
        removeLine();

        svg.removeEventListener('mousemove', moveHandler);
        svg.removeEventListener('mouseup', leaveHandler);
        svg.removeEventListener('mouseleave', leaveHandler);

        var nodeElements = sender.getSvg().querySelectorAll('[node-id]');
        for (var i = 0; i < nodeElements.length; i++) {
            nodeElements[i].removeEventListener('mouseenter', mouseenterHandler);
            nodeElements[i].removeEventListener('mouseleave', mouseleaveHandler);
        }
    };




    svg.addEventListener('mousemove', moveHandler);
    svg.addEventListener('mouseup', leaveHandler);
    svg.addEventListener('mouseleave', leaveHandler);

    var nodeElements = sender.getSvg().querySelectorAll('[node-id]');
    for (var i = 0; i < nodeElements.length; i++) {
        nodeElements[i].addEventListener('mouseenter', mouseenterHandler);
        nodeElements[i].addEventListener('mouseleave', mouseleaveHandler);
    }
}

function line(svg, start, end) {

    var line = document.querySelector('#bgline');
    if (!line) {
        var xmlns = "http://www.w3.org/2000/svg";
        line = document.createElementNS(xmlns, 'line');
        line.setAttributeNS(null, 'stroke', 'blue');
        line.setAttributeNS(null, 'stroke-width', '2');
        line.setAttributeNS(null, 'id', 'bgline');
        line.setAttributeNS(null, 'marker-start', 'url(#dotSelected)');
        line.setAttributeNS(null, 'marker-end', 'url(#arrowSelected)');

        svg.appendChild(line);
    }

    line.setAttributeNS(null, 'x1', start.x);
    line.setAttributeNS(null, 'y1', start.y);
    line.setAttributeNS(null, 'x2', end.x);
    line.setAttributeNS(null, 'y2', end.y);
}

function removeLine() {
    var line = document.querySelector('#bgline');
    if (line) {
        line.parentNode.removeChild(line);
    }
}


OrgChart.events.on('renderdefs', function (sender, args) {
    args.defs += '<marker id="arrowSelected" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="blue" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotSelected" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="blue" /></marker>';
});

function findShortestDistance(n1, n2) {
    var n1points = [];
    n1points.push({
        x: n1.x + n1.w / 2,
        y: n1.y
    });
    n1points.push({
        x: n1.x + n1.w,
        y: n1.y + n1.h / 2
    });
    n1points.push({
        x: n1.x + n1.w / 2,
        y: n1.y + n1.h
    });
    n1points.push({
        x: n1.x,
        y: n1.y + n1.h / 2
    });

    var n2points = [];
    n2points.push({
        x: n2.x + n2.w / 2,
        y: n2.y
    });
    n2points.push({
        x: n2.x + n2.w,
        y: n2.y + n2.h / 2
    });
    n2points.push({
        x: n2.x + n2.w / 2,
        y: n2.y + n2.h
    });
    n2points.push({
        x: n2.x,
        y: n2.y + n2.h / 2
    });

    var dist = null;
    var distPoint = {};
    for (var i = 0; i < n1points.length; i++) {
        for (var j = 0; j < n2points.length; j++) {
            var cur = Math.sqrt((n2points[j].x - n1points[i].x) * (n2points[j].x - n1points[i].x) + (n2points[j].y - n1points[i].y) * (n2points[j].y - n1points[i].y));
            if (dist == null) {
                dist = cur;
                distPoint = {
                    i: i,
                    j: j
                };
            }
            else if (cur < dist) {
                distPoint = {
                    i: i,
                    j: j
                };
                dist = cur;
            }
        }
    }

    return {
        start: n1points[distPoint.i],
        end: n2points[distPoint.j]
    }
}


function findShortestDistanceBetweenPointerAndNode(n1, p) {
    var n1points = [];
    n1points.push({
        x: n1.x + n1.w / 2,
        y: n1.y
    });
    n1points.push({
        x: n1.x + n1.w,
        y: n1.y + n1.h / 2
    });
    n1points.push({
        x: n1.x + n1.w / 2,
        y: n1.y + n1.h
    });
    n1points.push({
        x: n1.x,
        y: n1.y + n1.h / 2
    });


    var dist = null;
    var distPoint = null;
    for (var i = 0; i < n1points.length; i++) {
        var cur = Math.sqrt((p.x - n1points[i].x) * (p.x - n1points[i].x) + (p.y - n1points[i].y) * (p.y - n1points[i].y));
        if (dist == null) {
            dist = cur;
            distPoint = i;
        }
        else if (cur < dist) {
            distPoint = i;
            dist = cur;
        }
    }

    return {
        start: n1points[distPoint],
        end: p
    }
}



    

        OrgChart.CLINK_CURVE = 1.75;

        

		var chart = new OrgChart(document.getElementById('tree'), {
            nodeBinding:{
                field_0: 'id',
                field_1: 'pid'
            },

       });
        


		chart.load([
				{ id: 0},
				{ id: 1, pid: 0},
				{ id: 2, pid: 0 }
        ]);