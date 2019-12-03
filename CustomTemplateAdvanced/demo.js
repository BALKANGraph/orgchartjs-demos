

window.onload = function () {
   
    OrgChart.templates.neet = Object.assign({}, OrgChart.templates.base);
    OrgChart.templates.neet.svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:block;background-color: #2E2E2E;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>';
    OrgChart.templates.neet.plus = '';
    OrgChart.templates.neet.minus = '';
    OrgChart.templates.neet.link = '<path stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}"/>';
    
    OrgChart.templates.dot = Object.assign({}, OrgChart.templates.base);
    OrgChart.templates.dot.plus = '';
    OrgChart.templates.dot.minus = '';
    OrgChart.templates.dot.link = '';

    var colors = ['#FFCA28', '#F57C00', '#039BE5', '#757575'];



    var initialized = false;
    var nodes = [
        { id: 1 , img: 'https://cdn.balkan.app/shared/1.jpg'},
        { id: 2, pid: 1, img: 'https://cdn.balkan.app/shared/2.jpg' },
        { id: 3, pid: 1, img: 'https://cdn.balkan.app/shared/3.jpg' },
        { id: 4, pid: 1, img: 'https://cdn.balkan.app/shared/4.jpg' },
        { id: 5, pid: 1, img: 'https://cdn.balkan.app/shared/5.jpg' },
        { id: 6, pid: 1, img: 'https://cdn.balkan.app/shared/6.jpg' },
        { id: 7, pid: 1, img: 'https://cdn.balkan.app/shared/7.jpg' },
        { id: 8, pid: 1, img: 'https://cdn.balkan.app/shared/8.jpg' },
        { id: 9, pid: 1, img: 'https://cdn.balkan.app/shared/9.jpg' },
        { id: 10, pid: 1, img: 'https://cdn.balkan.app/shared/10.jpg' },
        { id: 11, pid: 1, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 12, pid: 1, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 13, pid: 1, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 14, pid: 1, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 15, pid: 1, img: 'https://cdn.balkan.app/shared/15.jpg' },
        { id: 16, pid: 1, img: 'https://cdn.balkan.app/shared/16.jpg' },

        { id: 17, pid: 2, img: 'https://cdn.balkan.app/shared/11.jpg'  },
        { id: 18, pid: 2, img: 'https://cdn.balkan.app/shared/2.jpg'  },
        { id: 19, pid: 2, img: 'https://cdn.balkan.app/shared/3.jpg'  },
        { id: 20, pid: 2, img: 'https://cdn.balkan.app/shared/4.jpg'  },
        { id: 21, pid: 2, img: 'https://cdn.balkan.app/shared/5.jpg'  },
        { id: 22, pid: 2, img: 'https://cdn.balkan.app/shared/6.jpg'  },
        { id: 23, pid: 2, img: 'https://cdn.balkan.app/shared/7.jpg'  },
        { id: 24, pid: 2, img: 'https://cdn.balkan.app/shared/8.jpg'  },
        { id: 25, pid: 2, img: 'https://cdn.balkan.app/shared/9.jpg'  },
        { id: 26, pid: 2, img: 'https://cdn.balkan.app/shared/10.jpg'  },

        { id: 27, pid: 16, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 28, pid: 16, img: 'https://cdn.balkan.app/shared/4.jpg' },
        { id: 29, pid: 16, img: 'https://cdn.balkan.app/shared/5.jpg' },
        { id: 30, pid: 16, img: 'https://cdn.balkan.app/shared/6.jpg' },
        { id: 31, pid: 16, img: 'https://cdn.balkan.app/shared/7.jpg' },
        { id: 32, pid: 16, img: 'https://cdn.balkan.app/shared/8.jpg' },
        { id: 33, pid: 16, img: 'https://cdn.balkan.app/shared/9.jpg' },
        { id: 34, pid: 16, img: 'https://cdn.balkan.app/shared/1.jpg' },
        { id: 35, pid: 16, img: 'https://cdn.balkan.app/shared/2.jpg' },
        { id: 36, pid: 16, img: 'https://cdn.balkan.app/shared/14.jpg' },

        { id: 37, pid: 4, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 38, pid: 4, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 39, pid: 4, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 40, pid: 4, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 41, pid: 4, img: 'https://cdn.balkan.app/shared/15.jpg' },
        { id: 42, pid: 4, img: 'https://cdn.balkan.app/shared/16.jpg' },
        { id: 43, pid: 4, img: 'https://cdn.balkan.app/shared/10.jpg' },
        { id: 44, pid: 4, img: 'https://cdn.balkan.app/shared/9.jpg' },
        { id: 45, pid: 4, img: 'https://cdn.balkan.app/shared/8.jpg' },
        { id: 46, pid: 4, img: 'https://cdn.balkan.app/shared/7.jpg' },


        { id: 47, pid: 5, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 48, pid: 5, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 49, pid: 5, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 50, pid: 5, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 51, pid: 5, img: 'https://cdn.balkan.app/shared/15.jpg' },
        { id: 52, pid: 5, img: 'https://cdn.balkan.app/shared/16.jpg' },
        { id: 53, pid: 5, img: 'https://cdn.balkan.app/shared/10.jpg' },
        { id: 54, pid: 5, img: 'https://cdn.balkan.app/shared/9.jpg' },
        { id: 55, pid: 5, img: 'https://cdn.balkan.app/shared/8.jpg' },
        { id: 56, pid: 5, img: 'https://cdn.balkan.app/shared/7.jpg' },

        { id: 57, pid: 6, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 58, pid: 6, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 59, pid: 6, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 60, pid: 6, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 61, pid: 6, img: 'https://cdn.balkan.app/shared/15.jpg' },
        { id: 62, pid: 6, img: 'https://cdn.balkan.app/shared/16.jpg' },
        { id: 63, pid: 6, img: 'https://cdn.balkan.app/shared/10.jpg' },
        { id: 64, pid: 6, img: 'https://cdn.balkan.app/shared/9.jpg' },
        { id: 65, pid: 6, img: 'https://cdn.balkan.app/shared/8.jpg' },
        { id: 66, pid: 6, img: 'https://cdn.balkan.app/shared/7.jpg' },

        { id: 67, pid: 7, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 68, pid: 7, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 69, pid: 7, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 70, pid: 7, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 71, pid: 7, img: 'https://cdn.balkan.app/shared/15.jpg' },
        { id: 72, pid: 7, img: 'https://cdn.balkan.app/shared/16.jpg' },
        { id: 73, pid: 7, img: 'https://cdn.balkan.app/shared/10.jpg' },
        { id: 74, pid: 7, img: 'https://cdn.balkan.app/shared/9.jpg' },
        { id: 75, pid: 7, img: 'https://cdn.balkan.app/shared/8.jpg' },
        { id: 76, pid: 7, img: 'https://cdn.balkan.app/shared/7.jpg' },


        { id: 77, pid: 19, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 78, pid: 19, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 79, pid: 19, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 80, pid: 19, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 81, pid: 19, img: 'https://cdn.balkan.app/shared/15.jpg' },


        { id: 82, pid: 20, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 83, pid: 20, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 84, pid: 20, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 85, pid: 20, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 86, pid: 20, img: 'https://cdn.balkan.app/shared/15.jpg' },


        { id: 87, pid: 21, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 88, pid: 21, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 89, pid: 21, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 90, pid: 21, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 91, pid: 21, img: 'https://cdn.balkan.app/shared/15.jpg' },


        { id: 92, pid: 22, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 93, pid: 22, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 94, pid: 22, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 95, pid: 22, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 96, pid: 22, img: 'https://cdn.balkan.app/shared/15.jpg' },



        { id: 97, pid: 23, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 98, pid: 23, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 99, pid: 23, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 100, pid: 23, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 101, pid: 23, img: 'https://cdn.balkan.app/shared/15.jpg' },


        { id: 102, pid: 24, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 103, pid: 24, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 104, pid: 24, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 105, pid: 24, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 106, pid: 24, img: 'https://cdn.balkan.app/shared/15.jpg' },


        
        { id: 107, pid: 25, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 108, pid: 25, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 109, pid: 25, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 110, pid: 25, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 111, pid: 25, img: 'https://cdn.balkan.app/shared/15.jpg' },


        { id: 112, pid: 29, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 113, pid: 29, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 114, pid: 29, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 115, pid: 29, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 116, pid: 29, img: 'https://cdn.balkan.app/shared/15.jpg' },



        { id: 117, pid: 30, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 118, pid: 30, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 119, pid: 30, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 120, pid: 30, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 121, pid: 30, img: 'https://cdn.balkan.app/shared/15.jpg' },


        { id: 122, pid: 31, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 123, pid: 31, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 124, pid: 31, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 125, pid: 31, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 126, pid: 31, img: 'https://cdn.balkan.app/shared/15.jpg' },

        
        { id: 127, pid: 32, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 128, pid: 32, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 129, pid: 32, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 130, pid: 32, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 131, pid: 32, img: 'https://cdn.balkan.app/shared/15.jpg' },


        { id: 132, pid: 33, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 133, pid: 33, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 134, pid: 33, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 135, pid: 33, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 136, pid: 33, img: 'https://cdn.balkan.app/shared/15.jpg' },

        { id: 137, pid: 34, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 138, pid: 34, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 139, pid: 34, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 140, pid: 34, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 141, pid: 34, img: 'https://cdn.balkan.app/shared/15.jpg' },


        { id: 142, pid: 35, img: 'https://cdn.balkan.app/shared/11.jpg' },
        { id: 143, pid: 35, img: 'https://cdn.balkan.app/shared/12.jpg' },
        { id: 144, pid: 35, img: 'https://cdn.balkan.app/shared/13.jpg' },
        { id: 145, pid: 35, img: 'https://cdn.balkan.app/shared/14.jpg' },
        { id: 146, pid: 35, img: 'https://cdn.balkan.app/shared/15.jpg' }
    ];

    var chart = new OrgChart(document.getElementById("tree"), {
        template: 'neet',
        enableSearch: false,
        nodeMouseClick: OrgChart.action.expandCollapse,
        siblingSeparation: 6,
        nodeBinding: {
            img: "img"
        }    
    });

    chart.on('ready', function(sender, tree){
        if (!initialized){
            for (var i = 0; i < tree.roots.length; i++) {
                first_walk(tree.roots[i]);
            }

            for (var id in tree.nodes) {
                second_walk(tree.nodes[id]);
            }                    
            initialized = true;
        }
    });

    chart.on('expcollclick', function(sender, state, id){ 
        var tags = chart._get(id).tags;
        if (isDot(tags)){   
            var node = sender.getBGNode(id);
            chart._get(id).tags = ['neet_' + (node.level)];                          
        }
    });

    chart.on('redraw', function(sender){ 
        for(var id in chart.nodes){
            var node = chart.nodes[id];
            if (node.templateName.indexOf('dot') != -1){
                var dotEl = chart.getNodeElement(id);
                if (dotEl){
                    dotEl.addEventListener('mouseover', function(){
                        var nid = this.getAttribute('node-id');
                        var level = chart.getBGNode(nid).level;
                        var circle = this.querySelector('circle');
                        circle.setAttribute('fill', '#757575');
                    });

                    dotEl.addEventListener('mouseleave', function(){
                        var nid = this.getAttribute('node-id');
                        var level = chart.getBGNode(nid).level;
                        var circle = this.querySelector('circle');
                        circle.setAttribute('fill', colors[level]);
                    });
                }
            }
        }
    });




    chart.load(nodes);

    function first_walk(node){
        var childrenCount = node.children.length;
        if (childrenCount != 0){
            for (var i = 0; i < childrenCount; i++) {
                var cnode = node.children[i];
                if (childrenCount > 3 && i > 1 && i != childrenCount - 1){
                    var level = getLevel(cnode);
                    var t = createDotTemplate(level);
                    console.log(t.name);
                    cnode.templateName = t.name;
                    cnode.tags = [t.name];
                    cnode.w = 10;
                    cnode.h = t.heidth;
                    cnode.collapsedChildrenIds = cnode.childrenIds;
                    chart._get(cnode.id).tags = [t.name];  
                    if (!chart.hasTag(t.name)){
                        chart.addTag(t.name, {template: t.name})
                    }                          
                }
                first_walk(cnode);
            }
        }
    }

    function second_walk(node){
        var level = getLevel(node);

        if (node.templateName.indexOf('dot') != -1){
            third_walk(node);
            node.children = [];
            node.collapsedChildrenIds = node.childrenIds;
        }
        else {
            var t = createTemplate(level);
            node.templateName = t.name;
            node.w = parseInt(t.size);
            node.h = parseInt(t.size);
            chart._get(node.id).tags = [t.name];       
            if (!chart.hasTag(t.name)){
                chart.addTag(t.name, {template: t.name})
            }
        }            
    }     
    
    function third_walk(node){  
        var childrenCount = node.children.length;
        if (childrenCount != 0){
            for (var i = 0; i < childrenCount; i++) {
                var cnode = node.children[i];
                cnode.state = OrgChart.COLLAPSE;
                third_walk(cnode);
            }
        }   
    }      

    function createTemplate(level){
        var name = 'neet_' + level;
        var size = (100 - (level * 10));

        if (!OrgChart.templates[name]){
            var radius = size / 2;
            OrgChart.templates[name] = Object.assign({}, OrgChart.templates.neet);
            OrgChart.templates[name].size = [size,size];
            OrgChart.templates[name].node = '<circle fill="' + colors[level] + '" cx="' + radius + '" cy="' + radius + '" r="' + radius + '"></circle>';

            OrgChart.templates[name].img = '<clipPath id="{randId}"><circle cx="' + (radius) +  '" cy="' + (radius) + '" r="' + (radius - 4) + '"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="4" y="4"  width="' +  (size - 8) + '" height="' + (size - 8) + '"></image>', 
            OrgChart.templates[name].ripple = {
                radius: size,
                color: colors[level],
            };
        }

        return {
            name: name, 
            size: size
        };
    }

    function createDotTemplate(level){
        var name = 'dot_' + level;
        var heidth = (100 - (level * 10));

        if (!OrgChart.templates[name]){
            OrgChart.templates[name] = Object.assign({}, OrgChart.templates.dot);
            OrgChart.templates[name].size = [10,heidth];
            OrgChart.templates[name].node = '<rect x="-3" y="0" fill="#2E2E2E" width="17" height="' + heidth + '"></rect><circle fill="' + colors[level] + '" cx="5" cy="' + (heidth / 2) + '" r="5"></circle>';
            OrgChart.templates[name].ripple = {
                radius: 0,
                color: 'none'
            };
        }

        return {
            name: name, 
            heidth: heidth
        };
    }

    function getLevel(node){
        var pnode = node.parent;

        var level = 0;
        while(pnode){
            pnode = pnode.parent;
            level++;
        }

        return level;
    }

    function isDot(tags){
        if (!tags){
            return false;
        }
        for(var i = 0; i < tags.length; i++){
            var tag = tags[i];
            if (tag.indexOf('dot') != -1){
                return true;
            }
        }
        return false;
    }

};
