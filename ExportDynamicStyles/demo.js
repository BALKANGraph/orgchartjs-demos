var chart = new OrgChart(document.getElementById("tree"), {
    nodeBinding: {
        field_0: "name"
    },
    menu: {
            pdf: { text: "Export PDF" },
            png: { text: "Export PNG" },
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" }
        },
});

    nodes = [
        { id: 1, name: "Denny Curtis", color: "#039BE5" },
        { id: 2, pid: 1, name: "Ashley Barnett", color: "#FFCA28" },
        { id: 3, pid: 1, name: "Caden Ellison", color: "#F57C00" },
    ];


    chart.on('redraw', (sender) => {
      var allNodesRect = document.querySelectorAll('[node-id] rect');
      for (i = 0; i < allNodesRect.length; i++) {
        var node = document.querySelector('[node-id="' + (i + 1) + '"] rect');
        node.style.fill = nodes[i].color;
      }
    });

    chart.on('exportstart', (sender, args) => {
      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.id = "myStyles";
      for (i = 0; i < nodes.length; i++) {
        css = '[node-id="' + (i + 1) + '"] rect { fill:'+ nodes[i].color +' }';
        style.appendChild(document.createTextNode(css));
      }
      head.appendChild(style);
      console.log(document.getElementById('myStyles').outerHTML);
      args.styles += document.getElementById('myStyles').outerHTML;
    });

    chart.load(nodes);