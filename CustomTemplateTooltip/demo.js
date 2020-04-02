

window.onload = function () {
    var chart = new OrgChart(document.getElementById('tree'));



    chart.on("click", function(sender, args){
    
      var nodeElement = sender.getNodeElement(args.node.id);
      var tooltip = document.getElementById("tooltip");
      var tooltipContent = document.querySelector(".tooltip-content");
      var position = OrgChart._menuPosition(nodeElement, tooltip, sender.getSvg());
      
      
      tooltipContent.innerHTML = sender.get(args.node.id).tooltip;
      tooltip.style.left = (position.x + 250 * sender.getScale()) + "px";
      tooltip.style.top = position.y + "px";
      tooltip.classList.add("visible");
    
      return false;
    });
    
    chart.on("redraw", function(sender, args){
      var tooltip = document.getElementById("tooltip");
      tooltip.classList.remove("visible");
    });
    
    chart.load([{id: 0, tooltip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}, 
      {id: 1, pid: 0, tooltip: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"},
      {id: 2, pid: 0, tooltip: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"}
    ]);
};
