
        OrgChart.ui.expandCollapseBtn = function (chart, node, layoutConfigs, action, scale) {

          if (action === OrgChart.action.exporting) {
              return "";
          }

          if (node.childrenIds.length == 0) {
              return "";
          }

          if (node.templateName == "split") {
              return "";
          }

          var configName = node.lcn ? node.lcn : "base";
          var layoutConfig = layoutConfigs[configName];
          var html = "";
          var x = 0;
          var y = 0;
          var t = OrgChart.t(node.templateName, node.min, scale);


          switch (layoutConfig.orientation) {
              case OrgChart.orientation.top:
              case OrgChart.orientation.top_left:
                  x = node.x + (node.w / 2);
                  y = node.y + node.h;
                  break;

              case OrgChart.orientation.bottom:
              case OrgChart.orientation.bottom_left:
                  x = node.x + (node.w / 2);
                  y = node.y;
                  break;

              case OrgChart.orientation.right:
              case OrgChart.orientation.right_top:
                  x = node.x;
                  y = node.y + (node.h / 2);
                  break;

              case OrgChart.orientation.left:
              case OrgChart.orientation.left_top:
                  x = node.x + node.w;
                  y = node.y + (node.h / 2);
                  break;
          }


          var collapsedChildrenIds = chart.getCollapsedIds(node);

          // You don't need "if" clause if minus and plus will be the same.  
          if (collapsedChildrenIds.length) {
              var btnw = 0;
             var count =  OrgChart.childrenCount(chart, chart.getNode(node.id)).toString();

              if (count.length == 1) {
                  btnw = 24;
              }
              else if (count.length == 2) {
                  btnw = 30;
              }
              else if (count.length == 3) {
                  btnw = 40;
              }
              else if (count.length == 4) {
                  btnw = 50;
              }

              html += OrgChart.expcollOpenTag
                  .replace("{id}", node.id)
                  .replace("{x}", x - btnw / 2)
                  .replace("{y}", y - 12);

              html += '<rect e-c="' + node.id + '" rx="12" ry="12" x="0" y="0" width="' + btnw + '" height="24" fill="#F57C00"></rect><text style="font-size: 14px; cursor: pointer;" fill="#ffffff" x="' + (btnw / 2) + '" y="17" text-anchor="middle" >' + count + '</text>';
              html += OrgChart.grCloseTag;
          }
          // you can make the minus button different here
          else {
              var btnw = 0;
             var count =  OrgChart.childrenCount(chart, chart.getNode(node.id)).toString();

              if (count.length == 1) {
                  btnw = 24;
              }
              else if (count.length == 2) {
                  btnw = 30;
              }
              else if (count.length == 3) {
                  btnw = 40;
              }
              else if (count.length == 4) {
                  btnw = 50;
              }

              html += OrgChart.expcollOpenTag
                  .replace("{id}", node.id)
                  .replace("{x}", x - btnw / 2)
                  .replace("{y}", y -12);

              html += '<rect e-c="' + node.id + '" rx="12" ry="12" x="0" y="0" width="' + btnw + '" height="24" fill="#F57C00"></rect><text style="font-size: 14px; cursor: pointer;" fill="#ffffff" x="' + (btnw / 2) + '" y="17" text-anchor="middle" >' + count + '</text>';
          html += OrgChart.grCloseTag;
          }

          return html;
      }

      window.onload = function () {
          


          var chart = new OrgChart(document.getElementById("tree"), {

              collapse: {
                  level: 2
              },

              nodeBinding: {
                  field_0: "id",
                  field_1: "title",
                  field_2: "department",
                  field_3: "newField",
                  img_0: "img"
              },

              

          });

          nodes = [
              { id: 1, tags: ["mainTemplate"], name: "Denny Curtis", title: "CEO", newField: 50000, img: "https://cdn.balkan.app/shared/2.jpg", count: 121 },
              { id: 2, pid: 1, tags: ["mainTemplate"], name: "Ashley Barnett", title: "Sales Manager", department: "Sales", newField: 50000, img: "https://cdn.balkan.app/shared/3.jpg", count: 1212 },
              { id: 3, pid: 1, tags: ["mainTemplate"], name: "Caden Ellison", title: "Dev Manager", department: "Development", newField: 50000, img: "https://cdn.balkan.app/shared/4.jpg", count: 12 },
              { id: 4, pid: 1, tags: ["mainTemplate"], name: "Elliot Patel", title: "Sales", department: "Sales", newField: 50000, img: "https://cdn.balkan.app/shared/5.jpg", count: 3 },
              { id: 5, pid: 1, tags: ["mainTemplate"], name: "Lynn Hussain", title: "Sales", department: "Sales", newField: 50000, img: "https://cdn.balkan.app/shared/6.jpg", count: 12 },
              { id: 6, pid: 1, tags: ["mainTemplate"], name: "Tanner May", title: "Developer", department: "Development", newField: 50000, img: "https://cdn.balkan.app/shared/7.jpg", count: 12 },
              { id: 7, pid: 2, tags: ["mainTemplate"], name: "Fran Parsons", title: "Developer", department: "Development", newField: 50000, img: "https://cdn.balkan.app/shared/8.jpg", count: 12 },
              { id: 10, pid: 6, tags: ["mainTemplate"], name: "Elliot Scott", title: "Developer", department: "Development", newField: 50000, img: "https://cdn.balkan.app/shared/10.jpg", count: 12 },
              { id: 11, pid: 4, tags: ["subDep"], department: "Sub Department", count: 12 },
              { id: 12, pid: 4, tags: ["subDep"], department: "Sub Department", count: 12 },
              { id: 13, pid: 4, tags: ["subDep"], department: "Sub Department", count: 12 },
              { id: 14, pid: 12, tags: ["mainTemplateSub"], name: "Mike John", title: "Developer", department: "Sub Development", newField: 50000, img: "https://cdn.balkan.app/shared/11.jpg", count: 12 },
              { id: 15, pid: 12, tags: ["mainTemplateSub"], name: "John Scott", title: "Developer", department: "Sub Development", newField: 50000, img: "https://cdn.balkan.app/shared/12.jpg", count: 12 },
              { id: 16, pid: 12, tags: ["mainTemplateSub"], name: "Elliot smith", title: "Developer", department: "Sub Development", newField: 50000, img: "https://cdn.balkan.app/shared/13.jpg", count: 12 },

          ];

          chart.load(nodes);

      }