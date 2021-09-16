function heatColour(percentage) {
    var r, g, b;
  
    if (percentage <= 50) {
      r = 255;
      g = parseInt(percentage * (255 / 50));
      b = 0
    } else {
      percentage = percentage - 50;
      r = 255 - parseInt((percentage * (255 / 50)));
      g = 255;
      b = 0;
    }
  
    var newColour = 'rgb(' + r + ',' + g + ',' + b + ')';
  
    return newColour;
  }
          var chart = new OrgChart(document.getElementById("tree"), {
  
              nodeBinding: {
                  field_0: "value"
              },
     
        });
  
        var nodes = [
          { id: 1, value: 2 },
          { id: 2, pid: 1, value: 13 },
          { id: 3, pid: 1, value: 25 },
          { id: 4, pid: 1, value: 65 },
          { id: 5, pid: 1, value: 30 },
          { id: 6, pid: 4, value: 66 },
          { id: 7, pid: 4, value: 83 },
          { id: 8, pid: 4, value: 74 },
          { id: 9, pid: 4, value: 89 },
          { id: 10, pid: 4, value: 25 },
          { id: 11, pid: 8, value: 5 },
          { id: 12, pid: 11, value: 56 },
          { id: 13, pid: 11, value: 47 },
          { id: 14, pid: 11, value: 58 },
  
  
      ];
  
      chart.on('redraw', function (sender) {
  
        var allNodesRect = document.querySelectorAll('[data-n-id] rect');
        for (i = 0; i < allNodesRect.length; i++) {
          var id = allNodesRect[i].parentElement.getAttribute('data-n-id');
          var node = chart.get(id);
          var fillColor = heatColour(node.value);
          allNodesRect[i].style.fill = fillColor; 
        }
  
      });
  
      chart.on('field', function(sender, args){
             var value = args.data["value"];
             args.value = value + "%";
      });
  
        chart.load(nodes);