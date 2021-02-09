window.onload = function () {

    OrgChart.templates.dynamic = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.dynamic.size = [250, 240];
    OrgChart.templates.dynamic.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#039BE5" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
     
    OrgChart.templates.dynamic.field_0 = '<g class="my-text" transform="translate(0, 0)">' +
      '<text width="230" text-overflow="multiline" style="font-size: 18px;" fill="#fff" x="125" y="95" text-anchor="middle">{val}</text>' + 
    '</g>';
    OrgChart.templates.dynamic.field_1 = '<g class="my-text" transform="translate(0, 0)">' +
      '<text width="230" text-overflow="multiline" style="font-size: 18px;" fill="#fff" x="125" y="75" text-anchor="middle">{val}</text>' + 
    '</g>';


    var heightMinus = 100;
  
  var chart = new OrgChart(document.getElementById("tree"), {
      template: "dynamic",
      nodeBinding: {
          field_0: "name",
          field_1: "id"
      },
  });

  chart.on('redraw', function (sender) {
    var allNodesRect = document.querySelectorAll('[node-id] rect');

    for (i = 0; i < allNodesRect.length; i++) {
      var allNodeTspans = document.querySelectorAll('[node-id="' + (i + 1) + '"] text tspan');
      heightMinus = 160 - (20 * allNodeTspans.length);
      var node = document.querySelector('[node-id="' + (i + 1) + '"] rect');
      node.style.height += 240 - heightMinus ;
      node.style.y += heightMinus;
      var y = node.style.y;
      if (i > 0) {
        node.outerHTML += '<line x1="125" y1="0" x2="125" y2="' + y + '" stroke="#aeaeae" stroke-width="1px" fill="none"></line>';
      }
      var allNodeFields = document.querySelectorAll('[node-id="' + (i + 1) + '"] .my-text');
      for (j = 0; j < allNodeFields.length; j++) {

        allNodeFields[j].setAttribute('transform','translate(0,' + (heightMinus - 30) + ')');
      }
    };
  });

  chart.load([
      { id: 1, name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis vehicula venenatis." },
      { id: 2, pid: 1, name: "Fusce vestibulum velit orci, at pharetra ipsum suscipit nec. Curabitur quis mauris magna." },
       { id: 3, pid: 1, name: "Nulla faucibus mattis mi non aliquam. Morbi diam risus, dapibus ut nisi quis, ultrices molestie leo. Sed sagittis consectetur tortor, in dapibus lacus egestas nec." },
      { id: 4, pid: 2, name: "Ut tristique velit lacus, id finibus lorem faucibus quis. Donec risus mauris, finibus vitae ex a, suscipit venenatis sem. Praesent posuere dui ultrices erat scelerisque, interdum tempus augue tristique." },
      { id: 5, pid: 2, name: "Vestibulum ac nulla dictum, dignissim elit nec, feugiat dui." },
      { id: 6, pid: 3, name: "Nunc sodales finibus elit." },
      { id: 7, pid: 3, name: " Sed tristique lectus quis leo pulvinar ultricies. Mauris non cursus arcu." }
   ]);

}