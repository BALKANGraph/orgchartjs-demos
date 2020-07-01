window.onload = function () {

    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        tags: {
            "sub level 1": {
                subLevels: 1
            },
            rony: { template: 'rony' },
            mila: { template: 'mila' },
            assistant: { template: 'ula' }
        },
        nodes: [
            { id: 1, name: "Jack Hill", title: "Chairman and CEO", email: "amber@domain.com", img: "https://cdn.balkan.app/shared/1.jpg" },
            { id: 2, pid: 1, tags: ['assistant'], name: "Lexie Cole", title: "QA Lead", email: "ava@domain.com", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 3, pid: 1, tags: ['rony'],  name: "Janae Barrett", title: "Technical Director", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 4, pid: 1, tags: ['rony'], name: "Aaliyah Webb", title: "Manager", email: "jay@domain.com", img: "https://cdn.balkan.app/shared/4.jpg" },
            { id: 8, pid: 3, tags: ['mila', "sub level 1"],  name: "Nash Ingram", title: ".NET Team Lead", email: "kohen@domain.com", img: "https://cdn.balkan.app/shared/8.jpg" },
            { id: 9, pid: 3, tags: ['mila', "sub level 1"], name: "Sage Barnett", title: "JS Team Lead", img: "https://cdn.balkan.app/shared/9.jpg" },
            { id: 14, pid: 4, tags: ['mila'], name: "Lucas West", title: "Marketer", img: "https://cdn.balkan.app/shared/14.jpg" },
            { id: 15, pid: 4, tags: ['assistant'], name: "Adan Travis", title: "Designer", img: "https://cdn.balkan.app/shared/15.jpg" },
        ]
    });
};