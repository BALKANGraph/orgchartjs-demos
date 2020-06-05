window.onload = function () {
        
    function pdf(nodeId) {
        chart.exportPDF({
                format: "A4",
                header: 'My Header',
                footer: 'My Footer. Page {current-page} of {total-pages}'
            });
        }
      

    var chart = new OrgChart(document.getElementById("tree"), {
        template: "luba",                  
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        },
         menu: {
                export_pdf: {
                    text: "Export PDF",
                    icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"),
                    onClick: pdf
                },
            }
    });


 chart.on('exportstart', function(sender, args){
        args.content += '<link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">';
        
        args.content += document.getElementById('myStyles').outerHTML;
        args.content += document.getElementById('legend').outerHTML;

    });
    
    chart.load([
        { id: 0, tags: ['manager'] },
        { id: 1, pid: 0, tags: ['sales'] },
        { id: 2, pid: 0, tags: ['it'] }
    ]);

      }