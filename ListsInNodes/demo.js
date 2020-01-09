
window.onload = function () {
    OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);  

    OrgChart.templates.myTemplate.size = [250, 100];
    OrgChart.templates.myTemplate.node = 
        '<rect rx="5" x="0" y="0" height="{h}" width="{w}" fill="white" stroke-width="1" stroke="black"></rect>';

    OrgChart.templates.myTemplate.field_0 = 
        '<text width="220" text-overflow="multiline" class="field_0" style="font-size: 15px;" font-weight="bold" fill="black" x="125" y="20" text-anchor="middle">{val}</text>';
    OrgChart.templates.myTemplate.field_1 = 
        '<text width="220" class="field_0" style="font-size: 15px;" font-weight="bold" fill="black" x="125" y="60" text-anchor="middle">{val}</text>';
    OrgChart.templates.myTemplate.field_2 = 
        '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="black" x="125" y="80" text-anchor="middle">{val}</text>';
    

OrgChart.templates.myTemplate2 = Object.assign({}, OrgChart.templates.myTemplate);  

OrgChart.templates.myTemplate2.size = [250, 240];
OrgChart.templates.myTemplate2.node = 
    '<rect rx="5" x="0" y="0" height="{h}" width="{w}" fill="white" stroke-width="1" stroke="black"></rect>';

OrgChart.templates.myTemplate2.field_3 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="black" x="125" y="120" text-anchor="middle">{val}</text>';


OrgChart.templates.myTemplate2.field_4 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="black" x="125" y="130" text-anchor="middle">{val}</text>';

OrgChart.templates.myTemplate2.field_5 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="black" x="125" y="150" text-anchor="middle">{val}</text>';

OrgChart.templates.myTemplate2.field_6 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="blue" x="125" y="170" text-anchor="middle">{val}</text>';

OrgChart.templates.myTemplate2.field_7 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="blue" x="125" y="190" text-anchor="middle">{val}</text>';

OrgChart.templates.myTemplate2.field_8 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="blue" x="125" y="210" text-anchor="middle">{val}</text>';

OrgChart.templates.myTemplate2.field_9 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="blue" x="125" y="230" text-anchor="middle">{val}</text>';


OrgChart.templates.myTemplate3 = Object.assign({}, OrgChart.templates.myTemplate2);  
OrgChart.templates.myTemplate3.size = [250, 260];

OrgChart.templates.myTemplate3.field_4 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="black" x="125" y="140" text-anchor="middle">{val}</text>';

OrgChart.templates.myTemplate3.field_5 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="black" x="125" y="160" text-anchor="middle">{val}</text>';

OrgChart.templates.myTemplate3.field_6 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="blue" x="125" y="190" text-anchor="middle">{val}</text>';

OrgChart.templates.myTemplate3.field_7 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="blue" x="125" y="210" text-anchor="middle">{val}</text>';

OrgChart.templates.myTemplate3.field_8 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="blue" x="125" y="230" text-anchor="middle">{val}</text>';

OrgChart.templates.myTemplate3.field_9 = 
    '<text width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="blue" x="125" y="250" text-anchor="middle">{val}</text>';



    var chart = new OrgChart(document.getElementById("tree"), {
        nodeMouseClick: OrgChart.action.edit,
        template: "myTemplate",
        tags: {
            id2: {
                template: "myTemplate2"
            },
            id3: {
                template: "myTemplate3"
            },
        },  
        nodeBinding: {
            field_0: "name",
            field_1: "managerTitle",
            field_2: "pmName",
            field_3: "manager1",
            field_4: "manager2",
            field_5: "manager3",
            field_6: "employee1",
            field_7: "employee2",
            field_8: "employee3",
            field_9: "employee4"
        }
    });
    

    
    
    chart.load([
            { id: 1, name: "Management", 
                managerTitle: "Program Manager", pmName: "Jack Hill",
             },

            { id: 2, pid: 1, name: "Supply",
                managerTitle: "Program Manager", pmName: "Jack Hill",
                manager1: "Lexie Cole",
                employee1: "Janae Barrett",
                employee2: "Aaliyah Webb",
                employee3: "Elliot Ross",
                employee4: "Anahi Gordon",
                tags: ["id2"] },

            { id: 3, pid: 1, name: "Logistics", 
                managerTitle: "Program Manager", pmName: "Jack Hill", 
                manager1: "Knox Macias",
                manager2: "Nash Ingram",
                manager3: "Sage Barnett",
                employee1: "Alice Gray",
                employee2: "Anne Ewing",
                employee3: "Reuben Mcleod",
                employee4: "Ariel Wiley",
                tags: ["id3"] }
            
        ]);
};