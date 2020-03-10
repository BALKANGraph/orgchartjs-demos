window.onload = function () {

    var array = [
      {id: 5, name: "Elliot Ross", zip: "6000"}, 
      {id: 6, name: "Anahi Gordon", zip: "1000"},
      {id: 7, name: "Knox Macias", zip: "9300"},
      {id: 8, name: "Nash Ingram", zip: "2700"}, 
      {id: 9, name: "Reuben Mcleod", zip: "5000"}
    ];
    array.forEach(element => {
      var list = document.getElementById("items");
      var newItem = document.createElement("div")
      newItem.innerHTML = element.name + ", " + element.zip;
      newItem.classList.add("item");
      newItem.setAttribute("data-id", element.id);
      list.appendChild(newItem);
    });

  var currentNode = '';
  var clientXY = [0,0];


  var chart = new OrgChart(document.getElementById("tree"), {
      nodeBinding: {
          field_0: "name", 
          field_1: "zip"
      }
  });

  var menu = new OrgChart.menuUI();
  menu.init(chart, {
      addAsAssistant: {
          icon: '',
          onClick: function(){
              currentNode.tags = ['assistant'];
              chart.addNode(currentNode);
          },
          text: 'Add As Assistant'
      },        
      addAsRegular: {
          icon: '',            
          onClick: function(){
              chart.addNode(currentNode);
          },
          text: 'Add As Regular'
      }
  });

  chart.on('redraw', function(){

      var nodeElements = document.querySelectorAll('[node-id]');
      
      for(var i = 0; i < nodeElements.length; i++){
        debugger;
          var nodeElement = nodeElements[i];
          nodeElement.ondrop = function(ev) {
              ev.preventDefault();   
              clientXY = [ev.clientX, ev.clientY];
              var id = ev.dataTransfer.getData("id");
              var item = document.querySelector('[data-id="' + id + '"]');
              var data = item.innerHTML.split(", ");
              var name = data[0];
              var zip = data[1];

              var nodeElement = ev.target;
              while(!nodeElement.hasAttribute('node-id')){
                  nodeElement = nodeElement.parentNode;
              }                
              var pid = nodeElement.getAttribute('node-id');  
              
              
              chart.addNode({
                  id: id,
                  pid: pid,
                  name: name,
                  zip: zip
              }, true);

              item.parentNode.removeChild(item);
          }

          nodeElement.ondragover = function(ev) {
              ev.preventDefault();
          }
      }
      
  });

  chart.on('add', function(sender, node){
      currentNode = node;
      menu.show(clientXY[0], clientXY[1]);
      return false;
  })

  chart.load([
      {id: 1, name: 'Janae Barrett'},
      {id: 2, pid: 1, name: 'Lexie Cole' },
      {id: 3, pid: 1, name: 'Aaliyah Webb' },
  ]);

  var items = document.querySelectorAll('.item');
  for(var i = 0; i < items.length; i++){
      var item = items[i];
      item.draggable = true;
      item.ondragstart = function(ev) {
          ev.dataTransfer.setData("id", ev.target.getAttribute('data-id'));
      }
  }
};