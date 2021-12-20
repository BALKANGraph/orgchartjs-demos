

window.onload = function () {
    var c = document.getElementById("console");

    function update(sender, oldNode, newNode) {
        c.innerHTML += "update(sender, oldNode, newNode)<br />";
    };

    function remove(id) {
        c.innerHTML += "remove(id)<br />";
    };

    function add(sender, node) {
        c.innerHTML += "addNode(sender, node)<br />";
    };

    function redraw(sender) {
        c.innerHTML += "redraw(sender)<br />";
    };

    function click(sender, args) {
        c.innerHTML += "click(sender, args)<br />";
    };

    function dbclick(sender, node) {
        c.innerHTML += "dbclick(sender, node)<br />";
    };

    function imageUploaded(file, inputHtmlElement) {
        c.innerHTML += "click(file, inputHtmlElement)<br />";
    };

    function updateTags(sender, tags) {
        c.innerHTML += "updateTags(sender, tags)<br />";
    };

    function expCollClick(sender, action, id, ids) {
        c.innerHTML += "expCollClick(sender, action, id, ids)<br />";
    }

    function exportEnd(sender, type, filename, content) {
        c.innerHTML += "exportEnd(sender, type, filename, content)<br />";
    }

    function exportStart(sender, type, filename) {
        c.innerHTML += "exportStart(sender, type, filename)<br />";
    };

    function searchClick(sender, nodeId) {
        c.innerHTML += "searchClick(sender, nodeId)<br />";
    };




    var chart = new OrgChart(document.getElementById("tree"), {
      //  scaleInitial: OrgChart.match.boundary,
        enableDragDrop: true,
        enableSearch: false,
        dragDropMenu: {
            addInGroup: { text: "Add in group" },
            addAsChild: { text: "Add as child" }
        },
        menu: {
            pdf: { text: "Export PDF" },
            png: { text: "Export PNG" },
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" }
        },
        nodeMenu: {
            details: { text: "Details" },
            edit: { text: "Edit" },
            add: { text: "Add" },
            remove: { text: "Remove" }
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        
    });

    chart.on('update', function (sender, oldNode, newNode) {
        update(sender, oldNode, newNode);
    });  

    chart.on('remove', function (sender, nodeId) {
        remove(nodeId)
    });  

    chart.on('add', function (sender, node) {
        add(sender, node)
     }); 
     
     chart.editUI.on('imageuploaded', function (sender, file, inputHtmlElement) {
        imageUploaded(file, inputHtmlElement)
     });  

     chart.on('updatetags', function (sender, tags) {
        updateTags(sender, tags)
     });  
    
     chart.on('click', function (sender, args) {
        click(sender, args)
     });  

     chart.on('dbclick', function (sender, node) {
        dbclick(sender, node)
      });  

      chart.on('redraw', function (sender) {
        redraw(sender)
     });  

     chart.on('expcollclick', function (sender, action, id, ids) {
        expCollClick(sender, action, id, ids)
     });  

     chart.on('exportstart', function (sender, args) {
        exportStart(sender, args)
     });  

     chart.on('exportend', function (sender, args) {
        exportEnd(sender, args)
     });  

     chart.on('searchclick', function (sender, nodeId) {
        searchClick(sender, nodeId)
     });  

    nodes = [
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
    ];

    chart.load(nodes);
};
