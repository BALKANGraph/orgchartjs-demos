

window.onload = function () {
  var chart = new OrgChart(document.getElementById("tree"), {
  scaleInitial: OrgChart.match.boundary,
  enableSearch: false,
      template: "luba",                  
      nodeBinding: {
          field_0: "id",
          field_1: "pid"
      }
  });


  chart.on('render', function(sender, args){
    args.content += '<g><circle fill="#039BE5" cx="10" cy="10" r="10"></circle><text fill="#ccc" x="25" y="15" >Manager</text><circle fill="#F57C00" cx="10" cy="40" r="10"></circle><text fill="#ccc"  x="25" y="45" >Sales</text><circle fill="#FFCA28" cx="10" cy="70" r="10"></circle><text fill="#ccc" x="25" y="75" >IT</text></g>';
  });


  chart.load([
      { id: 0, tags: ['manager'] },
      { id: 1, pid: 0, tags: ['sales'] },
      { id: 2, pid: 0, tags: ['it']},
             { id: 3, pid: 1, tags: ['it']},
             { id: 4, pid: 1, tags: ['it']},
                            { id: 5, pid: 2, tags: ['it']},
             { id: 6, pid: 2, tags: ['it']},
             { id: 7, pid: 6, tags: ['it']},
             { id: 8, pid: 6, tags: ['it']},
             { id: 9, pid: 8, tags: ['it']}



  ]);
  
  
  var timeout = null;
  
  
  window.addEventListener('resize', function(){    
    if (timeout){
      clearTimeout(timeout)
    }
    timeout = setTimeout(function(){
      chart.fit();
    }, 500);
  })

};
