window.onload = function () { 
  OrgChart.pdfPrevUI.show = function (chart, options) {
    options = chart._defaultExportOptions(options, 'pdf')

    var div1 = document.createElement("div");
    div1.id = 'bg-ppdf-btns';
    Object.assign(div1.style, {
        position: 'absolute', top: 0, left: 0, 'background-color': '#fff', 'z-index': 5, margin: "0 0 0 -250px", 'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '250px', height: '100%', "font-family": "Roboto,Helvetica", 'color': '#757575', 'text-align': 'right', 'padding': '10px'
    });

    chart.element.appendChild(div1);

    div1.innerHTML = '<h1>'
        + OrgChart.loc.ppdfCmdTitle
        + '</h1>'
        + '<div><button id="bg-prev-save" style="font-size: 14px; width: 90px;">' + OrgChart.loc.ppdfSave + '</button>&nbsp;<button id="bg-prev-cancel" style="width: 90px;font-size: 14px;">' + OrgChart.loc.ppdfCancel + '</button></div>'
        + '<div style="margin-top:30px; height:10px;border-bottom:1px solid #eeeeee;"></div>'
        + '<div style="padding-top:30px;"><label for="bg-size">' + OrgChart.loc.ppdfFormat + ': </label><select id="bg-ppdf-size" style="color: #757575; width: 150px; font-size: 14px;" id="bg-size">'
        + '<option value="fit">' + OrgChart.loc.ppdfFitToDrwaing + '</option>'
        + '<option value="A4">' + OrgChart.loc.ppdfA4 + '</option>'
        + '<option value="A3">' + OrgChart.loc.ppdfA3 + '</option>'
        + '<option value="A2">' + OrgChart.loc.ppdfA2 + '</option>'
        + '<option value="A1">' + OrgChart.loc.ppdfA1 + '</option>'
        + '</select></div>'
        + '<div style="padding-top:10px;"><label for="bg-ppdf-layout">' + OrgChart.loc.ppdfLayout + ': </label><select id="bg-ppdf-layout" style="color: #757575; width: 150px;font-size: 14px;" >'
        + '<option value="false">' + OrgChart.loc.ppdfPortrait + '</option>'
        + '<option value="true">' + OrgChart.loc.ppdfLandscape + '</option>'
        + '</select></div>'
        + '<div style="padding-top:10px;"><label for="bg-scale">' + OrgChart.loc.ppdfScale + ': </label><select id="bg-ppdf-scale" style="color: #757575; width: 150px;font-size: 14px;" id="bg-scale">'
        + '<option value="fit">' + OrgChart.loc.ppdfFittopagewidth + '</option>'
        + '<option value="100">100%</option>'
        + '</select></div>'
        + '<div style="margin-top:10px;margin-bottom:10px; height:10px;border-bottom:1px solid #eeeeee;"></div>'
        + '<label for="template1">Template 1</label><input id="template1" type="radio" name="template" value="male"><br>'
        + '<label for="template2">Template 2</label><input id="template2" type="radio" name="template" value="female"><br>'
        + '<div style="padding-top:10px;"><label for="bg-ppdf-margin-left">margin left: </label><input id="bg-ppdf-margin-left" type="text" style="color: #757575; width: 100px;font-size: 14px;" ></div>'
        + '<div style="padding-top:10px;"><label for="bg-ppdf-margin-right">margin right: </label><input id="bg-ppdf-margin-right" type="text" style="color: #757575; width: 100px;font-size: 14px;" ></div>'
        + '<div style="padding-top:10px;"><label for="bg-ppdf-margin-top">margin top: </label><input id="bg-ppdf-margin-top" type="text" style="color: #757575; width: 100px;font-size: 14px;" ></div>'
        + '<div style="padding-top:10px;"><label for="bg-ppdf-margin-bottom">margin bottom: </label><input id="bg-ppdf-margin-bottom" type="text" style="color: #757575; width: 100px;font-size: 14px;" ></div>';

    var div2 = document.createElement("div");
    div2.id = 'bg-ppdf-wrapper';
    Object.assign(div2.style, {
        'overflow-y': 'scroll', position: 'absolute', top: 0, left: '270px', 'background-color': '#eee', width: (chart.width() - 270) + 'px', height: '100%'
    });

    chart.element.appendChild(div2);

    div2.innerHTML = '<div id="bg-ppdf-content" style="width: 100%;margin-top:10px;margin-bottom:10px;opacity:0;"></div>';

    var bgppdfformat = chart.element.querySelector('#bg-ppdf-size');
    var bgppdflayout = chart.element.querySelector('#bg-ppdf-layout');
    var bgppdfscale = chart.element.querySelector('#bg-ppdf-scale');
    var bgppdfmarginLeft = chart.element.querySelector('#bg-ppdf-margin-left');
    var bgppdfmarginRight = chart.element.querySelector('#bg-ppdf-margin-right');
    var bgppdfmarginTop = chart.element.querySelector('#bg-ppdf-margin-top');
    var bgppdfmarginBottom = chart.element.querySelector('#bg-ppdf-margin-bottom');

    var templateRadioButton = chart.element.querySelectorAll('[name="template"]');


    bgppdfformat.value = options.format;
    bgppdflayout.value = options.landscape;
    bgppdfscale.value = options.scale;
    bgppdfmarginLeft.value = options.margin[3];
    bgppdfmarginRight.value = options.margin[1];
    bgppdfmarginTop.value = options.margin[0];
    bgppdfmarginBottom.value = options.margin[2];

    OrgChart.anim(chart.element.querySelector('#bg-ppdf-btns'), { margin: [0, 0, 0, -250] }, { margin: [0, 0, 0, 0] }, 300, OrgChart.anim.outSin, function () {
        chart.exportPDF(options, OrgChart.pdfPrevUI._handler);
    });

    chart.element.querySelector('#bg-prev-cancel').addEventListener('click', function () {
        OrgChart.pdfPrevUI.hide(chart);
    });

    chart.element.querySelector('#bg-prev-save').addEventListener('click', function () {
        chart.exportPDF(options);
        OrgChart.pdfPrevUI.hide(chart);
    });

    OrgChart.pdfPrevUI._showHide(bgppdfformat, bgppdflayout, bgppdfscale);

    bgppdfformat.addEventListener('change', function () {
        OrgChart.anim(chart.element.querySelector('#bg-ppdf-content'), { opacity: 1 }, { opacity: 0 }, 300, OrgChart.anim.inSin, function () {
            chart.element.querySelector('#bg-ppdf-content').innerHTML = '';
            options.format = bgppdfformat.value;
            chart.exportPDF(options, OrgChart.pdfPrevUI._handler);
            OrgChart.pdfPrevUI._showHide(bgppdfformat, bgppdflayout, bgppdfscale);
        });
    });

    bgppdflayout.addEventListener('change', function () {
        OrgChart.anim(chart.element.querySelector('#bg-ppdf-content'), { opacity: 1 }, { opacity: 0 }, 300, OrgChart.anim.inSin, function () {
            chart.element.querySelector('#bg-ppdf-content').innerHTML = '';
            options.landscape = bgppdflayout.value == 'true';
            chart.exportPDF(options, OrgChart.pdfPrevUI._handler);
            OrgChart.pdfPrevUI._showHide(bgppdfformat, bgppdflayout, bgppdfscale);
        });
    });

    bgppdfscale.addEventListener('change', function () {
        OrgChart.anim(chart.element.querySelector('#bg-ppdf-content'), { opacity: 1 }, { opacity: 0 }, 300, OrgChart.anim.inSin, function () {
            chart.element.querySelector('#bg-ppdf-content').innerHTML = '';
            options.scale = bgppdfscale.value;
            chart.exportPDF(options, OrgChart.pdfPrevUI._handler);
            OrgChart.pdfPrevUI._showHide(bgppdfformat, bgppdflayout, bgppdfscale);
        });
    });

    var timeotmarginLeft;
    bgppdfmarginLeft.addEventListener('keyup', function () {
        clearTimeout(timeotmarginLeft);
        timeotmarginLeft = setTimeout(function () {
            OrgChart.anim(chart.element.querySelector('#bg-ppdf-content'), { opacity: 1 }, { opacity: 0 }, 300, OrgChart.anim.inSin, function () {
                chart.element.querySelector('#bg-ppdf-content').innerHTML = '';
                var margin = parseInt(bgppdfmarginLeft.value);
                if (margin) {
                    options.margin[3] = margin;
                    chart.exportPDF(options, OrgChart.pdfPrevUI._handler);
                }
            });
        }, 1000);
    });

    var timeotmarginRight;
    bgppdfmarginRight.addEventListener('keyup', function () {
        clearTimeout(timeotmarginRight);
        timeotmarginRight = setTimeout(function () {
            OrgChart.anim(chart.element.querySelector('#bg-ppdf-content'), { opacity: 1 }, { opacity: 0 }, 300, OrgChart.anim.inSin, function () {
                chart.element.querySelector('#bg-ppdf-content').innerHTML = '';
                var margin = parseInt(bgppdfmarginRight.value);
                if (margin) {
                    options.margin[1] = margin;
                    chart.exportPDF(options, OrgChart.pdfPrevUI._handler);
                }
            });
        }, 1000);
    });


    var timeotmarginTop;
    bgppdfmarginTop.addEventListener('keyup', function () {
        clearTimeout(timeotmarginTop);
        timeotmarginTop = setTimeout(function () {
            OrgChart.anim(chart.element.querySelector('#bg-ppdf-content'), { opacity: 1 }, { opacity: 0 }, 300, OrgChart.anim.inSin, function () {
                chart.element.querySelector('#bg-ppdf-content').innerHTML = '';
                var margin = parseInt(bgppdfmarginTop.value);
                if (margin) {
                    options.margin[0] = margin;
                    chart.exportPDF(options, OrgChart.pdfPrevUI._handler);
                }
            });
        }, 1000);
    });

    var timeotmarginBottom;
    bgppdfmarginBottom.addEventListener('keyup', function () {
        clearTimeout(timeotmarginBottom);
        timeotmarginBottom = setTimeout(function () {
            OrgChart.anim(chart.element.querySelector('#bg-ppdf-content'), { opacity: 1 }, { opacity: 0 }, 300, OrgChart.anim.inSin, function () {
                chart.element.querySelector('#bg-ppdf-content').innerHTML = '';
                var margin = parseInt(bgppdfmarginBottom.value);
                if (margin) {
                    options.margin[2] = margin;
                    chart.exportPDF(options, OrgChart.pdfPrevUI._handler);
                }
            });
        }, 1000);
    });



    var timeottemplate;

    for(var i = 0; i < templateRadioButton.length; i++){
        templateRadioButton[i].addEventListener('click', function() {
            var id = this.id;
            clearTimeout(timeottemplate);
            timeottemplate = setTimeout(function () {
                OrgChart.anim(chart.element.querySelector('#bg-ppdf-content'), { opacity: 1 }, { opacity: 0 }, 300, OrgChart.anim.inSin, function () {
                    chart.element.querySelector('#bg-ppdf-content').innerHTML = '';
                    if (id == "template1"){
                        options.header = "header template 1";
                        options.footer = "footer template 1";
                    }
                    else if (id == "template2"){
                        options.header = "header template 2";
                        options.footer = "footer template 2";
                    }
                    chart.exportPDF(options, OrgChart.pdfPrevUI._handler);
                });
            }, 1000);


        });
    }

};


chart = new OrgChart(document.getElementById("tree"), {
    menu: {
        pdfPreview: {
            text: "PDF Preview",
            icon: OrgChart.icon.pdf(24, 24, '#7A7A7A'),
            onClick: preview
        }
    },
    nodeBinding: {
        field_0: "name",
        field_1: "title"
    },
    nodes: [
        { id: "1", name: "Jack Hill", title: "Chairman and CEO", email: "amber@domain.com" },
        { id: "2", pid: "1", name: "Lexie Cole", title: "QA Lead", email: "ava@domain.com" },
        { id: "3", pid: "1", name: "Janae Barrett", title: "Technical Director" }
    ]
});

function preview() {
    OrgChart.pdfPrevUI.show(chart, {
        format: 'A4'
    });
}

};
