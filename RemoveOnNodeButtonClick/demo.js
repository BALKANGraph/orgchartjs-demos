window.onload = function() {

    btn = 
    '<svg version="1.1" x="220" y="5" width="25" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
      'width="311.599px" height="311.599px" viewBox="0 0 311.599 311.599" style="enable-background:new 0 0 311.599 311.599;"' +
      'xml:space="preserve">' +

      '<path fill="red" d="M281.305,232.004c-21.42-25.092-48.96-44.063-70.992-68.544c-2.448-2.447-4.284-4.896-6.732-7.344' +
        'c20.809-24.479,42.841-48.959,64.261-73.439c11.628-12.852,25.704-44.064,3.06-55.692c-23.868-12.24-46.512,4.284-64.872,18.972' +
        'c-18.972,15.3-36.72,32.436-52.632,50.184c-17.748-20.808-36.108-41.004-56.304-59.976C82.404,22.701,43.236-14.631,21.205,6.177' +
        'c-21.42,18.972-4.284,49.572,12.24,65.484c1.836,1.836,4.284,2.448,6.732,1.836c26.928,21.42,49.572,46.512,71.604,72.828' +
        'c-28.152,36.719-53.856,75.276-82.008,110.772c-1.224,1.224-1.224,2.447-1.224,4.283c-11.628,8.568-17.748,28.152-7.344,39.168' +
        'c19.584,20.809,44.676,8.568,63.648-6.731c29.988-23.256,54.468-56.304,78.336-87.517c18.36,20.196,37.332,39.168,59.364,55.692' +
        'c17.748,13.464,45.899,33.66,68.544,20.196C312.517,269.948,291.708,243.632,281.305,232.004z M117.289,89.409' +
        'c0-1.224-0.612-2.448-1.224-3.06c-2.448-3.06-5.508-6.732-7.956-10.404v-0.612c4.896,6.12,9.792,12.852,14.688,18.972' +
        'C120.96,93.081,119.125,91.245,117.289,89.409z M180.324,93.081c-1.836,1.836-3.06,4.284-4.896,6.12' +
        'c-1.836,1.224-4.284,3.06-6.12,4.284c3.672-3.672,7.344-7.956,11.016-11.628C180.324,92.469,180.324,92.469,180.324,93.081z"/>' +
    '</svg>';

    OrgChart.templates.ana.field_1 = btn  + '<rect data-remove-button="{val}" x="215" y="0" rx="5" ry="5" opacity="0" height="35" width="35"></rect> ';

    let chart = new OrgChart(document.getElementById("tree"), {
      nodeBinding: {
        field_0: 'name',
        field_1: 'id'
      }
    });

    chart.on('remove', (sender, nodeId) => {
      alert('Node ' + nodeId + ' is deleting...');
    });

    chart.on('redraw', (sender) => {
      let removeButtons = document.querySelectorAll('*[data-remove-button]');

      removeButtons.forEach(removeButton => {
        removeButton.addEventListener('click', (e) => {
          e.preventDefault();
          e.cancelBubble = true;
          chart.removeNode(removeButton.getAttribute('data-remove-button'), true);
          return false;
        });
      });
    });

    chart.load([
      { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
      { id: 2, pid: 1, name: "Ashley Barnett", img: "https://cdn.balkan.app/shared/3.jpg" },
      { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
      { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
      { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
      { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
      { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
    ]);
}