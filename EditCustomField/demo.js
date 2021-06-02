window.onload = function () { 
  var chart = new OrgChart(document.getElementById("tree"), {
      enableSearch: false,
      nodeBinding: {
          field_0: null,
      },
  });

  chart.on('field', function(sender, args){
      if (args.name == null){
          args.value = "level: " + chart.getNode(args.data.id).level;   
      }
  });
  
  chart.editUI.on('field', function(sender, args){
      if (args.name == null){
          var lbl = args.field.querySelector('div');
          lbl.innerHTML = "Level:";
          var txt = args.field.querySelector('input');
          txt.value = chart.getNode(sender.node.id).level;   
    }
  });

  
  chart.load([
          { id: 1},
          { id: 2, pid: 1},
          { id: 3, pid: 1},
  ]);
      

};