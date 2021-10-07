var editForm = function () {
    this.nodeId = null;
};

editForm.prototype.init = function (obj) {
    this.obj = obj;

};

editForm.prototype.show = function (nodeId) {

    if (!document.getElementById('edit-form-wrapper')){

        var edit = `<div  id="editForm" style="display:none; background-color:#fff; text-align:center; position:absolute; border: 1px solid #aeaeae;width:300px;z-index:10000; ">
            <div style="padding: 10px 0 10px 0; background-color:#039BE5; color: #ffffff;">Edit Form</div>
            <div style=" background-color:#efefef;">
                <div style="padding: 10px 0 5px 0;">
                    <label style="color:#000; width:50px; display:inline-block;" for="name">Name</label>
                    <input id="name" value="" />
                </div>
                <div style="padding: 5px 0 10px 0;">
                    <label style="color:#000; width:50px; display:inline-block;" for="title">Title</label>
                    <input  id="title" value="" />
                </div>
                <div style="padding: 5px 0 15px 0;">
                    <button style="width:108px; background-color:#F57C00;" id="cancel">Cancel</button>
                    <button style="width:108px; background-color:#FFCA28;" id="save">Save</button>
                </div>
            </div>
            </div>`;


        var addedForm = document.createElement("div");
        addedForm.style.position = 'absolute';
        addedForm.style.top = '100px';
        addedForm.id = "edit-form-wrapper";
        addedForm.innerHTML = edit;
        this.obj.element.appendChild(addedForm);

        var that = this;
        this.editForm = document.getElementById("editForm");
        this.nameInput = document.getElementById("name");
        this.titleInput = document.getElementById("title");
        this.cancelButton = document.getElementById("cancel");
        this.saveButton = document.getElementById("save");

        this.cancelButton.addEventListener("click", function () {
            that.hide();
        });

        this.saveButton.addEventListener("click", function () {
                var node = chart.get(that.nodeId);
            node.name = that.nameInput.value;
            node.title = that.titleInput.value;

            chart.updateNode(node);
            that.hide();
        });    
    }

      this.hide();
    this.nodeId = nodeId;

    var left = document.body.offsetWidth / 2 - 150;
    this.editForm.style.display = "block";
    this.editForm.style.left = left + "px";
    var node = chart.get(nodeId);
    this.nameInput.value = node.name;
    this.titleInput.value = node.title;
};

editForm.prototype.hide = function (showldUpdateTheNode) {
    var editFormElement = document.getElementById("editForm");
    if (editFormElement) editFormElement.style.display = "none";
};


var chart = new OrgChart(document.getElementById("tree"), {
    toolbar: {
        fullScreen: true,
    },
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
    },
    nodes: [
        { id: 1, name: "Amber McKenzie", title: "CEO" },
        { id: 2, pid: 1, name: "Ava Field", title: "IT Manager" },
        { id: 3, pid: 1, name: "Peter Stevens", title: "HR Manager" }
    ]
});   
