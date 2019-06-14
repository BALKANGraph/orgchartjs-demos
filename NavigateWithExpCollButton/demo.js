

window.onload = function () {

    var chart = new OrgChart(document.getElementById('tree'), {
        template: 'luba',
        nodeMouseClick: OrgChart.action.none,
        enableSearch: false,
        nodeBinding: {
            field_0: 'id',
            field_1: 'pid'
        },
        collapse:{
            level: 2,
            allChildren: true
        }
    });

    chart.on('expcollclick', function(sender, action, id, ids){            
        sender.config.roots = [id];
    });

    chart.on('redraw', function(sender){
        var roots = sender.config.roots;            
        var nav = document.querySelector('nav');

        
        nav.innerHTML = '';

        if (roots && roots.length){
            var id = roots[0];
            var node = sender.getBGNode(id);


            while(node){         
                node = sender.getBGNode(node.pid);

                if (node){
                    var span = document.createElement('span');
                    span.innerHTML = ' > ';
                    nav.appendChild(span);
                    
                    nav.insertBefore(span, nav.firstChild);

                    var a = document.createElement('a');
                    a.href = 'javascript:void(0)';
                    a.innerHTML = node.id;
                    nav.insertBefore(a, nav.firstChild);

                    a.addEventListener('click', function(){
                        var root = sender.getBGNode(this.innerHTML);
                        sender.config.roots = [root.id];
                        sender.draw(OrgChart.action.init);
                    });
                }



            }
        }
    });

    chart.load([
        { id: 0 },
        { id: 1, pid: 0 },
        { id: 2, pid: 0 },
        { id: 3, pid: 0 },
        { id: 4, pid: 1 },
        { id: 5, pid: 1 },
        { id: 6, pid: 1 },
        { id: 7, pid: 2 },
        { id: 8, pid: 2 },
        { id: 9, pid: 2 },
        { id: 10, pid: 3 },
        { id: 11, pid: 3 },
        { id: 12, pid: 3 },
        { id: 13, pid: 4 },
        { id: 14, pid: 4 },
        { id: 15, pid: 4 },
        { id: 16, pid: 5 },
        { id: 17, pid: 5 },
        { id: 18, pid: 5 },
        { id: 19, pid: 6 },
        { id: 20, pid: 6 },
        { id: 21, pid: 6 },
        { id: 22, pid: 7 },
        { id: 23, pid: 7 },
        { id: 24, pid: 7 },
        { id: 25, pid: 8 },
        { id: 26, pid: 8 },
        { id: 27, pid: 8 },
        { id: 28, pid: 9 },
        { id: 29, pid: 9 },
        { id: 30, pid: 9 },
        { id: 31, pid: 10 },
        { id: 32, pid: 10 },
        { id: 33, pid: 10 },
        { id: 34, pid: 11 },
        { id: 35, pid: 11 },
        { id: 36, pid: 11 },
        { id: 37, pid: 12 },
        { id: 38, pid: 12 },
        { id: 39, pid: 12 },
        { id: 40, pid: 12 }
    ]);

};
