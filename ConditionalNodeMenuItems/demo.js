

window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {       
        nodeBinding: {
          field_0: "id",
          field_1: "pid"
        },      
        nodeMenu: {},
        tags:{
            "node menu level 1":{
              	nodeMenu:{
                	add: { text: "Add Emp", icon: '<i class="fas fa-user-plus"></i>' },
                	set_target: { text: "Set Target for Emp", icon: '<i class="fas fa-dot-circle"></i>', onClick: function(){ alert('set target') } }
              	}
            },
            "node menu level 2":{
              	nodeMenu:{
                    edit: { text: "Edit Emp Details", icon: '<i class="fas fa-user-edit"></i>' },
                	update_target_status: { text: "Edit Emp Details", icon: '<i class="fas fa-bullseye"></i>', onClick: function(){ alert('update target') }  }                    
              	}
            }
        }
    });

      chart.load([
        { id: 1, tags: ["node menu level 1"] },
        { id: 2, pid: 1, tags: ["node menu level 2"]  },
        { id: 4, pid: 1, tags: ["node menu level 2"]  }]);
};
