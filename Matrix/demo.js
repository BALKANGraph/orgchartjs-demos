window.onload = function () {

  OrgChart.templates.yellow = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.yellow.size = [250, 40];
  OrgChart.templates.yellow.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffd68b" stroke-width="1" stroke="#ffbf00" rx="1" ry="1"></rect>';
  OrgChart.templates.yellow.field_0 = '<text data-width="230" style="font-size: 18px;" fill="black" x="125" y="25" text-anchor="middle">{val}</text>';
  OrgChart.templates.yellow.plus = '';
  OrgChart.templates.yellow.minus = '';
  OrgChart.templates.yellow.link = '<path stroke-linejoin="round" stroke="#ffd68b" stroke-width="3px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>';

  OrgChart.templates.yellowRounded = Object.assign({}, OrgChart.templates.yellow);
  OrgChart.templates.yellowRounded.size = [200, 40];
  OrgChart.templates.yellowRounded.node = '<rect x="0" y="0" height="{h}" width="200" fill="#ffd68b" stroke-width="1" stroke="#ffbf00" rx="10" ry="10"></rect>';
  OrgChart.templates.yellowRounded.field_0 = '<text data-width="120" data-text-overflow="multiline" style="font-size: 16px;" fill="black" x="100" y="18" text-anchor="middle">{val}</text>';

  OrgChart.templates.yellowEllipse = Object.assign({}, OrgChart.templates.yellow);
  OrgChart.templates.yellowEllipse.node = '<ellipse cx="120" cy="30" rx="80" ry="30" fill="#ffd68b" rx="10" ry="10" />';
  OrgChart.templates.yellowEllipse.field_0 = '<text data-width="150" data-text-overflow="multiline" style="font-size: 16px;" fill="black" x="125" y="30" text-anchor="middle">{val}</text>';
  
  OrgChart.templates.blue = Object.assign({}, OrgChart.templates.yellow);
  OrgChart.templates.blue.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#4473c4" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
  OrgChart.templates.blue.field_0 = '<text data-width="230" style="font-size: 18px;" fill="white" x="125" y="35" text-anchor="middle">{val}</text>';

OrgChart.templates.hiddenTemplate = Object.assign({}, OrgChart.templates.yellow);
OrgChart.templates.hiddenTemplate.size = [0, 0];
OrgChart.templates.hiddenTemplate.node = '';
OrgChart.templates.hiddenTemplate.plus = '';
OrgChart.templates.hiddenTemplate.minus = '';

OrgChart.templates.rootTemplate = Object.assign({}, OrgChart.templates.yellow);
OrgChart.templates.rootTemplate.link = '';

  OrgChart.templates.blueRoot = Object.assign({}, OrgChart.templates.rootTemplate);
  OrgChart.templates.blueRoot.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#4473c4" stroke-width="1" stroke="#2f528f" rx="1" ry="1"></rect>';
  OrgChart.templates.blueRoot.field_0 = '<text data-width="230" style="font-size: 18px;" fill="white" x="125" y="25" text-anchor="middle">{val}</text>';


  OrgChart.templates.greenRoot = Object.assign({}, OrgChart.templates.blueRoot);
  OrgChart.templates.greenRoot.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#70ad47" stroke-width="1" stroke="#507e32" rx="1" ry="1"></rect>';

  OrgChart.slinkTemplates.myLink = Object.assign({}, OrgChart.slinkTemplates.orange);
  OrgChart.slinkTemplates.myLink.defs = '';
  OrgChart.slinkTemplates.myLink.link = '<path stroke-dasharray="4, 5" stroke="grey" stroke-width="1" fill="none" d="{d}" />';

  OrgChart.templates.lightBlue = Object.assign({}, OrgChart.templates.yellow);
  OrgChart.templates.lightBlue.size = [250, 30];
  OrgChart.templates.lightBlue.node = '<rect x="0" y="0" height="30" width="{w}" fill="#a1b8e1" rx="1" ry="1"></rect>';
  OrgChart.templates.lightBlue.field_0 = '<text data-width="230" style="font-size: 16px;" fill="white" x="125" y="20" text-anchor="middle">{val}</text>';
  OrgChart.templates.lightBlue.defs = '<marker id="arrow1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path fill="#4473c4" d="M 0 0 L 10 5 L 0 10 z" /></marker>';

  OrgChart.templates.lightBlue.link = '<path stroke-linejoin="round" marker-end="url(#arrow1)" stroke="#4473c4" stroke-width="3px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>';

  OrgChart.templates.lightGreen = Object.assign({}, OrgChart.templates.lightBlue);
  OrgChart.templates.lightGreen.node = '<rect x="0" y="0" height="30" width="{w}" fill="#b7d6a3" rx="1" ry="1"></rect>';
  OrgChart.templates.lightGreen.defs = '<marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3" markerHeight="3" orient="-180deg"><path fill="#70ad47" d="M 0 0 L 10 5 L 0 10 z" /></marker>';

  OrgChart.templates.lightGreen.link = '<path stroke-linejoin="round" marker-end="url(#arrow2)" stroke="#70ad47" stroke-width="3px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>';

  OrgChart.templates.split.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{edge}" />';

  OrgChart.templates.split.node = '';
  OrgChart.templates.split.size = [0,0];


  var chart = new OrgChart(document.getElementById("tree"), {
    layout: OrgChart.mixed,
    template: "yellow",
    enableDragDrop: true,
  nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
    },
    tags: {
      hiddenRoot: { template: 'hiddenTemplate' },
      root: { template: 'rootTemplate' },
      blueRoot: { template: 'blueRoot'},
      greenRoot: { template: 'greenRoot'},
      lightBlue: { template: 'lightBlue'},
      lightGreen: { template: 'lightGreen'},
      yellowRounded: { template: 'yellowRounded'},
      yellowEllipse: { template: 'yellowEllipse'}

  },
    slinks: [
            {from: 1, to: 4, template: "myLink" }, 
            {from: 1, to: 5, template: "myLink" }, 
            {from: 1, to: 6, template: "myLink" }, 
            {from: 1, to: 7, template: "myLink" }, 
            {from: 1, to: 8, template: "myLink" }, 
            {from: 3, to: 4, template: "myLink" }, 
            {from: 3, to: 5, template: "myLink" }, 
            {from: 3, to: 6, template: "myLink" }, 
            {from: 3, to: 7, template: "myLink" }, 
            {from: 3, to: 8, template: "myLink" }, 
            {from: 4, to: 9, template: "myLink" }, 
            {from: 4, to: 10, template: "myLink" }, 
            {from: 4, to: 11, template: "myLink" }, 
            {from: 4, to: 12, template: "myLink" }, 
            {from: 5, to: 9, template: "myLink" }, 
            {from: 5, to: 10, template: "myLink" }, 
            {from: 5, to: 11, template: "myLink" }, 
            {from: 5, to: 12, template: "myLink" }, 
            {from: 7, to: 9, template: "myLink" }, 
            {from: 7, to: 10, template: "myLink" }, 
            {from: 7, to: 11, template: "myLink" }, 
            {from: 7, to: 12, template: "myLink" }, 
            {from: 8, to: 9, template: "myLink" }, 
            {from: 8, to: 10, template: "myLink" }, 
            {from: 8, to: 11, template: "myLink" }, 
            {from: 8, to: 12, template: "myLink" }, 
      ],
     levelSeparation: 100 
});

