window.onload = function () {

  var arrow = 
  '<svg version="1.1" class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="270px" y="17px"' +
	 'width="15px" height="15px" fill="#F57C00" viewBox="0 0 199.404 199.404" style="enable-background:new 0 0 199.404 199.404;"' +
	 'xml:space="preserve">' +
    '<g>' +
      '<rect x="0" y="0" height="200" width="200" fill="#fff"></rect>' +
      '<polygon points="199.404,63.993 171.12,35.709 99.702,107.127 28.284,35.709 0,63.993 99.702,163.695 	"/>' +
    '</g>' +
  '</svg>';

OrgChart.templates.cool = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.cool.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="cool-shadow"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';

OrgChart.templates.cool.size = [310, 190];
OrgChart.templates.cool.node = '<rect filter="url(#cool-shadow)"  x="0" y="0" height="190" width="310" fill="#ffffff" stroke-width="1" stroke="#eeeeee" rx="10" ry="10"></rect><rect fill="#ffffff" x="100" y="10" width="200" height="100" rx="10" ry="10" filter="url(#cool-shadow)"></rect><rect stroke="#eeeeee" stroke-width="1" x="10" y="120" width="220" fill="#ffffff" rx="10" ry="10" height="60"></rect><rect stroke="#eeeeee" stroke-width="1" x="240" y="120" width="60" fill="#ffffff" rx="10" ry="10" height="60"></rect><text  style="font-size: 11px;" fill="#afafaf" x="110" y="60">PERFORMANCE</text>'
    + '<image  xlink:href="https://cdn.balkan.app/shared/speedometer.svg" x="110" y="65" width="32" height="32"></image>' + arrow;
OrgChart.templates.cool.img = '<clipPath id="{randId}"><rect  fill="#ffffff" stroke="#039BE5" stroke-width="5" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="10"  width="80" height="100"></image><rect fill="none" stroke="#F57C00" stroke-width="2" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect>';

OrgChart.templates.cool.name = '<text  style="font-size: 18px;" fill="#afafaf" x="110" y="30">{val}</text>';
OrgChart.templates.cool.title = '<text  style="font-size: 14px;" fill="#F57C00" x="20" y="145">{val}</text>';
OrgChart.templates.cool.title2 = '<text style="font-size: 14px;" fill="#afafaf" x="20" y="165">{val}</text>';
OrgChart.templates.cool.points = '<text style="font-size: 24px;" fill="#F57C00" x="270" y="165" text-anchor="middle">{val}</text>';
OrgChart.templates.cool.performance = '<text style="font-size: 24px;" fill="#F57C00" x="150" y="90" >{val}</text>';
OrgChart.templates.cool.svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background-color:#F2F2F2;display:block;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>';

OrgChart.templates.empty = Object.assign({}, OrgChart.templates.cool);
OrgChart.templates.empty.node = '<rect filter="url(#cool-shadow)"  x="0" y="0" height="190" width="310" fill="#ffffff" stroke-width="1" stroke="#eeeeee" rx="10" ry="10"></rect>' + 
'<circle cx="155" cy="95" fill="#ffffff" r="30" stroke="#afafaf" stroke-width="2"></circle>' + 
'<circle cx="155" cy="95" fill="#afafaf" r="23" stroke="#afafaf" stroke-width="2"></circle>' + 
'<line x1="140" y1="95" x2="170" y2="95" stroke-width="4" stroke="#ffffff" />' +
'<line x1="155" y1="80" x2="155" y2="110" stroke-width="4" stroke="#ffffff" />';


var chart;
chart = new OrgChart(document.getElementById('tree'), {
    template: 'cool',
    searchFields: ["id"],
    nodeBinding: {
        name: 'name',
        title: 'title',
        title2: 'title2',
        points: 'points',
        performance: 'performance',
        img: 'img' 
     },
    tags: {
      empty: {
        template: "empty"
      }
    }
});

chart.on('click', function (sender, args) {
  
    if (args.node.templateName == "empty") {
      sender.editUI.show(args.node.id, false);
    }
    else{
      sender.editUI.show(args.node.id, true);
    }

    return false;
});  

chart.on('update', function (sender, oldNode, newNode) {
  var lNodeId = newNode.id + "l";
  var rNodeId = newNode.id + "r";
  newNode.tags = [];
  chart.add({id: lNodeId, pid: newNode.id, tags: ["empty"]})
    .add({id: rNodeId, pid: newNode.id, tags: ["empty"]})
    .draw();
});  

chart.on('redraw', function () {
      var btns = document.querySelectorAll('.arrow');
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
        //  alert("My logic goes here for node with id: " + this.parentNode.getAttribute('node-id'));
         window.open("https://balkangraph.com");
        })
      }
    });


chart.load([
    { id: 1, performance: 11, points: 50, name: 'Caden Ellison', title: 'Dev Manager', title2: 'Application Development', img: 'https://cdn.balkan.app/shared/1.jpg' },
    { id: 2, performance: 33, points: 99, name: 'Fran Parsons', title: 'Developer', pid: 1, title2: 'Application Development', img: 'https://cdn.balkan.app/shared/2.jpg' },
    { id: 3, performance: 99, points: 34, name: 'Lynn Hussain', title: 'Sales', pid: 1, title2: 'Application Development', img: 'https://cdn.balkan.app/shared/3.jpg' },
    { id: 4, pid: 2, tags: ["empty"] },
    { id: 5, pid: 2, tags: ["empty"] },
    { id: 6, pid: 3, tags: ["empty"] },
    { id: 7, pid: 3, tags: ["empty"] }
]);
}