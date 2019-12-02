OrgChart.templates.noMenuTemplate = Object.assign({}, OrgChart.templates.olivia);
OrgChart.templates.noMenuTemplate.nodeMenuButton =  '';

   
    var chart = new OrgChart(document.getElementById("tree"), {
                             mouseScrool: OrgChart.action.none,
        template: "olivia",
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        
        nodeMenu:{
            add: {text: "Add New" }
        },
       
        tags: {
            "noMenu": {
                template: "noMenuTemplate"
            }
        },

        nodes: [
            { id: 1, name: "Billy Moore", title: "CEO", img: "https://balkangraph.com/js/img/2.jpg" },
            { id: 2, pid: 1, tags: ["noMenu"], name: "Billie Rose", title: "Dev Team Lead", img: "https://balkangraph.com/js/img/5.jpg" },

            { id: 3, pid: 1, name: "Glenn Bell", title: "HR", img: "https://balkangraph.com/js/img/10.jpg" },
            { id: 4, pid: 1, name: "Blair Francis", title: "HR", img: "https://balkangraph.com/js/img/11.jpg" }
        ]
    });    