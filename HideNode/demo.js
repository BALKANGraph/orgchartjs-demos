var chart = new OrgChart(document.getElementById("tree"), {
  nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
    },
  nodeMenu: {
        details: { text: "Details" },
        edit: { text: "Edit" },
        add: { text: "Add" },
        remove: { text: "Remove" },
        hide: { 
          icon: hideIcon,
          text: "Hide",
          onClick: function(id) {
           chart.collapse(1, id);
          } 
        }
    },
   
});

nodes = [
        { id: 1, name: "Denny Curtis", title: "CEO" },
        { id: 2, pid: 1, name: "Ashley Barnett" },
        { id: 3, pid: 1, name: "Caden Ellison" },
        { id: 4, pid: 2, name: "Elliot Patel" },
        { id: 5, pid: 2, name: "Lynn Hussain" },
        { id: 6, pid: 3, name: "Tanner May" },
        { id: 7, pid: 3, name: "Fran Parsons" }
    ];

    chart.load(nodes);
}