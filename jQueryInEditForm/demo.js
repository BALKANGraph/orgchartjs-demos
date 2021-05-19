var stateOptions = ['Alabama', 'Alaska', 'California', 'Delaware', 'Tennessee', 'Texas', 'Washington'];
var chart = new OrgChart(document.getElementById("tree"), {
  mouseScrool: OrgChart.action.none,
  nodeMouseClick: OrgChart.action.edit,
  nodeMenu: {
    edit: { text: "Edit" },
    add: { text: "Add" },
    remove: { text: "Remove" }
  },
  nodeBinding: {
    field_0: "name",
    field_1: "state"
  }
});


chart.editUI.on('hide', function () {
  $('#select').select2('destroy');
});

chart.editUI.on('field', function (sender, args) {
  if (args.type == 'edit' && args.name == 'state') {
    var inp = args.field.querySelector('[val]');
    var value = inp.value;
    if (!OrgChart.isNullOrEmpty(value)) {
      value = value.split(',');
    }
    else {
      value = [];
    }
    var selectElement = '<select id="select" multiple="" style="width: 100%;" tabindex="-1" aria-hidden="true">';
    for (var i = 0; i < stateOptions.length; i++) {
      var selectedAttribute = value.indexOf(stateOptions[i]) != -1 ? 'selected' : '';
      selectElement += `<option ${selectedAttribute}>${stateOptions[i]}</option>`
    }
    selectElement += '</select>';
    args.field.querySelector('div').innerHTML += selectElement;

    setTimeout(function () {
      $('#select').select2({
        closeOnSelect: false,
        placeholder: 'Select a State'
      });
      $('#select').on('change', function () {
        var value = $('#select').val();
        if (!OrgChart.isNullOrEmpty(value)) {
          value = value;
        }
        else {
          value = "";
        }
        var inp = args.field.querySelector('[val]');
        inp.setAttribute('val', value);
        inp.value = value;
      });
    }, 100);
  }
});



chart.load([
  { id: 1, name: "Amber McKenzie", state: "Delaware" },
  { id: 2, pid: 1, name: "Ava Field", state: "Alabama" },
  { id: 3, pid: 1, name: "Peter Stevens", state: "Washington,Texas" }
]);
