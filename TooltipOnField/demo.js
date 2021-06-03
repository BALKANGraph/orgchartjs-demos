OrgChart.templates.ana.field_0 = '{val}';

var chart = new OrgChart(document.getElementById("tree"), {
    nodeBinding: {
        field_0: "title"
    },

});

chart.on('field', function(sender, args){
        if (args.name == "title"){
            args.value = '<text width="230" style="font-size: 18px;" fill="#ffffff" x="{cw}" y="30" text-anchor="middle" >' + args.data.title + ' <title>' + args.data.titleTooltip + '</title> </text>';
        }
     });

chart.load([{id: 0, title: 'My Title', titleTooltip: 'This is the tooltip for My Title'}])
 