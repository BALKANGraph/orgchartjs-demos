OrgChart.templates.partnerTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.partnerTemplate.size = [60,60];
var chart = new OrgChart(document.getElementById("tree"), {
    nodeBinding: {
        field_0: "name"
    },
    tags: {            
        partnerTemplate:{
            template: "partnerTemplate"
        }
    },
    nodes: [
        { id: 1 },
        { id: 2, pid: 1 },
        { id: 3, pid: 1 },
        { id: 4, pid: 1 },
        { id: 5, pid: 1, tags: ['partner', 'partnerTemplate']},					
        { id: 6, pid: 1, tags: ['partner', 'partnerTemplate']},
        { id: 7, pid: 1, tags: ['partner', 'partnerTemplate']},
        { id: 8, pid: 1, tags: ['partner', 'partnerTemplate']},
        { id: 9, pid: 1, tags: ['partner', 'partnerTemplate']},
        { id: 10, pid: 1, tags: ['partner', 'partnerTemplate']}
    ]
});