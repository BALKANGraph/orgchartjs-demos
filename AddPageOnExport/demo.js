
      function pdf(nodeId) {
        chart.exportPDF({
            format: "A4"
        });
    }
    
  var chart = new OrgChart(document.getElementById("tree"), {
     menu: {
            export_pdf: {
                text: "Export PDF",
                icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"),
                onClick: pdf
            }
        },
        nodeBinding: {
            field_0: "name"
        }
    });

    chart.on('exportstart', function (sender, args) {

       var page = {};

       page.innerSize = {w: 515, h: 742};
       page.size = {w: 595, h: 842};

      page.html = '<h1>This is the content of the second page.</h1>';
   
      args.pages.push(page);
      args.styles += '<link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">';
      args.styles += document.getElementById('myStyles').outerHTML;

     });  

     var nodes = [
            { id: 1, name: "Amber McKenzie" },
            { id: 2, pid: 1, name: "Ava Field" },
            { id: 3, pid: 1, name: "Peter Stevens" }
        ];

        chart.load(nodes);