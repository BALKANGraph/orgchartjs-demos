OrgChart.templates.ana.field_0 = '{val}';

var chart = new OrgChart(document.getElementById("tree"), {
    nodeBinding: {
        field_0: function(sender, node){
           var data = sender.get(node.id);
            return '<text width="230" style="font-size: 18px;" fill="#ffffff" x="{cw}" y="30" text-anchor="middle" >' + data.title + ' <title>' + data.titleTooltip + '</title> </text>'
        }
    },

});

chart.load([{id: 0, title: 'My Title', titleTooltip: 'This is the tooltip for My Title'}])