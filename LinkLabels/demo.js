window.onload = function () {
        
   

    var chart = new OrgChart(document.getElementById("tree"), {
        template: "mila",
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        linkBinding: {
            link_field_0: "createdAt"
        },
        nodes: [
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, createdAt: "Since 08/08/2018", name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, createdAt: "Since 05/04/2018", name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" }
    ]    
  });
};
