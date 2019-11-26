

window.onload = function () {
    var chart = new OrgChart(document.getElementById('tree'), {
        orientation: OrgChart.orientation.bottom_left,
           nodeBinding: {
               name: 'id',
               title: 'pid'
           },
           menu: {
               pdfWithTitle: {                
                   text: 'Export',
                   icon: OrgChart.icon.pdf(24, 24),
                   onClick: function () {
                       chart.exportPDF({
                           header: '<img  src="https://balkangraph.com/content/img/logo.png" />',
                           footer: 'my footer goes here',
                           format: 'A4',
                           margin: [90, 20, 60, 20]
                       });
                   }
               }
           }
       });
       
       chart.load([
           { id: 1 },
           { id: 2, pid: 1 },
           { id: 3, pid: 1 }
       ]);
};
