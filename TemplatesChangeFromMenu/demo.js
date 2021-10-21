window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
    enableSearch: false,
        menu: {
            changeToOlivia: { text: "olivia", icon: OrgChart.icon.details(24,24, '#ccc'), onClick: function () {
   
            	chart.config.template = "olivia"; 
              chart.draw();
            }},
            changeToMila: { text: "mila", icon: OrgChart.icon.details(24,24, '#ccc'), onClick: function () {
              
              chart.config.template = "mila"; 
              chart.draw();
            }},
            changeToPolina: { text: "polina", icon: OrgChart.icon.details(24,24, '#ccc'), onClick: function () {
              
              chart.config.template = "polina"; 
              chart.draw();
            }},
            changeToMery: { text: "mery", icon: OrgChart.icon.details(24,24, '#ccc'), onClick: function () {
              
              chart.config.template = "mery"; 
              chart.draw();
            }},
            changeToRony: { text: "rony", icon: OrgChart.icon.details(24,24, '#ccc'), onClick: function () {
              
              chart.config.template = "rony"; 
              chart.draw();
            }},
            changeToBelinda: { text: "belinda", icon: OrgChart.icon.details(24,24, '#ccc'), onClick: function () {
              
              chart.config.template = "belinda"; 
              chart.draw();
            }},
            changeToUla: { text: "ula", icon: OrgChart.icon.details(24,24, '#ccc'), onClick: function () {
              
              chart.config.template = "ula"; 
              chart.draw();
            }},
            changeToDiva: { text: "diva", icon: OrgChart.icon.details(24,24, '#ccc'), onClick: function () {
   
              chart.config.template = "diva"; 
              chart.draw();
            }},
            changeToIsla: { text: "isla", icon: OrgChart.icon.details(24,24, '#ccc'),  onClick: function () {
            	chart.config.template = "isla"; 
              chart.draw();
            }},
            changeToDeborah: { text: "deborah", icon: OrgChart.icon.details(24,24, '#ccc'),  onClick: function () {
            	chart.config.template = "isla"; 
              chart.draw();
            }},
            changeToAna: { text: "ana", icon: OrgChart.icon.details(24,24, '#ccc'),  onClick: function () {
            	chart.config.template = "ana"; 
              chart.draw();
            }},
            changeToUla: { text: "ula", icon: OrgChart.icon.details(24,24, '#ccc'),  onClick: function () {
            	chart.config.template = "ula"; 
              chart.draw();
            }}
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        nodes: [
            { id: "1", name: "Jack Hill", title: "Chairman and CEO", img: "https://cdn.balkan.app/shared/1.jpg" },
            { id: "2", pid: "1", name: "Lexie Cole", title: "QA Lead", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: "3", pid: "1", name: "Janae Barrett", title: "Technical Director", img: "https://cdn.balkan.app/shared/3.jpg"  },

        ]
    });
};
