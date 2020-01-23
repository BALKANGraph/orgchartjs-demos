window.onload = function () {   
    var chart = new OrgChart(document.getElementById("tree"), {
        mouseScrool: OrgChart.action.none,
        		nodeMenu:{
            	edit: {text:"Edit"},
            	add: {text:"Add"},
            	remove: {text:"Remove"}
            },

            nodeBinding: {
                field_0: "id"
            },

        });  

        nodes = [
                { id: 1 },
                { id: 2, pid: 1 },
                { id: 3, pid: 1 },
                { id: 4, pid: 2 },
                { id: 5, pid: 2 },
                { id: 6, pid: 3 },
                { id: 7, pid: 3 },
                { id: 8, pid: 4 },
                { id: 9, pid: 4 },
                { id: 10, pid: 5 },
                { id: 11, pid: 5 },
                { id: 12, pid: 6 },

            ];


        chart.load(nodes);
        chart.collapse(3, [6, 7], function () { 
            chart.collapse(5, [10, 11]); 
        });

        document.querySelector('#btn').addEventListener('click', function(){
    	    chart.expand(null, "all");
        });
};