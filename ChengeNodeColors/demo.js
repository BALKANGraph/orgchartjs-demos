window.onload = function () {

  var colors = ["#e4a8f9", "#e1d276", "#99ea86"]

  OrgChart.templates.ana.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[0] + '" stroke-width="1" stroke="' + colors[0] + '" rx="5" ry="5"></rect>';
  OrgChart.templates.color0 = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.color0.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[0] + '" stroke-width="1" stroke="' + colors[0] + '" rx="5" ry="5"></rect>';
  OrgChart.templates.color1 = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.color1.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[1] + '" stroke-width="1" stroke="' + colors[1] + '" rx="5" ry="5"></rect>';
  OrgChart.templates.color2 = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.color2.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[2] + '" stroke-width="1" stroke="' + colors[2] + '" rx="5" ry="5"></rect>';
  OrgChart.templates.color1Group = Object.assign({}, OrgChart.templates.group);
  OrgChart.templates.color1Group.node = '<rect rx="50" ry="50" x="0" y="0" height="{h}" width="{w}" fill="' + colors[1] + '" stroke-width="0"></rect>';
  OrgChart.templates.color2Group = Object.assign({}, OrgChart.templates.group);
  OrgChart.templates.color2Group.node = '<rect rx="50" ry="50" x="0" y="0" height="{h}" width="{w}" fill="' + colors[2] + '" stroke-width="0"></rect>';

  var chart = new OrgChart(document.getElementById("tree"), {
    enableDragDrop: true,
    nodeMenu:{
          details: {text:"Details"},
          edit: {text:"Edit"},
          add: {text:"Add"},
          remove: {text:"Remove"}
        },
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
    },
    tags: {
      "color1Group": {
        template: "color1Group",
      },
      "color2Group": {
        template: "color2Group",
      },
      "color1": {
        template: "color1",
      },
      "color2": {
        template: "color2",
      },
  }
});

nodes = [
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: "color2Group", pid: 1, tags: ["color1Group"]},
        { id: "color1Group", pid: 1, tags: ["color2Group"]},
        { id: 2, stpid: "color2Group", name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, stpid: "color1Group", name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", tags: ["color2"], img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 3, name: "Leslie Mcclain", title: "Developer", tags: ["color1"], img: "https://cdn.balkan.app/shared/8.jpg" }

    ];

    chart.editUI.on('field', function(sender, args){
        if (args.type == 'edit' && args.name == 'title'){

            var txt = args.field.querySelector('input');
            if (txt){
               
                var select = document.createElement('select');
                select.innerHTML = '<option value="">select a color</option>'
                + '<option value="color0">pink</option>' 
                + '<option value="color1">yellow</option>' 
                + '<option value="color2">gree</option>';
                select.style.width = '100%';   
                select.id = "color";                 
                select.setAttribute('val', '');
                select.style.fontSize = '16px';
                select.style.color = 'rgb(122, 122, 122)';
                select.style.paddingTop = '7px';
                select.style.paddingBottom = '7px';
                select.onchange = function(){
                    var nodeId = sender.node.id;
                    var nodeIndex = nodes.findIndex((node => node.id == nodeId));
                    console.log(nodeIndex);
                    var color = document.getElementById("color").value;
                    nodes[nodeIndex].tags = [color];
                    console.log(nodes);
                };
                
                txt.parentNode.appendChild(select);
              
            }
        }

          
  });


    chart.load(nodes);

}