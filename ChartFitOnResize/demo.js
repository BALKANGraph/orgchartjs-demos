

window.onload = function () {
    var initialized = false;
    var chart = new OrgChart(document.getElementById("tree"), {
    scaleInitial: OrgChart.match.boundary,
    enableSearch: false,
    		padding: 120,
        template: "luba",                  
        nodeBinding: {
            field_0: "id",
            field_1: "pid"
        }
    });


    chart.on('redraw', function(){
        if (!initialized){
            var title = document.createElement("h1");
            title.style.position = 'absolute';
            title.style.top = 0;
            title.style.width = '100%';
            title.style.textAlign = 'center';
            title.style.color = '#757575';
            title.innerHTML = 'My Title';
            chart.element.appendChild(title);

            var legent = document.createElement("div");
            legent.style.position = 'absolute';
            legent.style.bottom = '10px';
            legent.style.right = '10px';
            legent.style.color = '#757575';
            legent.innerHTML = document.querySelector('#legent-content').innerHTML;;
            chart.element.appendChild(legent);

            initialized = true;
        }
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
