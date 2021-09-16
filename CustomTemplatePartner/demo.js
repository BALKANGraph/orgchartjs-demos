       
window.onload = function () {
  var nodes = [
      { id: 1, name: "Jack Hill", title: "Chairman and CEO", email: "amber@domain.com", img: "https://cdn.balkan.app/shared/1.jpg" },
      { id: 2, pid: 1, name: "Lexie Cole", title: "QA Lead", email: "ava@domain.com", img: "https://cdn.balkan.app/shared/2.jpg" },
      { id: 3, pid: 1, tags: ["thepartner"], name: "Janae Barrett", title: "Technical Director", img: "https://cdn.balkan.app/shared/3.jpg", 
          partnerImg: "https://cdn.balkan.app/shared/11.jpg", partnerName: "Harold Breuvart"},
      { id: 4, pid: 1, name: "Aaliyah Webb", title: "Manager", email: "jay@domain.com", img: "https://cdn.balkan.app/shared/4.jpg" },
      { id: 5, pid: 2, name: "Elliot Ross", title: "QA", img: "https://cdn.balkan.app/shared/5.jpg" },
      { id: 6, pid: 2, name: "Anahi Gordon", title: "QA", img: "https://cdn.balkan.app/shared/6.jpg" },
      { id: 7, pid: 2, name: "Knox Macias", title: "QA", img: "https://cdn.balkan.app/shared/7.jpg" },
      { id: 8, pid: 3, name: "Nash Ingram", title: ".NET Team Lead", email: "kohen@domain.com", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 9, pid: 3, name: "Sage Barnett", title: "JS Team Lead", img: "https://cdn.balkan.app/shared/9.jpg" },
      { id: 10, pid: 8, name: "Alice Gray", title: "Programmer", img: "https://cdn.balkan.app/shared/10.jpg" },
      { id: 12, pid: 9, name: "Reuben Mcleod", title: "Programmer", img: "https://cdn.balkan.app/shared/12.jpg" },
      { id: 13, pid: 9, name: "Ariel Wiley", title: "Programmer", img: "https://cdn.balkan.app/shared/13.jpg" },
      { id: 14, pid: 4, name: "Lucas West", title: "Marketer", img: "https://cdn.balkan.app/shared/14.jpg" },
      { id: 15, pid: 4, name: "Adan Travis", title: "Designer", img: "https://cdn.balkan.app/shared/15.jpg" },
      { id: 16, pid: 4, name: "Alex Snider", title: "Sales Manager", img: "https://cdn.balkan.app/shared/16.jpg" }
  ];

  OrgChart.templates.rony.field_number_children = '<circle cx="60" cy="110" r="15" fill="#F57C00"></circle><text fill="#ffffff" x="60" y="115" text-anchor="middle">{val}</text>';
  OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.rony);
  OrgChart.templates.myTemplate.size = [680, 250];
  OrgChart.templates.myTemplate.node = '<rect filter="url(#{randId})" x="250" y="0" height="250" width="180" fill="#ffffff" stroke-width="2" rx="5" ry="5"></rect>' +
      '<line x1="430" y1="160" x2="550" y2="160" stroke-width="1" stroke="#039BE5"  />' ;
  OrgChart.templates.myTemplate.img_0 = '<clipPath id="{randId}"><circle cx="340" cy="160" r="60"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="280" y="100"  width="120" height="120"></image>';
  OrgChart.templates.myTemplate.img_1 = '<clipPath id="{randId}"><circle cx="600" cy="160" r="59"></circle></clipPath><circle cx="600" cy="160" r="60" fill="none" stroke="white" stroke-width="2" ></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="540" y="100"  width="120" height="120"></image>';
  
  OrgChart.templates.myTemplate.field_0 = '<text data-width="165" class="field_0" style="font-size: 18px;" fill="#039BE5" x="340" y="40" text-anchor="middle">{val}</text>';
  OrgChart.templates.myTemplate.field_1 = '<text data-width="165" class="field_1" style="font-size: 14px;" fill="#F57C00" x="340" y="60" text-anchor="middle">{val}</text>';
  OrgChart.templates.myTemplate.field_2 = '<text data-width="165" class="field_0" style="font-size: 18px;" fill="#039BE5" x="600" y="60" text-anchor="middle">{val}</text>';
  
  var chart = new OrgChart(document.getElementById("tree"), {
      nodeMouseClick: OrgChart.none,
      template: "rony",
      collapse: {
          level: 3
      },
      nodeBinding: {
          field_0: "name",
          field_1: "title",
          field_2: "partnerName",
          img_0: "img",
          img_1: "partnerImg",
      },
      tags: {
          "thepartner": {
              template: "myTemplate"
          }
      }
  });

  chart.load(nodes);
};