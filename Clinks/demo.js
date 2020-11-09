OrgChart.clinkTemplates.forTo0 = Object.assign({}, OrgChart.clinkTemplates.orange);
OrgChart.clinkTemplates.forTo0.label = '<text transform="translate(300, 750) rotate(-90)" fill="#F57C00" text-anchor="middle" x="{x}" y="{y}">{val}</text>';

   
   var chart = new OrgChart(document.getElementById('tree'), {
    		mouseScrool: OrgChart.action.none,
        nodeBinding:{
        	field_0: 'id',        	
          field_1: 'pid'
        },
        clinks: [
            {from: 4, to: 0, template: 'forTo0', label: 'text'}, 
            {from: 4, to: 5, template: 'blue', label: '4 reports to 3' },
            {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' },
                 

        ]             
    });

    chart.load([
            { id: 0},
            { id: 1, pid: 0 },
            { id: 2, pid: 0 },
            { id: 3, pid: 1 },
            { id: 4, pid: 2 },
            { id: 5, pid: 1 },
            { id: 6, pid: 2 }
        ]);