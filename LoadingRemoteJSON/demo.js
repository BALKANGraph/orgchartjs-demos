window.onload = function () { 
var chart = new OrgChart(document.getElementById("tree"), {
    nodeBinding: {
        field_0: "name"
    }
});

fetchJSONFile('https://balkangraph.com/js/demos/remote-json-nodes.json', function(data){
    debugger;
    chart.load(data);
});


function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

// this requests the file and executes a callback with the parsed result once
//   it is available
}