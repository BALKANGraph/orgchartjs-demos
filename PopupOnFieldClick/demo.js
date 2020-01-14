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
            field_1: function(sender, node){
            var data = sender.get(node.id)
            return '<a onclick="showPopup()" href="#"><text width="130" text-overflow="multiline" class="field_1"  style="font-size: 14px;" fill="#ffffff" x="200" y="30" text-anchor="middle">{val}</text></a>'.replace('{val}', data.title)
            },
            
            img_0: "img"
        },
        nodes: [
            { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
            { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
            { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
            { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
        ]
    });
};
