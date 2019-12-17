var chart = new OrgChart(document.getElementById("tree"), {
    mouseScrool: OrgChart.action.none,
    template: "olivia",
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
    },
    nodeMenu: {
    call: {
        text: "Call now",
        icon: '<img src="https://easypdf.com/images/easypdf-logo-256.png" height="15" width="20">',
        onClick: callHandler
    }
},

nodes: [
    { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },

    { id: 3, pid: 1, tags: ["HRs"], name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
    { id: 4, pid: 1, tags: ["HRs", "Node with unique template"], name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" }
]});    

function callHandler(nodeId) {
    var nodeData = chart.get(nodeId);
    var employeeName = nodeData["name"];
    window.open('https://webcall.me/' + employeeName, employeeName, 'width=340px, height=670px, top=50px, left=50px');
}