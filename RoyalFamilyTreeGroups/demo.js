window.onload = function () { 

    var familyGroupTag = {
        group: true,
        template: "group"
    };
    
    var familyGroupTag3 = {
        group: true,
        template: "group3"
    };
    
    OrgChart.templates.group.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>';
    btnMinimize = 
                '<svg fill="#aeaeae" x="410" y="17" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                    'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
                   '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
                   '<polygon points="311.683,349.411 205.12,242.5 311.683,135.589 290.435,114.411 162.762,242.5 290.435,370.589 	"/>' +     
                '</svg>';
    btnMaximize = 
                '<svg fill="#aeaeae" x="198" y="47" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                    'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
                    '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
                    '<polygon points="194.565,370.589 322.237,242.5 194.565,114.411 173.317,135.589 279.88,242.5 173.317,349.411 	"/>' +
                '</svg>';
    btnMinimize3 = 
                '<svg fill="#aeaeae" x="630" y="17" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                    'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
                   '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
                   '<polygon points="311.683,349.411 205.12,242.5 311.683,135.589 290.435,114.411 162.762,242.5 290.435,370.589 	"/>' +     
                '</svg>';      
                
            OrgChart.templates.group.min = Object.assign({}, OrgChart.templates.group);
            OrgChart.templates.group.min.name = '<text width="230" text-overflow="multiline" style="font-size: 24px;" fill="#aeaeae" x="125" y="65" text-anchor="middle">{val}</text>';
            OrgChart.templates.group.minBtn = btnMinimize +
                '<rect data-btn-min="{val}" x="410" y="17" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
            OrgChart.templates.group3 = Object.assign({}, OrgChart.templates.group);
            OrgChart.templates.group3.minBtn = btnMinimize3 +
                '<rect data-btn-min="{val}" x="630" y="17" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
            OrgChart.templates.group.min.maxBtn = btnMaximize +
                '<rect data-btn-max="{val}" x="198" y="47" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
    
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "diva",
        enableDragDrop: true,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img",
            minBtn: "id",
            maxBtn: "id"
        },
        tags: {
            f1: familyGroupTag,
            f2: familyGroupTag,
            f3: familyGroupTag3,
            f4: familyGroupTag,
            f5: familyGroupTag
        },
    
    });
    
    nodes = [
            { id: "f1", tags: ["f1"] },
            { id: 1, stpid: "f1", name: "King George VI", img: "https://cdn.balkan.app/shared/f1.png" },
            { id: 2, stpid: "f1", name: "Queen Elizabeth", title: "The Queen Mother", img: "https://cdn.balkan.app/shared/f2.png" },
            { id: "f2", pid: "f1", tags: ["f2"] },
            { id: 3, stpid: "f2", pid: 2, name: "Prince Philip", title: "Duke of Edinburgh", img: "https://cdn.balkan.app/shared/f3.png" },
            { id: 4, stpid: "f2", pid: 2, name: "Queen Elizabeth II", img: "https://cdn.balkan.app/shared/f5.png" },
            { id: 5, pid: "f1", name: "Princess Margaret", img: "https://cdn.balkan.app/shared/f6.png" },
            { id: "f3", pid: "f2", tags: ["f3"] },
            { id: 6, stpid: "f3", name: "Camila", title: "Duchess of Cornwall", img: "https://cdn.balkan.app/shared/f7.png" },
            { id: 7, stpid: "f3", name: "Charles", title: "Prince of Wales", img: "https://cdn.balkan.app/shared/f8.png" },
            { id: 8, stpid: "f3", name: "Diana", title: "Princess of Wales", img: "https://cdn.balkan.app/shared/f9.png" },
            { id: 9, pid: "f2", name: "Anne", title: "Princess Royal", img: "https://cdn.balkan.app/shared/f10.png" },
            { id: 10, pid: "f2", name: "Prince Andrew", title: "Duke of York", img: "https://cdn.balkan.app/shared/f11.png" },
            { id: 11, pid: "f2", name: "Prince Edward", title: "Earl of Wessex", img: "https://cdn.balkan.app/shared/f12.png" },
            { id: "f4", pid: "f3", tags: ["f4"] },
            { id: 12, stpid: "f4", name: "Catherine", title: "Duchess of Cambridge", img: "https://cdn.balkan.app/shared/f13.png" },
            { id: 13, stpid: "f4", name: "Prince William", title: "Duch of Cambridge", img: "https://cdn.balkan.app/shared/f14.png" },
            { id: "f5", pid: "f3", tags: ["f5"] },
            { id: 14, stpid: "f5", name: "Prince Harry", img: "https://cdn.balkan.app/shared/f15.png" },
            { id: 15, stpid: "f5", name: "Meghan Markle", img: "https://cdn.balkan.app/shared/f16.png" },
            { id: 16, pid: "f4", name: "Prince George of Cambridge", img: "https://cdn.balkan.app/shared/f17.png" },
            { id: 17, pid: "f4", name: "Prince Charlotte of Cambridge", img: "https://cdn.balkan.app/shared/f18.png" },
            { id: 18, pid: "f4", name: "Prince Louis of Cambridge", img: "https://cdn.balkan.app/shared/f19.png" }
        ];
    
        
        chart.on('redraw', (sender) => {
                    let minBtns = document.querySelectorAll('*[data-btn-min]');
    
                    minBtns.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            chart.minimize(btn.getAttribute('data-btn-min'));
                        });
                    });
    
                    let maxBtns = document.querySelectorAll('*[data-btn-max]');
    
                    maxBtns.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            chart.maximize(btn.getAttribute('data-btn-max'));
                        });
                    });
    
                });
    
    
        chart.load(nodes);
    
    };