function err(image){
    image.setAttribute("href", "https://cdn.balkan.app/shared/OrgChart-JS.svg")
}

window.onload = function () {
   OrgChart.templates.ula.img_0 = '<clipPath id="{randId}"><circle cx="50" cy="60" r="40"></circle></clipPath><image onerror="err(this)" preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="20" width="80" height="80" ></image>';

    var chart = new OrgChart(document.getElementById("tree"), {
        template: "ula",
        nodeBinding: {
            field_0: "Employee Name",
            field_1: "Title",
            img_0:  function (sender, node) {
            	if (!chart.get(node.id).Photo)
              	return "https://cdn.balkan.app/shared/OrgChart-JS.svg";
              else return chart.get(node.id).Photo;
            }
        },
        nodeMenu: {
            details: { text: "Details" },
            edit: { text: "Edit" },
            add: { text: "Add" },
            remove: { text: "Remove" }
        }           
  });

  nodes = [
        { id: 1, "Employee Name": "Denny Curtis", Title: "CEO", Photo: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, "Employee Name": "Ashley Barnett", Title: "Sales Manager", Photo: "https://cdn.balkan.app/shared/54643.jpg" },
        { id: 3, pid: 1, "Employee Name": "Caden Ellison", Title: "Dev Manager", Photo: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, "Employee Name": "Elliot Patel", Title: "Sales", Photo: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, "Employee Name": "Lynn Hussain", Title: "Sales", Photo: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 3, "Employee Name": "Tanner May", Title: "Developer", Photo: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 3, "Employee Name": "Fran Parsons", Title: "Developer" }
    ];




chart.load(nodes);    
};