window.onload = function() {
    var editIcon = '<svg width="24" height="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"' +
    'viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">' +
  '<path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256C511.84,114.682,397.318,0.16,256,0z' +
  'M256,494.933C124.041,494.933,17.067,387.959,17.067,256S124.041,17.067,256,17.067S494.933,124.041,494.933,256' +
  'C494.785,387.898,387.898,494.785,256,494.933z"/>' +
  '<path d="M368.975,86.221v-0.004c-10.006-9.978-26.2-9.976-36.204,0.004l-24.137,24.138l-36.204,36.204L127.617,291.375' +
  'c-0.068,0.068-0.093,0.159-0.158,0.228c-0.259,0.32-0.494,0.659-0.704,1.013c-0.4,0.538-0.734,1.121-0.995,1.738' +
  'c-0.052,0.132-0.16,0.222-0.205,0.358l-30.746,92.354c-1.775,5.188-0.943,10.913,2.234,15.381' +
  'c3.177,4.468,8.312,7.134,13.795,7.16l0.075-0.013l0.02,0.004h179.2c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533' +
  'H164.836l43.918-14.621c0.09-0.03,0.148-0.103,0.237-0.136c0.998-0.529,1.96-1.123,2.88-1.78' +
  'c0.066-0.063,0.156-0.082,0.221-0.147l144.813-144.813l36.204-36.204l24.142-24.137c9.976-10.007,9.974-26.199-0.004-36.204' +
  'L368.975,86.221z M111.008,392.533h-0.033l9.853-29.597c9.944,2.018,17.712,9.796,19.717,19.743L111.008,392.533z' +
  'M199.735,362.931l-43.077,14.372c-3.617-15.083-15.378-26.868-30.453-30.516l14.33-43.047' +
  'c6.163-2.388,17.979-5.614,23.281-0.298c2.897,4.114,3.759,9.326,2.342,14.154c-0.985,5.471,0.772,11.078,4.705,15.008' +
  'c3.931,3.924,9.531,5.682,15,4.708c4.83-1.422,10.044-0.563,14.163,2.333C205.272,344.896,202.25,356.487,199.735,362.931z' +
  'M219.767,344.042c-0.588-6.208-3.299-12.024-7.675-16.467c-5.491-5.294-12.908-8.112-20.529-7.8' +
  'c-2.889,0.015-5.771,0.298-8.608,0.846c2.822-10.315,0.154-21.357-7.067-29.246c-4.438-4.38-10.254-7.091-16.462-7.675' +
  'l119.037-119.037l60.342,60.342L219.767,344.042z M350.871,212.938l-60.342-60.342l24.137-24.138l60.342,60.342L350.871,212.938z' +
  'M405.179,158.629l-18.104,18.104l-60.342-60.342l18.104-18.1c1.6-1.603,3.771-2.503,6.035-2.503s4.436,0.901,6.035,2.503' +
  'l48.267,48.267C408.503,149.893,408.505,155.292,405.179,158.629z"/>' +
'<path d="M203.85,293.583c0.789,2.944,3.089,5.244,6.033,6.033c2.944,0.789,6.086-0.053,8.242-2.208l84.475-84.475' +
  'c1.601-1.6,2.5-3.77,2.5-6.033s-0.899-4.433-2.5-6.033c-1.6-1.601-3.77-2.5-6.033-2.5s-4.433,0.899-6.033,2.5l-84.475,84.475' +
  'C203.903,287.497,203.061,290.639,203.85,293.583z"/>';

var chart = new OrgChart(document.getElementById("tree"), {
    mouseScrool: OrgChart.action.none,
    template: "olivia",
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
    },
    nodeMenu: {
        edit: { 
            text: "Edit", 
            icon: editIcon 
        },
    },

    nodes: [
        { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },

        { id: 3, pid: 1, tags: ["HRs"], name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
        { id: 4, pid: 1, tags: ["HRs", "Node with unique template"], name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" }
    ]
});    
}