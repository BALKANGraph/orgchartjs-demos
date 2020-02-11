
window.onload = function () { 
    OrgChart.SEARCH_PLACEHOLDER = 'your search hint';
        var chart = new OrgChart(document.getElementById("tree"), {
    
            nodeBinding: {
                field_0: "name",
                field_1: "title",
    
            },
            nodes: [
                { id: 1, name: "Denny Curtis", title: "CEO" },
                { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager" },
                { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager" },
                { id: 4, pid: 2, name: "Elliot Patel", title: "Sales" },
                { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales" },
                { id: 6, pid: 3, name: "Tanner May", title: "Developer" },
                { id: 7, pid: 3, name: "Fran Parsons", title: "Developer" }
            ]
        });
    };
    