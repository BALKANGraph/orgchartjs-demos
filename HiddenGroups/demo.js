OrgChart.templates.hiddenTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.hiddenTemplate.size = [0, 0];
OrgChart.templates.hiddenTemplate.node = '';
OrgChart.templates.hiddenTemplate.plus = '';
OrgChart.templates.hiddenTemplate.minus = '';

OrgChart.templates.invisibleGroup.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{rounded}" />';

OrgChart.templates.orange = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.orange.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#F57C00" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';

OrgChart.templates.yellow = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.yellow.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#FFCA28" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';

var chart = new OrgChart(document.getElementById("tree"), {

    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
    },
    tags: {
      ig: {
        template: "invisibleGroup",
        subTreeConfig: {
          layout: OrgChart.tree
        }
      },
      hiddenRoot: { 
        template: 'hiddenTemplate' 
      },
      orange: { 
        template: 'orange' 
      },
      yellow: { 
        template: 'yellow' 
      },
    }
});

var nodes = [
    { id: 1 },
    { id: 2, pid: 1, tags: ["ig"] },
    { id: 20, stpid: 2, tags: ['hiddenRoot'] },
    { id: 21, pid: 20, tags: ['orange'] },
    { id: 22, pid: 20, tags: ['orange'] },
    { id: 23, pid: 20, tags: ['orange'] },
    { id: 24, pid: 20, tags: ['orange'] },            
    { id: 25, pid: 20, tags: ['orange'] },
    { id: 3, pid: 1, tags: ["ig"] },
    { id: 30, stpid: 3, tags: ['hiddenRoot'] },
    { id: 31, pid: 30 },
    { id: 32, pid: 30 },
    { id: 33, pid: 30 },
    { id: 34, pid: 30 },            
    { id: 35, pid: 30 },
    { id: 4, pid: 1, tags: ["ig"] },
    { id: 40, stpid: 4, tags: ['hiddenRoot'] },
    { id: 41, pid: 40, tags: ['yellow'] },
    { id: 42, pid: 40, tags: ['yellow'] },
    { id: 43, pid: 40, tags: ['yellow'] },
    { id: 44, pid: 40, tags: ['yellow'] },            
    { id: 45, pid: 40, tags: ['yellow'] },

];

chart.load(nodes);