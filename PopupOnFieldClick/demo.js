var showPopup;

window.onload = function () { 

  showPopup = function(){
    $('#dialog').dialog();
  }

OrgChart.templates.ana.field_1 = '{val}';

    var chart = new OrgChart(document.getElementById("tree"), {
        enableDragDrop: true,
        nodeMouseClick: OrgChart.action.none,
        nodeBinding: {
        	field_0: "name",
          field_1: "title",
          img_0: "img"
        },

    });


    var nodes = [
            { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
            { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
            { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
            { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
        ];


    chart.on('field', function(sender, args){
        if (args.name == "title"){
            args.value = '<a onclick="showPopup()" href="#"><text data-width="130" data-text-overflow="multiline" class="field_1" style="font-size: 14px;" fill="#ffffff" x="200" y="30" text-anchor="middle">{val}</text></a>'.replace('{val}', args.data.title)
        }
     });

     // on node click
    // chart.on('click', function(sender, args){    
    //   showPopup();
    //   var data = sender.get(args.node.id);
    //   jQuery("#dialog").text(data.name );
    // });   

    chart.load(nodes);

};
