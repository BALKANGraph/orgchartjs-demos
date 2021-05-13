OrgChart.templates.ana.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#039BE5" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"><title class="screen-reader-text"></title></rect>';        
OrgChart.templates.ana.plus = "";        
OrgChart.templates.ana.minus = "";



var chart = new OrgChart(document.getElementById("tree"), {
    template: 'ana',
    nodeBinding: {
        field_0: 'name',
        screen_reader: 'screen_reader'
    }
});

var centerTimeout = null;
var centered = null;

function center(id){
    centered = id;   
    chart.center(id);
}

chart.on('redraw', function(sender){
    var screenReaderTextElements = document.querySelectorAll('.screen-reader-text');
    for(var i = 0; i < screenReaderTextElements.length; i++){
        var screenReaderTextElement = screenReaderTextElements[i];
        var rectElement = screenReaderTextElement.parentNode;
        var nodeElement = rectElement.parentNode;

        var id = nodeElement.getAttribute('node-id');
        var data = sender._get(id);
        var node = sender.getNode(id);

        rectElement.setAttribute('tabindex', node.tabIndex);                
        if (data.screen_reader){
            screenReaderTextElement.innerHTML = data.screen_reader;
        }

        rectElement.addEventListener('keydown',  function(e){
            var currentNodeElement = e.target.parentNode;
            var id = currentNodeElement.getAttribute('node-id');
            var node = sender.getNode(id);

            if (e.keyCode == 39){//right
                if (node.rightNeighbor){
                    center(node.rightNeighbor.id);
                }
            }
            else if (e.keyCode == 37){//left
                if (node.leftNeighbor){
                    center(node.leftNeighbor.id);
                }
            }                    
            else if (e.keyCode == 38){//up
                if (node.parent){
                    center(node.parent.id);
                }
            }                    
            else if (e.keyCode == 40){//down
                if (node.childrenIds.length){
                    center(node.childrenIds[0]);
                }  
            }
        });
    }

    if (centered){
        clearTimeout(centerTimeout);
            centerTimeout = setTimeout(function(){
                
            var nodeElement = chart.getNodeElement(centered).children[0];
            nodeElement.focus();
        }, 10);           
    }
});


function iterate(c, n, r){
    if (Array.isArray(n)){
        for(var i = 0; i < n.length; i++){
            iterate(c, n[i], r);
        }
        return;
    }
    n.tabIndex = r.tabIndex;
    r.tabIndex++;

    for(var i = 0; i < n.childrenIds.length; i++){
        iterate(c, c.getNode(n.childrenIds[i]), r);
    }
}

chart.on('render', function(sender){
    var tabIndex  = 0;
    iterate(sender, sender.roots, {tabIndex: 0})
});


chart.on('init', function(sender){   
    center(sender.roots[0].id);
});

chart.on('click', function(sender, args){
    center(args.node.id);     
    return false;
});


chart.load([
    { id: 1, name: "Denny Curtis", screen_reader: 'Denny Curtis Test' },
    { id: 2, pid: 1, name: "Ashley Barnett", screen_reader: 'Ashley Barnett' },
    { id: 3, pid: 1, name: "Caden Ellison", screen_reader: "Caden Ellison" },
    { id: 4, pid: 3, name: "Elliot Patel", screen_reader: "Elliot Patel" },
    { id: 5, pid: 2, name: "Lynn Hussain", screen_reader: "Lynn Hussain" },
    { id: 6, pid: 3, name: "Tanner May", screen_reader: "Tanner May" },
    { id: 7, pid: 3, name: "Fran Parsons 1", screen_reader: "Fran Parsons 1" },
    { id: 8, pid: 4, name: "Fran Parsons 2", screen_reader: "Fran Parsons 2" },
    { id: 9, pid: 8, name: "Fran Parsons 3", screen_reader: "Fran Parsons 3" },
    { id: 10, pid: 9, name: "Fran Parsons 4", screen_reader: "Fran Parsons 4" },
    { id: 11, pid: 10, name: "Fran Parsons 6", screen_reader: "Fran Parsons 6" },
    { id: 12, pid: 1, name: "Fran Parsons 7", screen_reader: "Fran Parsons 7" },
    { id: 13, pid: 10, name: "Fran Parsons 8", screen_reader: "Fran Parsons 8" },
    { id: 14, pid: 10, name: "Fran Parsons 9", screen_reader: "Fran Parsons 9" },
    { id: 15, pid: 10, name: "Fran Parsons 10", screen_reader: "Fran Parsons 10" },
    { id: 16, pid: 10, name: "Fran Parsons 11", screen_reader: "Fran Parsons 11" },
    { id: 17, pid: 10, name: "Fran Parsons 12", screen_reader: "Fran Parsons 12" },
    { id: 18, pid: 10, name: "Fran Parsons 13", screen_reader: "Fran Parsons 13" },
]);
