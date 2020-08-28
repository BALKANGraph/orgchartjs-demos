
        var chart = new OrgChart(document.getElementById("tree"), {
            menu: {
                pdf: { text: "Export PDF" }
            },
            nodeBinding: {
                field_0: "name"
            }
        });

        chart.on('exportstart', function (sender, args) {
           var page = {};
           page.innerSize = {w: 520, h: 300};
           page.size = {w: 600, h: 400};
           page.html = '<h1>This is the content of the second page.</h1>';
           args.pages.push(page);
         });  

         var nodes = [
                { id: 1, name: "Amber McKenzie" },
                { id: 2, pid: 1, name: "Ava Field" },
                { id: 3, pid: 1, name: "Peter Stevens" }
            ];

            chart.load(nodes);