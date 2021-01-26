window.onload = function () {
       
    //CREATION OF GROUPING ELEMENTS
        var familyGroupTag = {
            group: true,
            template: "group",
    };

    var familyGroupTagNoLinks = {
            group: true,
            template: "groupNoLinks",
    };
    
    

     OrgChart.templates.empty = Object.assign({}, OrgChart.templates.ana);
     OrgChart.templates.empty.size = [0, 0];
     OrgChart.templates.empty.node = '';
     OrgChart.templates.empty.plus = '';
     OrgChart.templates.empty.minus = '';
     OrgChart.templates.empty.link = '';


     OrgChart.templates.groupNoLinks = Object.assign({}, OrgChart.templates.group);
     OrgChart.templates.groupNoLinks.link = '';

      


   
    //TREE CREATION HERE
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "diva",

        clinks: [
          { from: "f1", to: 7, template: 'blue', label: 'Child Of' },
            { from: "f2", to: 8, template: 'yellow', label: 'Child Of' },
            { from: "f3", to: 9, template: 'blue', label: 'Child Of' },
            { from: "f3", to: 11, template: 'blue', label: 'Child Of' },
        ],
       
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img",
            minBtn: "id",
            maxBtn: "id"
        },
        //DEFINE GROUPING TAGS HERE: FOR EVERY GROUP, CREATE NEW TAG
        tags: {
                   f1: familyGroupTag,
                   f2: familyGroupTag,
                   f3: familyGroupTagNoLinks,
                   f4: familyGroupTagNoLinks,
                   f5: familyGroupTagNoLinks,
            //     f6: familyGroupTag,
            //     f7: familyGroupTag
             empty: { template: 'empty' },
            // emptyroot: { template: 'emptyroot' },
            root: { template: 'root' },
            //invisible: { stroke: "white" }
        },
    } 
        );
        //DATE HERE: STRUCTURED IN ORDER OF APPEARANCE!!!!
        nodes = [
            //CALL GROUP 1
            { id: "f1", pid: 27, tags: [ "left-partner", "f1"] },
            { id: 1, stpid: "f1", name: "Person 1", title: "#" },
            { id: 2, stpid: "f1", name: "Person 2", title: "#" },
            
            //CALL GROUP 27
            { id: 27, tags: [ "empty"] },

            //CALL GROUP 2
            { id: "f2", pid: 27, tags: ["right-partner","f2"] },
            { id: 3, stpid: "f2", name: "Person 3", title: "#" },
            { id: 4, stpid: "f2", name: "Person 4", title: "#" },


            //CALL GROUP 3
//                { id: 6, pid: 5, tags: ['emptyroot'] },
            { id: "f3", pid: 27, tags: ["f3","root"] },
            { id: 7, stpid: "f3", name: "Person 5", title: "#" },
            { id: 8, stpid: "f3", name: "Person 6", title: "#",  },
            //{ id: 11, pid: 7, ppid: 8, name: "Child Alazraki", title: "#" },
           
            //CALL GROUP 4
            { id: "f4", pid: "f3", tags: ["f4"] },
            { id: 17, stpid: "f4", name: "Person 7",  title: "#" },
            { id: 9, stpid: "f4", name: "Person 8", title: "#" },
            { id: 19, pid: "f4", name: "David Raz", title: "#" },


            { id: 10, pid: "f3", name: "Person 9", title: "#" },
            { id: 12, pid: 10, name: "Person 10", title: "#" },
            { id: 13, pid: 10, name: "Person 11", title: "#" },
            { id: 14, pid: 10, name: "Person 12", title: "#" },

            //CALL GROUP 5
            { id: "f5", pid: "f3", tags: ["f5"] },
            { id: 11, stpid: "f5", name: "Person 13", title: "#" },
            { id: 18, stpid: "f5", name: "Person 14", title: "#" },
            { id: 20, pid: "f5", name: "Person 15", title: "#" },
            { id: 21, pid: "f5", name: "Person 16", title: "#" },
            { id: 22, pid: "f5", name: "Person 17", title: "#" },
            { id: 23, pid: "f5", name: "Person 18", title: "#" },


        ];

        //FUNCTIONS FOR SPECIFIC ACTIVITIES
        //BUTTON FUNCTIONS (MIN, MAX)
        chart.on('redraw', (sender) => {
            let minBtns = document.querySelectorAll('*[data-btn-min]');

            minBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    chart.minimize(btn.getAttribute('data-btn-min'));
                });
            });

            let maxBtns = document.querySelectorAll('*[data-btn-max]');

            maxBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    chart.maximize(btn.getAttribute('data-btn-max'));
                });
            });

        });

        //CREATE PRODUCT
        chart.load(nodes);

    };

