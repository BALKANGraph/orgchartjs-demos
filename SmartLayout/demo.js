

window.onload = function () {
    var mixedLayoutThreshold = 4;
        var pagingThreshold = 6;
        OrgChart.MIXED_LAYOUT_ALL_NODES = false;
        OrgChart.MIXED_LAYOUT_FOR_NODES_WITH_COLLAPSED_CHILDREN = true;
        var expcollclick = false;

        OrgChart.templates.split.size = [0, 0];
        OrgChart.templates.split.node = '';

        OrgChart.templates.big = Object.assign({}, OrgChart.templates.ana);
        OrgChart.templates.big.size = [170, 310];
        OrgChart.templates.big.img_0 = '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="1" y="21"  width="168" height="168"></image>';
        OrgChart.templates.big.node = '<rect x="0" y="20" height="250" width="{w}" fill="#f9f9f9" stroke-width="1" stroke="#aeaeae"></rect>';
        OrgChart.templates.big.minus = '<rect x="0" y="45" height="40" width="170" fill="#039BE5" stroke-width="1" stroke="#aeaeae"></rect><path fill="#fff" d="M75,75 L85,65 L95,75"></path>';
        OrgChart.templates.big.plus = '<rect x="0" y="45" height="40" width="170" fill="#039BE5" stroke-width="1" stroke="#aeaeae"></rect><path fill="#fff" d="M75,65 L85,75 L95,65"></path>'
            + '<text text-anchor="middle" style="font-size: 12px;cursor:pointer;" fill="#fff" x="85" y="60">({collapsed-children-count})</text>';
        OrgChart.templates.big.expandCollapseSize = 170;
        OrgChart.templates.big.field_0 = '<text width="150" text-overflow="multiline" style="font-size: 16px;" fill="#757575" x="10" y="210" text-anchor="start">{val}</text>',
            OrgChart.templates.big.field_1 = '<text width="150" text-overflow="multiline" style="font-size: 12px;" fill="#757575" x="10" y="245" text-anchor="start">{val}</text>';
        OrgChart.templates.big.up = '';

        OrgChart.templates.small = Object.assign({}, OrgChart.templates.ana);
        OrgChart.templates.small.size = [350, 80];
        OrgChart.templates.small.img_0 = '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="1" y="1"  width="78" height="78"></image>';
        OrgChart.templates.small.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#f9f9f9" stroke-width="1" stroke="#aeaeae"></rect>';
        OrgChart.templates.small.field_0 = '<text width="192" text-overflow="multiline" style="font-size: 16px;" fill="#757575" x="88" y="22" text-anchor="start">{val}</text>',
            OrgChart.templates.small.field_1 = '<text width="192" text-overflow="multiline" style="font-size: 12px;" fill="#757575" x="88" y="57" text-anchor="start">{val}</text>';
        OrgChart.templates.small.minus = '<rect x="0" y="0" height="80" width="50" fill="#039BE5" stroke-width="1" stroke="#aeaeae"></rect><path fill="#fff" d="M75,75 L85,65 L95,75"></path>';
        OrgChart.templates.small.plus = '<rect x="150" y="-65" height="80" width="40" fill="#039BE5" stroke-width="1" stroke="#aeaeae"></rect><path fill="#fff" d="M160,-10 170,0 L180,-10"></path>'
            + '<text text-anchor="middle" style="font-size: 12px;cursor:pointer;" fill="#fff" x="170" y="-30">({collapsed-children-count})</text>';

        OrgChart.templates.see_more = Object.assign({}, OrgChart.templates.small);
        OrgChart.templates.see_more.size = [350, 40];
        OrgChart.templates.see_more.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#fff" stroke-width="0"></rect>';
        OrgChart.templates.see_more.see_more_field = '<text  style="font-size: 16px;pointer-events: none;" fill="#039BE5" x="175" y="22" text-anchor="middle">See ({val}) more...</text>';



        var chart = new OrgChart(document.getElementById('tree'), {
            orderBy: 'id',
            enableSearch: false,
            enableDragDrop: true,
            nodeMouseClick: OrgChart.action.none,
            template: 'big',
            layout: OrgChart.tree,
            siblingSeparation: 10,
            subtreeSeparation: 20,
            mixedHierarchyNodesSeparation: 0,
            collapse: {
                level: 2,
                allChildren: true
            },
            tags: {
                small: { template: 'small' },
                see_more: { template: 'see_more' }
            },
            nodeBinding: {
                field_0: "name",
                field_1: "title",
                up: 'up',
                img_0: "img",
                see_more_field: 'see_more_field'
            }
        });

        chart.on('click', function (sender, args) {
            if (args.node.templateName == 'see_more') {
                var pnode = sender.getNode(args.node.pid);
                var expandIds = [];
                for (var i = 0; i < pnode.childrenIds.length; i++) {
                    var cnode = sender.getNode(pnode.childrenIds[i]);

                    if (cnode && cnode.collapsed === true) {
                        expandIds.push(cnode.id);
                        if (expandIds.length >= pagingThreshold) {
                            break;
                        }
                    }
                }

                sender.expandCollapse(args.node.pid, expandIds, []);
            }
        });

        chart.on('field', function (sender, args) {
            if (args.name == 'up' && args.node.templateName == 'big' && !OrgChart.isNullOrEmpty(args.node.pid)) {
                if (!args.node.parent) {
                    args.value = '';
                    args.element = '<g data-top=""><rect x="0" y="0" height="20" width="170" fill="#aeaeae" stroke-width="1" stroke="#aeaeae"></rect><path fill="#fff" d="M75,15 L85,5 L95,15"></path></g>';
                }
                else {
                    args.value = '';
                    args.element = '<g data-top=""><rect x="0" y="0" height="20" width="170" fill="#aeaeae" stroke-width="1" stroke="#aeaeae"></rect><path fill="#fff" d="M75,5 L85,15 L95,5"></path></g>';
                }
            }
            else if (args.name == 'see_more_field') {
                if (args.node.templateName == 'see_more') {
                    args.value = pagingThreshold;
                    var pnode = sender.getNode(args.node.pid);
                    var collpsedCount = OrgChart.collapsedChildrenCount(sender, pnode, 0);

                    if (collpsedCount < pagingThreshold) {
                        args.value = collpsedCount;
                    }
                }
            }
        });




        OrgChart.events.on('layout', function (args) {
            if (args.action == OrgChart.action.init || (args.action == OrgChart.action.expand && args.actionParams.id == args.pnode.id && !expcollclick)) {
                if (args.childrenIds.length > pagingThreshold) {
                    for (var i = args.childrenIds.length - 1; i >= pagingThreshold; i--) {
                        var id = args.childrenIds[i];
                        args.childrenIds.splice(i, 1);
                        for (var j = args.pnode.children.length - 1; j >= 0; j--) {
                            if (args.pnode.children[j].id == id) {
                                args.pnode.children[j].collapsed = true;
                                args.pnode.children.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }

            if (args.pnode.children.length != args.pnode.childrenIds.length) {
                var smnode = new OrgChart.node(args.pnode.id + "_see_more", args.pnode.id, ['see_more'], "see_more");
                smnode.w = OrgChart.templates.see_more.size[0];
                smnode.h = OrgChart.templates.see_more.size[1];
                smnode.parent = args.pnode;
                args.childrenIds.push(smnode.id);
                args.pnode.children.push(smnode);
                args.nodes[smnode.id] = smnode;
            }



            for (var i = 0; i < args.childrenIds.length; i++) {
                var cnode = args.nodes[args.childrenIds[i]];
                if (cnode.templateName != 'see_more') {
                    cnode.templateName = 'small';
                    cnode.w = OrgChart.templates.small.size[0];
                    cnode.h = OrgChart.templates.small.size[1];
                }
            }

            if (args.childrenIds.length <= mixedLayoutThreshold) {
                args.layout = OrgChart.mixed;
            }
        });

        chart.on("redraw", function (sender) {
            var upElements = document.querySelectorAll('[data-top]');
            for (var i = 0; i < upElements.length; i++) {
                var nodeId = upElements[i].parentNode.getAttribute('node-id');

                var node = sender.getNode(nodeId);

                upElements[i].addEventListener('click', function (e) {
                    var target = e.target;
                    while (target && !target.hasAttribute('node-id')) {
                        target = target.parentNode;
                    }

                    var id = target.getAttribute('node-id');
                    var node = sender.getNode(id);
                    var pnode = sender.getNode(node.pid);


                    if (pnode && !node.parent) {
                        sender.config.roots = [pnode.id];
                        sender.draw(OrgChart.action.update, { id: node.id });
                    }
                    else if (node.parent) {
                        sender.config.roots = [node.id];

                        sender.draw(OrgChart.action.update, { id: node.id }, function () {
                            OrgChart._moveToBoundaryArea(sender.getSvg(), sender.getViewBox(), sender.response.boundary);
                        });
                    }
                })
            }
        });

        chart.on('expcollclick', function (sender, collapsing, id, ids) {
            var node = sender.getNode(id);
            expcollclick = node.templateName == 'big';
        });


        chart.on('render', function (sender) {
            expcollclick = false;
        });

        chart.load([
            { id: 1, name: 'Nicky Phillips', title: 'Chief executive officer', img: 'https://cdn.balkan.app/shared/anim/1.gif' },

            { id: 2, pid: 1, name: 'Jordana Harris', title: 'Chief information officer', img: 'https://cdn.balkan.app/shared/a/3.jpg' },
            { id: 3, pid: 1, name: 'Cory Robbins', title: 'Chief human resources officer', img: 'https://cdn.balkan.app/shared/a/4.jpg' },
            { id: 4, pid: 1, name: 'Lynn Fleming', title: 'QA Manager', img: 'https://cdn.balkan.app/shared/a/5.jpg' },
            { id: 5, pid: 1, name: 'Inara Johns', title: 'Development Manager', img: 'https://cdn.balkan.app/shared/a/6.jpg' },
            { id: 6, pid: 1, name: 'Davina Findlay', title: 'Development manager', img: 'https://cdn.balkan.app/shared/a/7.jpg' },
            { id: 7, pid: 1, name: 'Trevor Moon', title: 'Account Executive', img: 'https://cdn.balkan.app/shared/a/8.jpg' },
            { id: 8, pid: 1, name: 'Phillipa Griffiths', title: 'Development Manager', img: 'https://cdn.balkan.app/shared/a/9.jpg' },
            { id: 9, pid: 1, name: 'Antoine Nairn', title: 'Chief Financial Officer', img: 'https://cdn.balkan.app/shared/a/10.jpg' },
            { id: 10, pid: 1, name: 'Yasmin Kenny', title: 'Procurement officer', img: 'https://cdn.balkan.app/shared/a/11.jpg' },
            { id: 11, pid: 1, name: 'Teegan Draper', title: 'Development Manager', img: 'https://cdn.balkan.app/shared/a/12.jpg' },
            { id: 11111, pid: 1, name: 'Hayley Keenan', title: 'Development Manager', img: 'https://cdn.balkan.app/shared/a/13.jpg' },

            { id: 12, pid: 2, name: 'Jo Baker', title: 'Development manager', img: 'https://cdn.balkan.app/shared/a/14.jpg' },
            { id: 13, pid: 2, name: 'Tala Britt', title: 'Development manager', img: 'https://cdn.balkan.app/shared/a/15.jpg' },
            { id: 14, pid: 2, name: 'Fariha Weeks', title: 'Digital marketing manager', img: 'https://cdn.balkan.app/shared/a/16.jpg' },
            { id: 15, pid: 2, name: 'Fatimah Parker', title: 'Communications manager', img: 'https://cdn.balkan.app/shared/a/17.jpg' },

            { id: 16, pid: 3, name: 'Jane Valdez', title: 'Chief diversity officer', img: 'https://cdn.balkan.app/shared/a/18.jpg' },
            { id: 17, pid: 3, name: 'Isobel Mathews', title: 'Compensation and benefits manager', img: 'https://cdn.balkan.app/shared/a/19.jpg' },
            { id: 18, pid: 3, name: 'Jokubas Hail', title: 'HR Manager', img: 'https://cdn.balkan.app/shared/a/20.jpg' },
            { id: 19, pid: 3, name: 'Shannan Bird', title: 'Human resource information manager', img: 'https://cdn.balkan.app/shared/a/21.jpg' },
            { id: 20, pid: 3, name: 'Miranda Bradford', title: 'Recruitment manager', img: 'https://cdn.balkan.app/shared/a/22.jpg' },

            { id: 21, pid: 4, name: 'Aadam Mccoy', title: 'QA specialist', img: 'https://cdn.balkan.app/shared/a/23.jpg' },
            { id: 22, pid: 4, name: 'Lacy Adams', title: 'Quality auditor', img: 'https://cdn.balkan.app/shared/a/24.jpg' },
            { id: 23, pid: 4, name: 'Sahra Cresswell', title: 'Quality coordinator', img: 'https://cdn.balkan.app/shared/a/25.jpg' },
            { id: 24, pid: 4, name: 'Leslie Mcdowell', title: 'Quality assurance tester', img: 'https://cdn.balkan.app/shared/a/26.jpg' },
            { id: 25, pid: 4, name: 'Nichole Meadows', title: 'QA specialist', img: 'https://cdn.balkan.app/shared/a/27.jpg' },
            { id: 26, pid: 4, name: 'Beth Hutchings', title: 'Quality analyst', img: 'https://cdn.balkan.app/shared/a/28.jpg' },
            { id: 27, pid: 4, name: 'Savannah Shah', title: 'QA specialist', img: 'https://cdn.balkan.app/shared/a/29.jpg' },
            { id: 28, pid: 4, name: 'Sana Bray', title: 'QA specialist', img: 'https://cdn.balkan.app/shared/a/30.jpg' },
            { id: 29, pid: 4, name: 'Tia Collier', title: 'QA specialist', img: 'https://cdn.balkan.app/shared/a/31.jpg' },


            { id: 30, pid: 5, name: 'Sian Webb', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/a/32.jpg' },
            { id: 31, pid: 5, name: 'Amna Gibbs', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/a/33.jpg' },
            { id: 32, pid: 5, name: 'Abraham Mair', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/a/34.jpg' },
            { id: 33, pid: 5, name: 'Fateh Leonard', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/a/35.jpg' },
            { id: 34, pid: 5, name: 'Paige Roth', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/a/36.jpg' },
            { id: 35, pid: 5, name: 'Md York', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/1.jpg' },
            { id: 36, pid: 5, name: 'Simona Drake', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/2.jpg' },
            { id: 37, pid: 5, name: 'Ilyas Dunne', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/3.jpg' },
            { id: 38, pid: 5, name: 'Edison Shelton', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/4.jpg' },
            { id: 39, pid: 5, name: 'Katelyn Michael', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/5.jpg' },


            { id: 40, pid: 6, name: 'Wasim Clifford', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/6.jpg' },
            { id: 41, pid: 6, name: 'Raja Thompson', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/7.jpg' },
            { id: 42, pid: 6, name: 'Ed Hartman', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/8.jpg' },
            { id: 43, pid: 6, name: 'Rufus Coles', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/9.jpg' },
            { id: 44, pid: 6, name: 'Tim Mcculloch', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/10.jpg' },
            { id: 45, pid: 6, name: 'Tiana Senior', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/11.jpg' },
            { id: 46, pid: 6, name: 'Mazie Knapp', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/12.jpg' },
            { id: 47, pid: 6, name: 'Inaayah Amos', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/13.jpg' },
            { id: 48, pid: 6, name: 'Anastasia Mckee', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/14.jpg' },
            { id: 49, pid: 6, name: 'Jonty Goodwin', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/15.jpg' },

            { id: 50, pid: 6, name: 'Tevin Lopez', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/16.jpg' },
            { id: 51, pid: 6, name: 'Jazmin Hibbert', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/17.jpg' },
            { id: 52, pid: 6, name: 'Mahira Fritz', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/18.jpg' },
            { id: 53, pid: 6, name: 'Angela Cochran', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/19.jpg' },
            { id: 54, pid: 6, name: 'Ava-Grace Childs', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/20.jpg' },
            { id: 55, pid: 6, name: 'Dylan Elliott', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/21.jpg' },
            { id: 56, pid: 6, name: 'David Hawes', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/22.jpg' },
            { id: 57, pid: 6, name: 'Kameron Daly', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/23.jpg' },
            { id: 58, pid: 6, name: 'Melody Blake', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/24.jpg' },
            { id: 59, pid: 6, name: 'Maverick Lyons', title: 'Full Stack Developer', img: 'https://cdn.balkan.app/shared/b/25.jpg' },

            { id: 60, pid: 7, name: 'Bjorn Cabrera', title: 'Account Broker', img: 'https://cdn.balkan.app/shared/b/26.jpg' },
            { id: 61, pid: 7, name: 'Aled Portillo', title: 'Actuary', img: 'https://cdn.balkan.app/shared/b/27.jpg' },
            { id: 62, pid: 7, name: 'Abdi Bannister', title: 'Account Executive', img: 'https://cdn.balkan.app/shared/b/28.jpg' },
            { id: 63, pid: 7, name: 'Huseyin Smyth', title: 'Credit Analyst', img: 'https://cdn.balkan.app/shared/b/29.jpg' },
            { id: 64, pid: 7, name: 'Alanna Heath', title: 'Customer Service – Finance', img: 'https://cdn.balkan.app/shared/b/30.jpg' },
            { id: 65, pid: 7, name: 'King Waters', title: 'Financial Analyst', img: 'https://cdn.balkan.app/shared/b/31.jpg' },
            { id: 66, pid: 7, name: 'Rishi Church', title: 'Financial Consultant', img: 'https://cdn.balkan.app/shared/b/32.jpg' },
            { id: 67, pid: 7, name: 'Neo Hinton', title: 'Financial Planning and Analysis Manager', img: 'https://cdn.balkan.app/shared/b/33.jpg' },
            { id: 68, pid: 7, name: 'Ellie-Mai White', title: 'Investment Advisor', img: 'https://cdn.balkan.app/shared/b/34.jpg' },
            { id: 69, pid: 7, name: 'Rabia Markham', title: 'Investment Analyst', img: 'https://cdn.balkan.app/shared/b/35.jpg' },



            { id: 70, pid: 8, name: 'Gwen Shannon', title: 'Back-end Developer', img: 'https://cdn.balkan.app/shared/b/36.jpg' },
            { id: 71, pid: 8, name: 'Lina Legge', title: 'Back-end Developer', img: 'https://cdn.balkan.app/shared/b/37.jpg' },
            { id: 72, pid: 8, name: 'Ivie Perez', title: 'Back-end Developer', img: 'https://cdn.balkan.app/shared/b/38.jpg' },
            { id: 73, pid: 8, name: 'Kadie Lester', title: 'Back-end Developer', img: 'https://cdn.balkan.app/shared/b/39.jpg' },
            { id: 74, pid: 8, name: 'Zara Gay', title: 'Back-end Developer', img: 'https://cdn.balkan.app/shared/b/40.jpg' },
            { id: 75, pid: 8, name: 'Theodora Hollis', title: 'Back-end Developer', img: 'https://cdn.balkan.app/shared/b/41.jpg' },
            { id: 76, pid: 8, name: 'Ralphie Cousins', title: 'Back-end Developer', img: 'https://cdn.balkan.app/shared/b/42.jpg' },
            { id: 77, pid: 8, name: 'Dion Burch', title: 'Back-end Developer', img: 'https://cdn.balkan.app/shared/b/43.jpg' },
            { id: 78, pid: 8, name: 'Connie Vinson', title: 'Back-end Developer', img: 'https://cdn.balkan.app/shared/b/44.jpg' },
            { id: 79, pid: 8, name: 'Sakina Spears', title: 'Back-end Developer', img: 'https://cdn.balkan.app/shared/b/45.jpg' },

            { id: 80, pid: 11111, name: 'Lilly-May Miller', title: 'Front-end Developer', img: 'https://cdn.balkan.app/shared/b/46.jpg' },
            { id: 81, pid: 11111, name: 'Amelia-Rose Millington', title: 'Front-end Developer', img: 'https://cdn.balkan.app/shared/b/47.jpg' },
            { id: 82, pid: 11111, name: 'Krystal Prince', title: 'Front-end Developer', img: 'https://cdn.balkan.app/shared/b/48.jpg' },
            { id: 83, pid: 11111, name: 'Caoimhe Hook', title: 'Front-end Developer', img: 'https://cdn.balkan.app/shared/b/49.jpg' },
            { id: 84, pid: 11111, name: 'Lloyd Sanford', title: 'Front-end Developer', img: 'https://cdn.balkan.app/shared/b/50.jpg' },
            { id: 85, pid: 11111, name: 'Kristen Wilson', title: 'Front-end Developer', img: 'https://cdn.balkan.app/shared/b/51.jpg' },
            { id: 86, pid: 11111, name: 'Stacie Marshall', title: 'Front-end Developer', img: 'https://cdn.balkan.app/shared/b/52.jpg' },
            { id: 87, pid: 11111, name: 'Leyton Holcomb', title: 'Front-end Developer', img: 'https://cdn.balkan.app/shared/b/53.jpg' },
            { id: 88, pid: 11111, name: 'Abu Neville', title: 'Front-end Developer', img: 'https://cdn.balkan.app/shared/b/54.jpg' },
            { id: 89, pid: 11111, name: 'Merlin Rojas', title: 'Front-end Developer', img: 'https://cdn.balkan.app/shared/b/55.jpg' },



            { id: 90, pid: 12, name: 'Madison Oneal', title: 'UI/UX Designer', img: 'https://cdn.balkan.app/shared/b/56.jpg' },
            { id: 91, pid: 12, name: 'Ralphy Ellwood', title: 'UX Designer', img: 'https://cdn.balkan.app/shared/b/57.jpg' },
            { id: 92, pid: 12, name: 'Lucie Riggs', title: 'UX Copywriter', img: 'https://cdn.balkan.app/shared/b/58.jpg' },
            { id: 93, pid: 13, name: 'Nathalie Whitney', title: 'UI Designer', img: 'https://cdn.balkan.app/shared/b/59.jpg' },
            { id: 94, pid: 13, name: 'Ronny Connelly', title: 'Marketing specialist', img: 'https://cdn.balkan.app/shared/b/60.jpg' },
            { id: 95, pid: 14, name: 'Lily-Grace Dodson', title: 'Digital marketing specialist', img: 'https://cdn.balkan.app/shared/b/61.jpg' },
            { id: 96, pid: 14, name: 'Tanvir Ingram', title: 'Digital marketing specialist', img: 'https://cdn.balkan.app/shared/b/62.jpg' },
            { id: 97, pid: 15, name: 'Indi Guy', title: 'Communications specialist', img: 'https://cdn.balkan.app/shared/b/63.jpg' },
            { id: 98, pid: 15, name: 'Phoenix Stokes', title: 'Communications specialist', img: 'https://cdn.balkan.app/shared/b/64.jpg' },
            { id: 99, pid: 16, name: 'Phillippa Wilkins', title: 'Diversity specialist', img: 'https://cdn.balkan.app/shared/c/1.jpg' },


            { id: 100, pid: 17, name: 'Britney Potter', title: 'Compensation and Benefits Specialist', img: 'https://cdn.balkan.app/shared/c/2.jpg' },
            { id: 101, pid: 17, name: 'Asiya Duran', title: 'Compensation and Benefits Specialist', img: 'https://cdn.balkan.app/shared/c/3.jpg' },
            { id: 102, pid: 18, name: 'Mariya Kemp', title: 'HR specialist', img: 'https://cdn.balkan.app/shared/c/4.jpg' },
            { id: 103, pid: 18, name: 'Yaqub Terry', title: 'HR specialist', img: 'https://cdn.balkan.app/shared/c/5.jpg' },
            { id: 104, pid: 18, name: 'Adrian Guzman', title: 'HR specialist', img: 'https://cdn.balkan.app/shared/c/6.jpg' },
            { id: 105, pid: 19, name: 'Dane Frost', title: 'Human resource information specialist', img: 'https://cdn.balkan.app/shared/c/7.jpg' },
            { id: 106, pid: 20, name: 'Eliot Delgado', title: 'Recruiter', img: 'https://cdn.balkan.app/shared/c/8.jpg' },
            { id: 107, pid: 20, name: 'Bobbi Weaver', title: 'Recruiter', img: 'https://cdn.balkan.app/shared/c/9.jpg' },
            { id: 108, pid: 20, name: 'Jillian Burgess', title: 'Recruiter', img: 'https://cdn.balkan.app/shared/c/10.jpg' },
            { id: 109, pid: 20, name: 'Tyrese Morales', title: 'Recruiter', img: 'https://cdn.balkan.app/shared/c/11.jpg' },


            { id: 110, pid: 21, name: 'Hetty Randall', title: 'QA specialist trainee', img: 'https://cdn.balkan.app/shared/c/12.jpg' },
            { id: 111, pid: 21, name: 'Kory Kearns', title: 'QA specialist trainee', img: 'https://cdn.balkan.app/shared/c/13.jpg' },
            { id: 112, pid: 23, name: 'Rikki Reynolds', title: 'QA specialist trainee', img: 'https://cdn.balkan.app/shared/c/14.jpg' },
            { id: 113, pid: 23, name: 'Ciaran Hussain', title: 'QA specialist trainee', img: 'https://cdn.balkan.app/shared/c/15.jpg' },
            { id: 114, pid: 24, name: 'Bailey Prince', title: 'QA specialist trainee', img: 'https://cdn.balkan.app/shared/c/16.jpg' },
            { id: 115, pid: 25, name: 'Reo Melia', title: 'QA specialist trainee', img: 'https://cdn.balkan.app/shared/c/17.jpg' },
            { id: 116, pid: 26, name: 'Nadia Odom', title: 'QA specialist trainee', img: 'https://cdn.balkan.app/shared/c/18.jpg' },
            { id: 117, pid: 26, name: 'Kim Beach', title: 'QA specialist trainee', img: 'https://cdn.balkan.app/shared/c/19.jpg' },
            { id: 118, pid: 26, name: 'Gabriel Mcghee', title: 'QA specialist trainee', img: 'https://cdn.balkan.app/shared/d/1.jpg' },
            { id: 119, pid: 26, name: 'Camille Hodge', title: 'QA specialist trainee', img: 'https://cdn.balkan.app/shared/d/2.jpg' },



            { id: 120, pid: 30, name: 'Rebekah Cullen', title: 'Full Stack Development trainee', img: 'https://cdn.balkan.app/shared/d/3.jpg' },
            { id: 121, pid: 32, name: 'Colby Workman', title: 'Full Stack Development trainee', img: 'https://cdn.balkan.app/shared/d/4.jpg' },
            { id: 122, pid: 32, name: 'Lorena Key', title: 'Full Stack Development trainee', img: 'https://cdn.balkan.app/shared/d/5.jpg' },
            { id: 123, pid: 32, name: 'Destiny Mcguire', title: 'Full Stack Development trainee', img: 'https://cdn.balkan.app/shared/d/6.jpg' },
            { id: 124, pid: 32, name: 'Hadley White', title: 'Full Stack Development trainee', img: 'https://cdn.balkan.app/shared/d/7.jpg' },
            { id: 125, pid: 32, name: 'Cameron Huber', title: 'Full Stack Development trainee', img: 'https://cdn.balkan.app/shared/d/8.jpg' },
            { id: 126, pid: 32, name: 'Alexie Bowler', title: 'Full Stack Development trainee', img: 'https://cdn.balkan.app/shared/d/9.jpg' },
            { id: 127, pid: 126, name: 'Tanvir Bush', title: 'Full Stack Development trainee', img: 'https://cdn.balkan.app/shared/d/10.jpg' },
            { id: 128, pid: 126, name: 'Sheldon Herman', title: 'Full Stack Development trainee', img: 'https://cdn.balkan.app/shared/d/11.jpg' },
            { id: 129, pid: 126, name: 'Yassin Hale', title: 'Full Stack Development trainee', img: 'https://cdn.balkan.app/shared/d/12.jpg' },


        ]);

};