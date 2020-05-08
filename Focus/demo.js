

window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: 'id',
            field_1: 'pid'
        }
    }); 
    chart.on('click', function(sender, args){
        var focusedElements = document.querySelectorAll('.focused');
        for(var i = 0; i < focusedElements.length; i++){
            focusedElements[i].classList.remove('focused');
        }
        var nodeElement = sender.getNodeElement(args.node.id);
        nodeElement.classList.add('focused');
        return false;
    });
    chart.load([
            { id: "1"  },
            { id: "2" , pid: "1" },
            { id: "3" , pid: "1" }
        ]);
};
