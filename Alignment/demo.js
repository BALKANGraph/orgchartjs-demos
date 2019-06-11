

window.onload = function () {
    OrgChart.templates.empty = Object.assign({}, OrgChart.templates.base);
    OrgChart.templates.empty.size = [0, 0];
    OrgChart.templates.empty.node = '';
    OrgChart.templates.empty.plus = '';
    OrgChart.templates.empty.minus = '';

    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        tags: {
            empty: { template: 'empty' },
            rony: { template: 'rony' },
            mila: { template: 'mila' },
            assistant: { template: 'ula' }
        },
        nodes: [
            { id: 1, name: "Jack Hill", title: "Chairman and CEO", email: "amber@domain.com", img: "https://balkangraph.com/js/img/1.jpg" },
            { id: 2, pid: 1, tags: ['assistant'], name: "Lexie Cole", title: "QA Lead", email: "ava@domain.com", img: "https://balkangraph.com/js/img/2.jpg" },
            { id: 3, pid: 1, tags: ['rony'],  name: "Janae Barrett", title: "Technical Director", img: "https://balkangraph.com/js/img/3.jpg" },
            { id: 4, pid: 1, tags: ['rony'], name: "Aaliyah Webb", title: "Manager", email: "jay@domain.com", img: "https://balkangraph.com/js/img/4.jpg" },

            { id: 5, pid: 3, tags: ['empty'] },
            { id: 6, pid: 3, tags: ['empty'] },

            { id: 8, pid: 5, tags: ['mila'],  name: "Nash Ingram", title: ".NET Team Lead", email: "kohen@domain.com", img: "https://balkangraph.com/js/img/8.jpg" },
            { id: 9, pid: 6, tags: ['mila'], name: "Sage Barnett", title: "JS Team Lead", img: "https://balkangraph.com/js/img/9.jpg" },

            { id: 14, pid: 4, tags: ['mila'], name: "Lucas West", title: "Marketer", img: "https://balkangraph.com/js/img/14.jpg" },
            { id: 15, pid: 4, tags: ['assistant'], name: "Adan Travis", title: "Designer", img: "https://balkangraph.com/js/img/15.jpg" },
        ]
    });
};
