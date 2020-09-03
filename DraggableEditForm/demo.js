var showEditForm;
window.onload = function () { 
    
           showEditForm = function(){
                $('#editForm').dialog();
            }
        
           var editForm = function () {
            this.nodeId = null;
        };

        editForm.prototype.init = function (obj) {
            var that = this;        
            this.obj = obj;
            this.editForm = document.getElementById("editForm");
            this.nameInput = document.getElementById("name");
            this.titleInput = document.getElementById("title");
            this.cancelButton = document.getElementById("cancel");
            this.saveButton = document.getElementById("save");

            this.cancelButton.addEventListener("click", function () {
                $('#editForm').dialog("close");

            });

            this.saveButton.addEventListener("click", function () {
            		var node = chart.get(that.nodeId);
                node.name = that.nameInput.value;
                node.title = that.titleInput.value;

                chart.updateNode(node);
                $('#editForm').dialog("close");

            });

        };

        editForm.prototype.show = function (nodeId) {

            showEditForm();
            this.nodeId = nodeId;
            this.editForm.style.display = "block";
            var node = chart.get(nodeId);
            this.nameInput.value = node.name;
            this.titleInput.value = node.title;
            

        };

        editForm.prototype.hide = function (showldUpdateTheNode) {

        };

        var chart = new OrgChart(document.getElementById("tree"), {
        mouseScrool: OrgChart.action.none,
        		nodeMenu:{
            	edit: {text:"Edit"},
            	add: {text:"Add"},
            	remove: {text:"Remove"}
            },
            editUI: new editForm(),
            nodeBinding: {
                field_0: "name",
                field_1: "title"
            }
        });  


         chart.load([
                { id: 1, name: "Amber McKenzie", title: "CEO" },
                { id: 2, pid: 1, name: "Ava Field", title: "IT Manager" },
                { id: 3, pid: 1, name: "Peter Stevens", title: "HR Manager" }
            ]);
}