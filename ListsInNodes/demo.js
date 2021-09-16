window.onload = function () {
    OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);

    OrgChart.templates.myTemplate.size = [250, 100];
    OrgChart.templates.myTemplate.node =
        '<rect rx="5" x="0" y="0" height="100" width="250" fill="white" stroke-width="1" stroke="black"></rect>';

    OrgChart.templates.myTemplate.name =
        '<text data-width="220" data-text-overflow="multiline" class="field_0" style="font-size: 15px;" font-weight="bold" fill="black" x="125" y="20" text-anchor="middle">{val}</text>';
    OrgChart.templates.myTemplate.managerTitle =
        '<text data-width="220"  style="font-size: 15px;" font-weight="bold" fill="black" x="125" y="60" text-anchor="middle">{val}</text>';
    OrgChart.templates.myTemplate.pmName =
        '<text data-width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="black" x="125" y="80" text-anchor="middle">{val}</text>';




    var chart = new OrgChart(document.getElementById("tree"), {
        nodeMouseClick: OrgChart.action.edit,
        template: "myTemplate",
        nodeBinding: {
            name: "name",
            managerTitle: "managerTitle",
            pmName: "pmName",
            manager_0: "manager1",
            manager_1: "manager2",
            manager_2: "manager3",
            employee_0: "employee1",
            employee_1: "employee2",
            employee_2: "employee3",
            employee_3: "employee4"
        }
    });


    var nodes = [
        {
            id: 1, name: "Management",
            managerTitle: "Program Manager", pmName: "Jack Hill",
        },

        {
            id: 2, pid: 1, name: "Supply",
            managerTitle: "Program Manager", pmName: "Jack Hill",
            manager1: "Lexie Cole",
            employee1: "Janae Barrett",
            employee2: "Aaliyah Webb",
            employee3: "Elliot Ross",
            employee4: "Anahi Gordon"
        },

        {
            id: 3, pid: 1, name: "Logistics",
            managerTitle: "Program Manager", pmName: "Jack Hill",
            manager1: "Knox Macias",
            manager2: "Nash Ingram",
            manager3: "Sage Barnett",
            employee1: "Alice Gray",
            employee2: "Anne Ewing",
            employee3: "Reuben Mcleod",
            employee4: "Ariel Wiley"
        }

    ]



    var i = 1;
    var y = 100;
    var m = 0;

    function Template(name, size) {
        OrgChart.templates[name + size] = Object.assign({}, OrgChart.templates.myTemplate);

    }


    function checkTheNumberOfFeilds(node) {
        return Object.keys(node).length;
    }

    function createTemaplate(name, number) {
        var templateName = name + number;
        OrgChart.templates[templateName] = Object.assign({}, OrgChart.templates.myTemplate);

        var size = [250, (number - 4) * 20 + 120];
        OrgChart.templates[templateName].size = size;
        OrgChart.templates[templateName].node = '<rect rx="5" x="0" y="0" height="' + size[1] + '" width="' + size[0] + '" fill="white" stroke-width="1" stroke="black"></rect>';

        m = 0;

        for (var i = 0; i < number; i++) {
            m++;
            var fieldName = 'manager_' + i;
            y = (120 + i * 20);
            OrgChart.templates[templateName][fieldName] =
                '<text data-width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="black" x="125" y="' + y + '" text-anchor="middle">{val}</text>';

        }

        for (var i = 0; i < number; i++) {

            var fieldName = 'employee_' + i;
            y = (m * 20 + i * 20 - 40);
            OrgChart.templates[templateName][fieldName] =
                '<text data-width="220" class="field_0" style="font-size: 15px;" text-decoration="underline" fill="blue" x="125" y="' + y + '" text-anchor="middle">{val}</text>';

        }



        chart.config.tags[templateName] = {
            template: templateName
        };
    }

    for (var i = 0; i < nodes.length; i++) {
        var number = checkTheNumberOfFeilds(nodes[i]);

        if (!OrgChart.templates['myTemplate' + number]) {
            createTemaplate('myTemplate', number);
        }

        nodes[i].tags = ["myTemplate" + number]
    }

    chart.load(nodes);

};