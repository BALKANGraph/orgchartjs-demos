window.onload = function () {
    OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.isla);
    OrgChart.templates.myTemplate.size = [140, 140];
    OrgChart.templates.myTemplate.node = 
      '<rect filter="url(#isla-shadow1)" x="0" y="20" rx="5" ry="5" height="110" width="140" fill="#FFF" stroke-width="1" stroke="#1EC9E8" ></rect> ' + 
      '<circle cx="70" cy="20" fill="#ffffff" r="25" stroke="#757575" stroke-width="0.5"></circle>' +
      '<circle stroke="#757575" stroke-width="3" fill="#757575" cx="70" cy="10" r="8"></circle> ' + 
      '<path d="M55,34 C55,17 85,17 85,34" stroke="#757575" stroke-width="1" fill="#757575"></path>';


    
    OrgChart.templates.myTemplate.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="isla-shadow1">' + 
    '<feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1" />' + 
    '<feColorMatrix values="0 0 0 1 0   0 0 0 1 0   0 0 0 1 0  0 0 0 0.5 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" />' +
    '<feMerge>' + 
    '<feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';

    
    OrgChart.templates.myTemplate.img_0 = 
      '<clipPath id="{randId}"><circle  cx="70" cy="20" r="30"></circle></clipPath>' +
      '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="40" y="-10"  width="60" height="60"></image>' +
      '<circle stroke="#58D68D" stroke-width="3" fill="#58D68D" cx="50" cy="0" r="8"></circle> <text x="45" y="5" fill="white" font-size="smaller">3</text>';

    OrgChart.templates.myTemplate.field_0 = '<text width="160" style="font-size: 15px;" fill="#757575" x="70" y="65" text-anchor="middle" font-weight="bold">{val}</text>';
    OrgChart.templates.myTemplate.field_1 = '<text width="120" style="font-size: 12px;" fill="#757575" x="70" y="85" text-anchor="middle" font-weight="bold">{val}</text>';
    OrgChart.templates.myTemplate.field_2 = '<text width="120" style="font-size: 12px;" fill="#757575" x="70" y="105" text-anchor="middle" font-weight="bold">{val}</text>';

    OrgChart.templates.myTemplate.link = 
      '<path stroke-linejoin="round" stroke="red" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

    OrgChart.templates.myTemplate.minus = 
      '<circle cx="15" cy="5" r="13" fill="#fff" stroke="red" stroke-width="1"></circle>' + 
      '<line x1="8" y1="5" x2="22" y2="5" stroke-width="1" stroke="red"></line>';
    OrgChart.templates.myTemplate.plus = 
      '<circle cx="15" cy="5" r="13" fill="#ffffff" stroke="red" stroke-width="1"></circle>' + 
      '<line x1="8" y1="5" x2="22" y2="5" stroke-width="1" stroke="red"></line><line x1="15" y1="-2" x2="15" y2="12" stroke-width="1" stroke="red"></line>';

    OrgChart.templates.myTemplate.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" control-node-menu-id="{id}">' + 
    '<rect x="-110" y="0" fill="red" fill-opacity="0" width="22" height="22"></rect>' + 
    '<circle cx="-102" cy="15" r="1" fill="red"></circle><circle cx="-98" cy="15" r="1" fill="red"></circle><circle cx="-94" cy="15" r="1" fill="red"></circle></g>';
  

    OrgChart.templates.myTemplateDotted = Object.assign({}, OrgChart.templates.myTemplate);
    
    OrgChart.templates.myTemplateDotted.link = 
      '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="grey" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';
      
    OrgChart.templates.myTemplateVacant = Object.assign({}, OrgChart.templates.myTemplate);

    OrgChart.templates.myTemplateVacant.node = 
      '<rect filter="url(#isla-shadow1)" x="0" y="20" rx="5" ry="5" height="110" width="140" fill="#FFF" stroke-width="3" stroke="#D7DBDD" ></rect> ' + 
      '<circle cx="70" cy="20" fill="#ffffff" r="25" stroke="#D7DBDD" stroke-width="0.5"></circle>' +
      '<circle stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD" cx="70" cy="10" r="8"></circle> ' + 
      '<path d="M55,34 C55,17 85,17 85,34" stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD"></path>';



    var chart = new OrgChart(document.getElementById("tree"), {
      template: "myTemplate",
      levelSeparation: 100,
      siblingSeparation: 70,
      nodeBinding: {
          field_0: "name",
          field_1: "title",
          field_2: "team",
          img_0: "img"
      },
      nodeMenu: {
          details: { text: "Details" },
          edit: { text: "Edit" },
          add: { text: "Add" },
          remove: { text: "Remove" }
      },
      tags: {
          dotted: {
              template: "myTemplateDotted"
          },
          vacant: {
            template: "myTemplateVacant"
          }
      },     
     
  });

  nodes = [
          { id: 1, name: "Denny Curtis", title: "CEO", team: "Overall team: x", img: "https://cdn.balkan.app/shared/2.jpg" },
          { id: 2, pid: 1, name: "Ashley Barnett", title: "Dev Manager", team: "Overall team: x", img: "https://cdn.balkan.app/shared/3.jpg" },
          { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", team: "Overall team: x", img: "https://cdn.balkan.app/shared/4.jpg" },
          { id: 4, pid: 1, tags: ["dotted"], name: "Elliot Patel", title: "Sales", team: "Overall team: x" },
          { id: 5, pid: 2, tags: ["vacant"], name: "Vacant", title: "Sales", team: "Overall team: x" },
          { id: 7, pid: 2, tags: ["vacant"], name: "Vacant", title: "Sales", team: "Overall team: x" }
      ];


      
  var selectedNode = null;

  function switchSelected(node) {

    if (selectedNode != null) {
      selectedNode.classList.remove("selected");
    }  
    node.classList.add("selected");
    selectedNode = node;
  }


  chart.on('click', function(sender, args){
    var nodeElement = sender.getNodeElement(args.node.id);  
    switchSelected(nodeElement);
  });

  document.querySelector('body').addEventListener('click', function(evt) {
  
    if (evt.target.classList.contains('edit-photo') ) {
      selectedNode.classList.remove("selected");  
  
    }

  }, true); 


  chart.nodeMenuUI.on('show', function(sender, args){
     var nodeElement = chart.getNodeElement(args.firstNodeId); 
     switchSelected(nodeElement);
  });

  chart.load(nodes);
}