window.onload = function () {
         
  OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.myTemplate.field_0 = '<text data-width="230" class="field_0"  style="font-size: 20px;" fill="#ffffff" x="125" y="95" text-anchor="middle">{val}</text>';
  OrgChart.templates.myTemplate.field_1 = '<text data-width="130" data-text-overflow="multiline" class="field_1"  style="font-size: 16px;" fill="#ffffff" x="230" y="30" text-anchor="end">{val}</text>';
  OrgChart.templates.myTemplate.field_2 = '<text data-width="130" data-text-overflow="multiline" class="field_1"  style="font-size: 14px;" fill="#ffffff" x="215" y="60" text-anchor="end">{val}</text>';


OrgChart.templates.myTemplate.scaleLessThen = {
    "0.6": {
        field_0: '<text data-width="180" class="field_0" style="font-size: 28px;" fill="#ffffff" x="160" y="100" text-anchor="middle">{val}</text>',
        field_1: '',
        field_2: '',
        nodeMenuButton: ""
    },
    "0.4": {
        node: "",
        field_0: "",
        field_1: "",
        field_2: '',
        img_0: '<clipPath id="{randId}"><circle cx="125" cy="50" r="60"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="65" y="-10"  width="120" height="120"></image>',
        nodeMenuButton: "",
        plus: '<circle cx="15" cy="5" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
            + '<line x1="4" y1="5" x2="26" y2="5" stroke-width="1" stroke="#aeaeae"></line>'
            + '<line x1="15" y1="-6" x2="15" y2="16" stroke-width="1" stroke="#aeaeae"></line>',
        minus: '<circle cx="15" cy="5" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
            + '<line x1="4" y1="5" x2="26" y2="5" stroke-width="1" stroke="#aeaeae"></line>',
    },
    "0.8": {
        field_0: '<text data-width="230" class="field_0"  style="font-size: 24px;" fill="#ffffff" x="125" y="95" text-anchor="middle">{val}</text>',
        field_1: '<text data-width="130" data-text-overflow="multiline" class="field_1"  style="font-size: 16px;" fill="#ffffff" x="230" y="30" text-anchor="end">{val}</text>',
        field_2: '',
    }

}



    var chart = new OrgChart(document.getElementById("tree"), {
        template: "myTemplate",
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            field_2: "department",
            img_0: "img"
        },
        nodes: [
            { id: 1, name: "Billy Moore", title: "CEO", img: "https://balkan.app/js/img/2.jpg" },
            { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", department: "Development", img: "https://balkan.app/js/img/5.jpg" },

            { id: 3, pid: 1, tags: ["HRs"], name: "Glenn Bell", title: "HR", department: "Human Resources", img: "https://balkan.app/js/img/10.jpg" },
            { id: 4, pid: 1, tags: ["HRs", "Node with unique template"], name: "Blair Francis", title: "HR", department: "Human Resources", img: "https://balkan.app/js/img/11.jpg" }
        ]
    });    
};
