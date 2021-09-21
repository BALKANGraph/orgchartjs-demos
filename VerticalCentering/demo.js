
        OrgChart.templates.small = Object.assign({}, OrgChart.templates.ana);
        OrgChart.templates.small.size = [200, 100];
        OrgChart.templates.small.img_0 = '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="1" y="1"  width="78" height="78"></image>';

    OrgChart.templates.small.node = 
            '<rect x="0" y="0" height="25" width="{w}" fill="#4f81bd" stroke-width="3" stroke="#808080"></rect>'
            + '<rect x="160" y="0" height="25" width="40" fill="#fff" stroke-width="3" stroke="#808080"></rect>'
            + '<rect x="0" y="25" height="50" width="{w}" fill="#fff" stroke-width="3" stroke="#808080"></rect>'
            + '<rect x="0" y="75" height="25" width="100" fill="#a6a59a"  stroke-width="3" stroke="#808080"></rect>'
            + '<rect x="100" y="75" height="25" width="100" fill="#e2eafb" stroke-width="3" stroke="#808080"></rect>';
        OrgChart.templates.small.link = '<path stroke-linejoin="round" stroke="#808080" stroke-width="3px" fill="none" d="{rounded}" />';
        OrgChart.templates.small.field_0 = '<text width="158" text-overflow="ellipsis" style="font-size: 18px;" fill="#fff" x="80" y="18" text-anchor="middle">{val}</text>';
        OrgChart.templates.small.field_1 = '<text width="192" text-overflow="multiline" style="font-size: 18px;" fill="#757575" x="100" y="57" text-anchor="middle">{val}</text>';
        OrgChart.templates.small.field_2 = '<text width="38" text-overflow="ellipsis" style="font-size: 18px;" fill="#808080" font-weight="bold" x="180" y="19" text-anchor="middle">{val}</text>';
        OrgChart.templates.small.field_3 = '<text width="98" text-overflow="ellipsis" style="font-size: 18px;" fill="#fff" font-weight="bold" x="50" y="94" text-anchor="middle">{val}</text>';
        OrgChart.templates.small.field_4 = '<text width="98" text-overflow="ellipsis" style="font-size: 18px;" fill="#808080" font-weight="bold" x="150" y="94" text-anchor="middle">{val}</text>';

        var chart = new OrgChart(document.getElementById('tree'), {
            template: 'small',
            nodeBinding: {
                field_0: "name",
                field_1: "title",
                field_2: "number",
                field_3: "data1",
                field_4: "data2"
            }
        });


        chart.on('redraw', function (sender) {
            var allNodesRect = document.querySelectorAll('[node-id] rect');
            for (i = 0; i < allNodesRect.length; i++) {
                var text = document.querySelectorAll('[node-id="' + (i + 1) + '"] text');
                var allNodeTspans = document.querySelectorAll('[node-id="' + (i + 1) + '"] text tspan');
                

                if (allNodeTspans.length == 2) {
                    allNodeTspans[0].setAttribute("y", 47);
                    allNodeTspans[1].setAttribute("y", 67);

                }
            }
        });

        chart.load([
                {
                    id: 1,
                    name: 'Nicky Phillipssdfsdfsdfsdfsdf',
                    title: 'Chief executive officer',
                    number: 'E15',
                    data1: 'HWOF',
                    data2: 'DATA'

                }, {
                    id: 2,
                    pid: 1,
                    name: 'Jordana Harris',
                    title: 'Chief information officer',
                    number: 'E21',
                    data1: 'HWOF',
                    data2: 'DATA'


                }, {
                    id: 3,
                    pid: 1,
                    name: 'Cory Robbins',
                    title: 'Chief human resources officer',
                    number: 'E15',
                    data1: 'HWOF',
                    data2: 'DATA'


                }, {
                    id: 4,
                    pid: 1,
                    name: 'Lynn Fleming',
                    title: 'QA Manager',
                    number: 'E15',
                    data1: 'HWOF',
                    data2: 'DATA'


                }, {
                    id: 5,
                    pid: 1,
                    name: 'Inara Johns',
                    title: 'Development Manager',
                    number: 'E15',
                    data1: 'HWOF'

                }
        ]);