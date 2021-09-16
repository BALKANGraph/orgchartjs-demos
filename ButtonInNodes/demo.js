window.onload = function () {

    OrgChart.templates.ana.node += '<g class="svg-btn"><rect  x="133" y="42" width="100" height="30" ></rect>'
      + '<text style="font-size: 12px;" fill="#000" x="183" y="62" text-anchor="middle">BUTTON</text></g>';

    var chart = new OrgChart(document.getElementById("tree"), {

      nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
      },

    });

    nodes = [
      { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
      { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
      { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
      { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
      { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
      { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
      { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
    ];

    chart.on('redraw', function () {
      var btns = document.querySelectorAll('.svg-btn');
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          alert("My logic goes here for node with id: " + this.parentNode.getAttribute('data-n-id'));

        })
      }
    });
    chart.load(nodes);
  }