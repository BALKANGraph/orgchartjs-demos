window.onload = function () {
  OrgChart.templates.disco = Object.assign({}, OrgChart.templates.ula);
  OrgChart.templates.disco.size = [230, 65]
  OrgChart.templates.disco.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="2" stroke="#eeeeee"></rect><line x1="0" y1="2.5" x2="230" y2="2.5" stroke-width="5" stroke="#831c55"></line>';
    
  OrgChart.templates.disco.field_0 = '<text width="210" style="font-size: 16px;" font-weight="bold" fill="#831c55" x="15" y="28" text-anchor="start">{val}</text>';
  OrgChart.templates.disco.field_1 = '<text width="210" text-overflow="multiline" style="font-size: 14px;" font-weight="bold" fill="#afafaf" x="15" y="47" text-anchor="start">{val}</text>';
  OrgChart.templates.disco.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,210,57)" control-node-menu-id="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="4" cy="0" r="2" fill="#636363"></circle><circle cx="9" cy="0" r="2" fill="#636363"></circle><circle cx="14" cy="0" r="2" fill="#636363"></circle></g>';

  OrgChart.templates.disco.plus = '<rect x="-11" y="5" height="22" width="50" rx="10" ry="10" stroke-width="1" fill="#831c55" stroke="#831c55"></rect>' 
    + '<circle stroke="#ffffff" stroke-width="2" fill="#ffffff" cx="6" cy="13" r="1.4"></circle> '  
    + '<rect x="2.5" y="17" rx="1.5" ry="1.5" height="2.5" width="7" stroke-width="1" fill="#ffffff" stroke="#ffffff"></rect>'
    + '<line x1="2" y1="19" x2="10" y2="19" stroke-width="2" stroke="#ffffff"></line>'
    + '<text text-anchor="middle" style="font-size: 10px;cursor:pointer;" font-weight="bold" fill="#ffffff" x="21" y="19">{collapsed-children-count}</text>';

  //  + '<path d="M2.5,20 C2.5,18 10,18 10,20" stroke="#ffffff" stroke-width="2" fill="#ffffff"></path>';
  OrgChart.templates.disco.minus = '<circle cx="15" cy="15" r="12" fill="#f0e2ea" stroke="#f0e2ea" stroke-width="1"></circle>'
    + '<line x1="10" y1="15" x2="20" y2="15" stroke-width="2" stroke="#831c55"></line>';
  OrgChart.templates.disco.link = '<path stroke-linejoin="round" stroke="#eeeeee" stroke-width="2" fill="none" d="{edge}" />';

  var chart = new OrgChart(document.getElementById("tree"), {
    template: "disco",
    levelSeparation: 50,
    nodeBinding: {
        field_0: "name",
        field_1: "title"
    },
    collapse: {
      level: 2
    },
    nodeMenu: {
        details: { text: "Details" },
        edit: { text: "Edit" },
        add: { text: "Add" },
        remove: { text: "Remove" }
    },
});

chart.on('field', function(sender, args){
    if (args.name == "name") {
      var name = args.data["name"];
      var emp = args.data["emp"];
      args.value = name + " (" + emp + ")";
    }

});

var nodes = [
  { id: 1, name: "Denny Curtis", title: "CEO", emp: 33682 },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", emp: 18660 },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", emp: 08606 },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", emp: 18606 },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", emp: 18315 },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", emp: 34621 }
    ];

 
    chart.load(nodes);

}