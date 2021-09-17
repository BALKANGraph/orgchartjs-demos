
        var data = [
            {
                'id': 0,
                'pid': null,
                'Field Type': 'Castrol (User/Contact)',
                'Photo': 'https://cdn.balkan.app/shared/anim/1.gif',
                'Name': 'Jordan Harris',                
                'Relationship Disable': false,
                'Relationship': [
                    {'RelationshipId': 2344, 'id': 1, 'Relationship': 'Good', 'Comments': 'comments 2'},
                    {'RelationshipId': 2344234, 'id': 2, 'Relationship': 'Developing', 'Comments': 'comments 3'},
                ]
            },
            {
                'id': 1,
                'pid': 0,
                'Field Type': 'Contact',
                'Photo': 'https://cdn.balkan.app/shared/4.jpg',
                'Name': 'Tyler Chavez',                
                'Relationship Disable': false,
                'Relationship': [],
                'Box Border Color': 'blue'
            },
            {
                'id': 2,
                'pid': 0,
                'Field Type': 'Reports To',
                'Photo': 'https://cdn.balkan.app/shared/5.jpg',
                'Name': 'Leslie Mcclain',                
                'Relationship Disable': true,
                'Relationship': [],
                'Box Background Color': 'grey'
            },
            {
                'id': 3,
                'pid': 2,
                'Field Type': 'Castrol (User/Contact)',
                'Photo': 'https://cdn.balkan.app/shared/6.jpg',
                'Name': 'Nicky Phillips',                
                'Relationship Disable': true,
                'Relationship': [
                    {'RelationshipId': 1123, 'id': 1, 'Relationship': 'TBC', 'Comments': 'comments 1'},
                ]
            },
            {
                'id': 4,
                'pid': 1,
                'Field Type': 'Castrol (User/Contact)',
                'Photo': 'https://cdn.balkan.app/shared/7.jpg',
                'Name': 'Jordan Harris',                
                'Relationship Disable': false,
                'Relationship': [
                    {'RelationshipId': 1124, 'id': 1, 'Relationship': 'Happy', 'Comments': 'comments 1'},
                ]
            },
            {
                'id': 5,
                'pid': 1,
                'Field Type': 'Castrol (User/Contact)',
                'Photo': 'https://cdn.balkan.app/shared/8.jpg',
                'Name': 'Cory Robbins',                
                'Relationship Disable': true,
                'Relationship': [],
            },
        ];
            
            
        var config =
        {

            'Background Color': '#517285',
            'Relationship Color Mapping': {
                'Good': '#F57C00',
                'Developing': '#FFCA28',
                'No Relationship': '#039BE5',
                'TBC': '#757575',
                'Happy': 'green',
                'Sad': 'red',
            },
            'Relationship Button': [
                { 'Name': 'Good', 'Description': 'Description 1', 'Icon': OrgChart.icon.link(24, 24, '#fff'), 'color': '#F57C00'},
                { 'Name': 'Developing', 'Description': 'Description 2', 'Icon': OrgChart.icon.link(24, 24, '#fff'), 'color': '#FFCA28' },
                { 'Name': 'No Relationship', 'Description': 'Description 3', 'Icon': OrgChart.icon.link(24, 24, '#fff'), 'color': '#039BE5' },
                { 'Name': 'TBC', 'Description': 'Description 4', 'Icon': OrgChart.icon.link(24, 24, '#fff'), 'color': '#757575' },
                { 'Name': 'Happy', 'Description': 'Description 5', 'Icon': OrgChart.icon.happy(24, 24, 'green'), 'color': '#fcfcfc' },
                { 'Name': 'Sad', 'Description': 'Description 6', 'Icon': OrgChart.icon.happy(24, 24, 'red'), 'color': '#fcfcfc' },
            ],
            'CommentsHeader': 'Influence Level',
            'relationshipUpdateAction':  function(id, relationship, action){
                console.log(`relationshipUpdateAction post data to your server! action: ${action}; relationship.id: ${relationship.id}; id: ${id}`);
            },
            'relationshipSaveCommentAction': function(id, relationship){
                console.log(`relationshipSaveCommentAction post data to your server! comments saved for id: ${id}; relationship.id: ${relationship.id}`);
            },
            'reportsToChangeAction': function(id, pid){
                console.log(`reportsToChangeAction post data to your server! id: ${id} now reports to pid: ${pid}`);
            },
            'onLoad': function(){
                console.log('onLoad');
            },
            'onRender': function(){
                console.log('onRender');
            },
            'onUnload': function(){
                alert('onUnload');
            },
        };


        

        var clinks = [];
        for (var i = 0; i < data.length; i++){
            data[i].tags = [];
            if (data[i]['Relationship Disable']){
                data[i].tags.push('relationship_disable');
            }

            if (data[i]['Field Type'] != 'Castrol (User/Contact)'){
                data[i].tags.push('relationship_buttons_hidden');
            }

            if (data[i]['Field Type'] != 'Contact'){
                data[i].tags.push('details_buttons_hidden');
            }
            if (data[i]['Box Background Color']){
                data[i].tags.push(data[i]['Box Background Color']);
            }
            if (data[i]['Box Border Color']){
                data[i].tags.push(data[i]['Box Border Color']);
            }
            
            

            if (data[i].Relationship){
                for (var j = 0; j < data[i].Relationship.length; j++){
                    var relationship = data[i].Relationship[j];
                    clinks.push({
                        from: data[i].id,
                        to: relationship.id,
                        template: relationship.Relationship
                    });
                }
            }
        }

        var index = 0;
        for(var name in config['Relationship Color Mapping']){
            var rcm = config['Relationship Color Mapping'][name];
            OrgChart.clinkTemplates[name] = {
                defs: '<marker id="arrow_' + index + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="' +  rcm + '" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dot_' + index + '" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="' + rcm + '" /></marker>',
                link: '<path marker-start="url(#dot_' + index + ')" marker-end="url(#arrow_' + index + ')" stroke="' + rcm + '" stroke-width="2" fill="none" d="{d}" />',
                label: '<text fill="' + rcm + '"  text-anchor="middle" x="{x}" y="{y}">{val}</text>'
            };
            index++;
        }

        OrgChart.templates.ula.nodeCircleMenuButton = {
            radius: 18,
            x: 280,
            y: 50,
            color: '#fff',
            stroke: '#aeaeae'
        };

        OrgChart.templates.ula.img_0 = '<clipPath id="{randId}"><circle cx="40" cy="40" r="30"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="10" width="60" height="60" ></image>';


        OrgChart.templates.ula.field_0 = '<text width="195" style="font-size: 18px;" fill="#517285" x="80" y="35">{val}</text>';
        OrgChart.templates.ula.field_1 = '<text width="195" text-overflow="multiline" style="font-size: 14px;" fill="#517285" x="80" y="62">{val}</text>';
        OrgChart.templates.ula.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></rect><line x1="0" y1="0" x2="280" y2="0" stroke-width="4" stroke="#517285"></line>';
        OrgChart.templates.ula.size = [280, 100];


        var chart = new OrgChart(document.getElementById("tree"), {
            nodeMouseClick: OrgChart.action.none,
            template: 'ula',
            nodeCircleMenu: {},
            nodeBinding: {
                field_0: "Name",
                field_1: "Field Type",
                img_0: 'Photo'
            },
            menu: {
                pdf: { text: "Export PDF" }
            },
            enableDragDrop: true,
            enableSearch: false,
            clinks: clinks
        });

        chart.on('update', function(sender, oldData, newData){


            if (oldData.pid != newData.pid){
                config.reportsToChangeAction(newData.id, newData.pid);
            }
        });

        chart.on('init', function(){
            config.onLoad();  
        });

        window.onunload = function(){
            config.onUnload();
        };

        
        chart.on('exportstart', (sender, args) => {
            args.styles += document.getElementById('myStyles').outerHTML;
        });

        chart.on('render', function () {
            config.onRender();
        });


        chart.nodeCircleMenuUI.on('show', function (sender, args) {
            args.menu = {};
            var node = chart.getNode(args.nodeId);
            if (node.tags.indexOf('relationship_disable') != -1){
                return false;
            }
            
            var button_color = {};
            for (var i = 0; i <  config['Relationship Button'].length; i++){
                var button = config['Relationship Button'][i];
                args.menu[button.Name] = {
                    icon: button.Icon,
                    color: button.color,
                    text: button.Description,
                    template: button.Name,
                    draggable: true  
                };
                button_color[button.Name] = button.color;
            }
     

            for (var i = 0; i < chart.config.clinks.length; i++) {
                var clink = chart.config.clinks[i];
                if (clink.from == args.nodeId) {
                    args.menu[chart.generateId()] = {
                        icon: OrgChart.icon.remove(24, 24, chart.element.querySelector('[c-link-from="' + clink.from + '"][c-link-to="' + clink.to + '"] path').getAttribute('stroke')),
                        color: '#fcfcfc',
                        text: 'Remove ' + clink.template + ' relationship',
                        removeClink: clink
                    }
                }
            }
        });

        chart.nodeCircleMenuUI.on('drop', function (sender, args) {
            if (!OrgChart.isNullOrEmpty(args.from) && !OrgChart.isNullOrEmpty(args.to) && args.from != args.to) {
                var action = 'create';
                chart.addClink(args.from, args.to, null, args.menuItem.template).draw(OrgChart.action.update, null, function(){
                    var d = null;
                    var r = null;
                    for (var i = 0; i < data.length; i++){               
                        if (data[i].Relationship){
                            for (var j = 0; j < data[i].Relationship.length; j++){
                                var relationship = data[i].Relationship[j];
                                if (data[i].id == args.from && relationship.id == args.to){
                                    relationship.Relationship = args.menuItem.template;
                                    relationship.Comments = '';
                                    r = relationship;
                                    action = 'update'
                                }
                            }
                        }

                        if (data[i].id == args.from){
                            d = data[i]
                        }
                    }

                    if (action == 'create'){
                        r = {'RelationshipId': chart.generateId(), 'id': args.to, 'Relationship': args.menuItem.template, 'Comments': ''};
                        d.Relationship.push(r)
                    }

                    config.relationshipUpdateAction(args.from, r, action);
                });
            }
        });

        chart.nodeCircleMenuUI.on('mouseenter', function (sender, args) {
            setClinkStrokeWidth(args.menuItem.removeClink, 3);
        });


        chart.nodeCircleMenuUI.on('mouseout', function (sender, args) {
            setClinkStrokeWidth(args.menuItem.removeClink, 2);
        });
        
        chart.on('clink-click', function (sender, args) {
            var removeCommentsDialog = function(){
                var cd = document.getElementById('commentsDialog');
                if (cd){
                    cd.parentNode.removeChild(cd);
                }
            };
            removeCommentsDialog();

            var comments = '';
            for (var i = 0; i < data.length; i++){               
                if (data[i].Relationship){
                    for (var j = 0; j < data[i].Relationship.length; j++){
                        var relationship = data[i].Relationship[j];
                        if (data[i].id == args.from && relationship.id == args.to){
                            comments = relationship.Comments
                        }
                    }
                }
            }

            var commentsDialog = document.createElement('div');
            commentsDialog.setAttribute('id', 'commentsDialog');
            commentsDialog.style.position = 'fixed';
            commentsDialog.style.zIndex = 9999999;
            commentsDialog.style.width = '500px';
            commentsDialog.style.backgroundColor = '#646668';
            commentsDialog.style.border = '2px solid #646668';
            commentsDialog.style.top = '200px';
            commentsDialog.style.left = (window.innerWidth / 2 - 250) + 'px';
            commentsDialog.innerHTML = '<div style="width: 100%; height: 20px;"></div>'
                +   '<div style="background-color: #F9F8F8;width: 100%; padding: 10px 0;text-align: center;border-top:1px solid #DCDADA;border-bottom:1px solid #DCDADA;font-size:20px;">' + config.CommentsHeader + '</div>'
                + '<div style="border-bottom:1px solid #DCDADA;width: 100%; background-color: #F9F8F8;"><textarea id="txt_dialog" style="resize: none;margin: 10px; height: 100px; width: 475px;">' + comments + '</textarea></div>'
                + '<div style="text-align: right;border-bottom:1px solid #DCDADA;width: 100%;  background-color: #F9F8F8;"><div style="padding: 10px;"><button id="btn-comments-save">Save</button>&nbsp;<button id="btn-comments-close">Close</button></div></div>';
            document.body.appendChild(commentsDialog);

            document.getElementById('btn-comments-close').addEventListener('click', function(){
                removeCommentsDialog();
            });

            document.getElementById('btn-comments-save').addEventListener('click', function(){

                for (var i = 0; i < data.length; i++){               
                    if (data[i].Relationship){
                        for (var j = 0; j < data[i].Relationship.length; j++){
                            var relationship = data[i].Relationship[j];
                            if (data[i].id == args.from && relationship.id == args.to){
                                relationship.Comments = document.getElementById('txt_dialog').value;
                                config.relationshipSaveCommentAction(data[i].id, relationship);
                            }
                        }
                    }
                }
                removeCommentsDialog();
            });
        });

        chart.nodeCircleMenuUI.on('click', function (sender, args) {
            if (args.menuItem.removeClink) {
                chart.removeClink(args.menuItem.removeClink.from, args.menuItem.removeClink.to).draw(OrgChart.action.update, null, function(){
                    for (var i = 0; i < data.length; i++){               
                        if (data[i].Relationship){
                            for (var j = 0; j < data[i].Relationship.length; j++){
                                var relationship = data[i].Relationship[j];
                                if (data[i].id == args.menuItem.removeClink.from && relationship.id == args.menuItem.removeClink.to){
                                    config.relationshipUpdateAction(data[i].id, relationship, 'delete');
                                }
                            }
                        }
                    }
                });
            }
        });

        function setClinkStrokeWidth(removeClink, width) {
            if (removeClink) {
                var clinkElement = chart.element.querySelector('[c-link-from="' + removeClink.from + '"][c-link-to="' + removeClink.to + '"] path');
                if (clinkElement) {
                    clinkElement.setAttribute('stroke-width', width);
                }
            }
        }

        chart.load(data);
