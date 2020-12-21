
window.onload = function () { 
  var chart = new OrgChart(document.getElementById("tree"), {
    nodeBinding: {
        field_0: "name"
    },
    nodes: [
        { id: 1, name: "Google", page: "google.com" },
        { id: 2, pid: 1, name: "Docs", page: "docs.google.com" },
        { id: 3, pid: 1, name: "Mail", page: "mail.google.com" }
    ]
});
chart.editUI.on('field', function(sender, args){

     if (args.type == 'details' && args.name == 'page'){ 

          var txt = args.field.querySelector('input'); 
          var txtVal = txt.value; 
          if (txt){
                                 
              var node = chart.get(sender.node.id);
              var a = document.createElement('a'); 
              var linkText = document.createTextNode(node.page); 
              a.appendChild(linkText); 
              a.title = "my title text"; 


              a.href = "https://" + node.page; 
              a.target = "_blank"; 
               
              var parent = args.field.querySelector('div'); 
              var br = document.createElement("br"); 
              parent.appendChild(br); 
              parent.appendChild(a); 

              txt.remove(); 

          }
      }
  });



};