nodes = [
  { id: 0, tags:  ['hiddenRoot']},
  { id: 1, pid: 0, tags: ['blueRoot'], name: "Финансов контрольор" },
  { id: 2, pid: 0, tags: ['root'], name: "Оперативен директор" },
  { id: 3, pid: 0, tags: ['greenRoot'], name: "Мениджър ЧР" },
  { id: 4, pid: 2, tags: ["yellowRounded"], name: "Технически Мениджър" },
  { id: 5, pid: 2, tags: ["yellowRounded"], name: "Мениджър 'Качество'" },
  { id: 6, pid: 2, tags: ["yellowRounded"], name: "Мениджър 'Производство'" },
  { id: 7, pid: 2, tags: ["yellowRounded"], name: "Мениджър 'Логистика'" },
  { id: 8, pid: 2, tags: ["yellowRounded"], name: "Мениджър 'Поддръжка'" },
  { id: 9, pid: 6, tags: ["yellowEllipse"], name: "Ръководител участък 1" },      
  { id: 10, pid: 6, tags: ["yellowEllipse"], name: "Ръководител участък 2" },
  { id: 11, pid: 6, tags: ["yellowEllipse"], name: "Ръководител участък 3" },
  { id: 12, pid: 6, tags: ["yellowEllipse"], name: "Ръководител участък 4" },
  { id: 13, pid: 1, tags: ["lightBlue"], name: "Главен счетоводител" },
  { id: 14, pid: 1, tags: ["lightBlue"], name: "Младши контрольор" },
  { id: 15, pid: 1, tags: ["lightBlue"], name: "Счетоводител" },
  { id: 16, pid: 3, tags: ["lightGreen"], name: "Специалист ТРЗ" },
  { id: 17, pid: 3, tags: ["lightGreen"], name: "Специалист подбор" },
  { id: 18, pid: 3, tags: ["lightGreen"], name: "Специалист обучение" },
];

 
OrgChart.events.on('layout', function (args) {    
  console.log("layouts");
  if (args.pnode.id == 1){
    args.layout = OrgChart.treeRightOffset;
  }    
  else if (args.pnode.id == 3) {
    args.layout = OrgChart.treeLeftOffset;
  }
  else if (args.pnode.id == 6) {
    args.layout = OrgChart.normal;
  }
});

    chart.load(nodes);
    chart.center(2);
    chart.fit(); 

}