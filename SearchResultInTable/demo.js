
window.onload = function () { 

    var serachIcon = '<svg height="24pt" fill="grey" viewBox="0 -52 512 512" width="24pt"><path d="m0 0h113.292969v113.292969h-113.292969zm0 0"/><path d="m149.296875 0h362.703125v113.292969h-362.703125zm0 0"/><path d="m0 147.007812h113.292969v113.292969h-113.292969zm0 0"/><path d="m149.296875 147.007812h362.703125v113.292969h-362.703125zm0 0"/><path d="m0 294.011719h113.292969v113.296875h-113.292969zm0 0"/><path d="m149.296875 294.011719h362.703125v113.296875h-362.703125zm0 0"/></svg>'
    
    OrgChart.searchUI.createInputField = function (p) {
        return '<div  data-id="search" style="display:none;background-color: red;padding:5px; box-shadow: #808080 0px 1px 2px 0px; font-family:Roboto-Regular, Helvetica;color:#7a7a7a;font-size:14px;border:1px solid #d7d7d7;width:300px;position:absolute;top:' + p + 'px;right:' + p + 'px;background-color:#e5e5e5;">'
            + '<div>'
            + '<div style="float:left;">'
            + serachIcon
            + '</div>'
            + '<div data-id="cell-1" style="float:right; width:83%">'
            + '<input placeholder="' + OrgChart.SEARCH_PLACEHOLDER + '" style="font-size:14px;font-family:Roboto-Regular, Helvetica;color:#7a7a7a;width:100%;border:none;outline:none; padding-top:10px;background-color:#e5e5e5;" type="text" />'
            + '</div>'
            + '<div style="clear:both;"></div>'
            + '</div>'
            + '<table border="0" style="width: 100%" cellpadding="0" cellspacing="" data-id="container"></table>'
            + '</div>'
    };
    
    OrgChart.searchUI.createSearchIcon = function (p) {
        return '<div data-id="search-icon" style="padding:5px; position:absolute;top:' + p + 'px;right:' + p + 'px;border:1px solid transparent;">'
            + '<div>'
            + '<div style="float:left;">'
            + serachIcon
            + '</div>'
            + '</div>'
            + '</div>'
    };
    
    
    OrgChart.searchUI.createItem = function (img, item) {
        return '<tr data-search-item-id="' + item.id + '" style="border-top:1px solid #d7d7d7; padding: 7px 0 7px 0;cursor:pointer;">'
        + '<td>'
        + img
        + '</td>'
        + '<td width:83%">'
        + item.textId
        + '</td>'
            + '<td width:83%">'
        + item.textInNode
        + '</td>'
        + '</tr>';
    };
    
    
    
        var chart = new OrgChart(document.getElementById("tree"), {
            nodeBinding: {
                field_0: "name",
                field_1: "title",
                img_0: "img",
            },
            nodes: [
                { id: 1, name: "Denny Curtis", title: "CEO", 
                img: "https://cdn.balkan.app/shared/2.jpg" },
                { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
                { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
                { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
                { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
                { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
                { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
            ]
        });
    };
    