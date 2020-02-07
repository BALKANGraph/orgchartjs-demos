    
window.onload = function () { 
    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "id",
            field_1: "pid",
        },
        nodeMouseClick: OrgChart.action.none
    });
    

    var sclicktimeout = null;
    

    chart.on('click', function(){    
    	clearTimeout(sclicktimeout);        
     	sclicktimeout = setTimeout(function(){      
      	console.log('single click')
      }, 400);        
    });   

    //if you'd like to show the node details, use the following code:

    // chart.on('click', function(sender, node){    
    // 	clearTimeout(sclicktimeout);        
    //  	sclicktimeout = setTimeout(function(){      
    //   	chart.editUI.show(node.id);
    //   	console.log('single click')
    //   }, 400);        
    // });   
    
    
    chart.on('dbclick', function(){
    	 clearTimeout(sclicktimeout);  
       console.log('double click')
    });
    
    
    chart.load( [
            { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
            { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
            { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
            { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
        ]);
};
