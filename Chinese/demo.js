OrgChart.templates.department = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.department.size = [330, 50];
OrgChart.templates.department.node =
    '<rect x="0" y="0" width="330" height="50" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></rect>';
OrgChart.templates.department.field_0 = '<text style="font-size: 24px;" fill="#aeaeae" x="165" y="30" text-anchor="middle">{val}</text>';

OrgChart.templates.department.ripple = {
    radius: 0,
    color: "#F57C00",
    rect: null
};
OrgChart.templates.staff = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.staff.size = [50, 330];
OrgChart.templates.staff.node =
    '<rect x="0" y="0" width="50" height="330" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></rect>';
    OrgChart.templates.staff.field_0 = '<text data-width="5" data-text-overflow="multiline" style="font-size: 24px;" fill="#aeaeae" x="25" y="30" text-anchor="middle" >{val}</text>';
    OrgChart.templates.staff.field_1 = 
    '<text width="230" transform="translate(115, 75) rotate(90)" style="font-size: 18px;" fill="#aeaeae" x="25" y="95" text-anchor="middle">{val}</text>';
var chart = new OrgChart(document.getElementById("tree"), {
nodeBinding: {
    field_0: "data1",
    field_1: "data2",

},
 tags: {
        "Department": {
            template: "department"
        },
        "Staff": {
            template: "staff"
        }
    },

});

var nodes= [

        { id: 1, tags: ["Department"], data1: "Develepment Department" },

        { id: 2, pid: 1, tags: ["Staff"], data1: "撃 窒 転 道 鐘", data2: " - (OA2)" }, 
        { id: 3, pid: 1, tags: ["Staff"], data1: "撃 窒 転 道 鐘 転 道", data2: " - (OA5)" },
        { id: 4, pid: 1, tags: ["Staff"], data1: "方 牧 月 阪 食 &", data2: " - $OA" },
        { id: 5, pid: 1, tags: ["Staff"], data2: "Chinese Lorem Ipsum" },
        { id: 6, pid: 1, tags: ["Staff"], data1: "写 歓 開 団 返 付" }
];

chart.on('redraw', function (sender) {
        var allNodesRect = document.querySelectorAll('[data-n-id] rect');
        for (i = 0; i < allNodesRect.length; i++) {
            var text = document.querySelectorAll('[data-n-id="' + (i + 1) + '"] text');
            var allNodeTspans = document.querySelectorAll('[data-n-id="' + (i + 1) + '"] text tspan');
            if (allNodeTspans.length > 0)
              newY = allNodeTspans.length*27 - 30;
            if (text[1])
                text[1].setAttribute("x", newY);
        }
    });

chart.load(nodes);