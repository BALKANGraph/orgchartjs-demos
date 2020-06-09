

window.onload = function () {
    OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);

    OrgChart.templates.myTemplate.size = [125, 170];
    OrgChart.templates.myTemplate.node = '<rect x="0" y="0" height="170" width="125" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';

    OrgChart.templates.myTemplate.field_0 = '<text width="100" text-overflow="multiline" style="font-size: 24px;font-weight: bold;" fill="#2D2D2D" x="62.5" y="85" text-anchor="middle">{val}</text>';
    OrgChart.templates.myTemplate.field_1 = '<text width="110" text-overflow="multiline"  style="font-size: 14px;" fill="#2D2D2D" x="62.5" y="132" text-anchor="middle">{val}</text>';

    OrgChart.templates.myTemplate.img_0 = '<clipPath id="{randId}"><circle cx="60" cy="37" r="30"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="30" y="7"  width="60" height="60"></image>';


    OrgChart.templates.myTemplate.plus = '<circle cx="15" cy="15" r="15" fill="#57B6F1" stroke="#ffffff" stroke-width="1"></circle>'
      + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>'
      + '<line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#ffffff"></line>';
    OrgChart.templates.myTemplate.minus = '<circle cx="15" cy="15" r="15" fill="#37D8BF" stroke="#ffffff" stroke-width="1"></circle>'
      + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>';

    OrgChart.templates.group_grey.groupPadding = [70, 10, 10, 10];
    OrgChart.templates.group_grey.groupName = '<text  text-overflow="multiline"  width="{elastic_width}"  class="groupName"  style="font-size: 24px;" fill="#aeaeae" x="20" y="40">{val}</text>';



    OrgChart.MAXIMIZE = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,{x},20)" control-maxmin-id="{id}"> \
          <g transform="matrix(0.05,0,0,0.05,0,0)"> \
          <circle cx="53.333" cy="245.333" r="10.667"/> \
			<circle cx="96" cy="245.333" r="10.667"/> \
			<circle cx="138.667" cy="245.333" r="10.667"/> \
			<path d="M469.333,0h-384C61.813,0,42.667,19.135,42.667,42.667V192C19.146,192,0,211.135,0,234.667v234.667 \
				C0,492.865,19.146,512,42.667,512h234.667C300.854,512,320,492.865,320,469.333h149.333c23.521,0,42.667-19.135,42.667-42.667 \
				v-384C512,19.135,492.854,0,469.333,0z M298.667,469.333c0,11.76-9.563,21.333-21.333,21.333H42.667 \
				c-11.771,0-21.333-9.573-21.333-21.333V298.667h277.333V469.333z M298.667,277.333H21.333v-42.667 \
				c0-11.76,9.563-21.333,21.333-21.333h234.667c11.771,0,21.333,9.573,21.333,21.333V277.333z M490.667,426.667 \
				c0,11.76-9.563,21.333-21.333,21.333H320V234.667C320,211.135,300.854,192,277.333,192H64V42.667 \
				c0-11.76,9.563-21.333,21.333-21.333h384c11.771,0,21.333,9.573,21.333,21.333V426.667z"/> \
			<path d="M373.333,128h-32c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h6.25l-24.458,24.458 \
				c-4.167,4.167-4.167,10.917,0,15.083c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l24.458-24.458v6.25 \
        c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667v-32C384,132.771,379.229,128,373.333,128z"/> \
        </g> \
        <rect x="0" y="0" width="26" height="26" fill="red" fill-opacity="0" stroke-width="0" rx="2"></rect> \
        </g>';


    OrgChart.MINIMIZE = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,{x},20)" control-maxmin-id="{id}"> \
          <path d="m14 14.75c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l5.251-5.251c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-5.252 5.251c-.146.147-.338.22-.53.22z"/><path d="m13.751 14.999c-.199 0-.39-.079-.53-.22-.142-.141-.221-.333-.22-.532l.007-2.5c.001-.414.337-.748.75-.748h.002c.414.001.749.338.748.752l-.005 1.746 1.746-.005h.002c.413 0 .749.334.75.748s-.334.751-.748.752l-2.5.007s-.001 0-.002 0z"/><path d="m11.25 24h-9.5c-1.002 0-1.75-1.056-1.75-2v-2.25c0-.965.785-1.75 1.75-1.75h9.5c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75zm-9.5-4.5c-.138 0-.25.112-.25.25v2.25c0 .203.174.469.271.502l9.479-.002c.138 0 .25-.112.25-.25v-2.5c0-.138-.112-.25-.25-.25z"/><path d="m21.25 22h-5.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.5c.689 0 1.25-.561 1.25-1.25v-16.5c0-.689-.561-1.25-1.25-1.25h-18.5c-.689 0-1.25.561-1.25 1.25v12.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-12.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v16.5c0 1.517-1.233 2.75-2.75 2.75z"/><path d="m23.25 5h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/> \
          <rect x="0" y="0" width="26" height="26" fill="red" fill-opacity="0" stroke-width="0" rx="2"></rect> \
            </g>';

    var editForm = function () {
      this.nodeId = null;
    };

    editForm.prototype.init = function (obj) {
      var that = this;
      this.obj = obj;
      this.editForm = document.getElementById("editForm");
      this.emailInput = document.getElementById("email");
      this.addressInput = document.getElementById("address");
      this.phone1Input = document.getElementById("phone1");
      this.phone2Input = document.getElementById("phone2");
      this.imgInput = document.getElementById("img");
      this.nameInput = document.getElementById("name");
      this.titleInput = document.getElementById("title");
      this.cancelButton = document.getElementById("close");

      this.cancelButton.addEventListener("click", function () {
        that.hide();
      });
    };


    editForm.prototype.show = function (nodeId) {
      this.nodeId = nodeId;

      var left = document.body.offsetWidth / 2 - 150;

      this.editForm.style.left = left + "px";
      var node = chart.get(nodeId);
      if (!node) return;
      this.emailInput.innerHTML = node.email ? node.email : "";
      this.addressInput.innerHTML = node.address ? node.address : "";
      this.phone1Input.innerHTML = node.phone1 ? node.phone1 : "";
      this.phone2Input.innerHTML = node.phone2 ? node.phone2 : "";
      this.imgInput.src = node.img ? node.img : "#";
      this.nameInput.innerHTML = node.name ? node.name : "";
      this.titleInput.innerHTML = node.title ? node.title : "";

      this.editForm.style.display = "block";

      OrgChart.anim(this.editForm, { opacity: 0 }, { opacity: 1 }, 300, OrgChart.anim.inOutSin);
    };

    editForm.prototype.hide = function (showldUpdateTheNode) {
      this.editForm.style.display = "none";
      this.editForm.style.opacity = 0;

    };



    var chart = new OrgChart(document.getElementById('tree'), {
      toolbar: {
        zoom: true,
      },
      enableSearch: false,
      template: "myTemplate",
      nodeBinding: {
        field_0: "name",
        field_1: 'title',
        img_0: "img"
      },
      editUI: new editForm(),
      tags: {
        Directors: {
          group: true,
          groupName: "Lorem ipsum dolor sit amet, consectetur.",
          groupState: OrgChart.EXPAND,
          template: "group_grey"
        }
      }
    });





    chart.load([
      {
        id: 1,
        name: "Endy Chau",
        title: "CEO",
        img: "https://cdn.balkan.app/shared/2.jpg",
        email: "my@email.com",
        phone1: "+6465 6454 8787",
        phone2: "+2342 3433 5455",
        address: "T2"
      },
      {
        id: 200,
        pid: 1,
        tags: ["assistant"],
        name: "Alan Wan",
        title: "Executive sec",
        img: "https://cdn.balkan.app/shared/3.jpg",
        email: "my@email.com",
        phone1: "+6465 6454 8787",
        phone2: "+2342 3433 5455",
        address: "T2"

      },
      {
        id: 2,
        pid: 1,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",
        phone1: "+6465 6454 8787",
        phone2: "+2342 3433 5455",
        address: "T2"

      },
      {
        id: 3,
        pid: 1,
        name: "Eason Lee",
        title: "Senior manager, Information Arhitecture",
        img: "https://cdn.balkan.app/shared/5.jpg",
        email: "my@email.com",
        phone1: "+6465 6454 8787",
        phone2: "+2342 3433 5455",
        address: "T2"

      },
      {
        id: 4,
        pid: 1,
        name: "Chun Wa",
        title: "Senior manager, IT Systems",
        img: "https://cdn.balkan.app/shared/6.jpg",
        email: "my@email.com",
        phone1: "+6465 6454 8787",
        phone2: "+2342 3433 5455",
        address: "T2"

      },
      {
        id: 5,
        pid: 1,
        name: "P L Ip",
        title: "Manager HR, Managaer",
        img: "https://cdn.balkan.app/shared/7.jpg",
        email: "my@email.com",
        phone1: "+6465 6454 8787",
        phone2: "+2342 3433 5455",
        address: "T2"

      },
      {
        id: 6,
        pid: 4,
        tags: ["Directors"],
        name: "Name 1",
        title: "Title 1",
        img: "https://cdn.balkan.app/shared/8.jpg",
        email: "my@email.com",
        phone1: "+6465 6454 8787",
        phone2: "+2342 3433 5455",
        address: "T2"

      },
      {
        id: 7,
        pid: 4,
        tags: ["Directors"],
        name: "Name 2",
        title: "Title 2",
        img: "https://cdn.balkan.app/shared/9.jpg",
        email: "my@email.com",
        phone1: "+6465 6454 8787",
        phone2: "+2342 3433 5455",
        address: "T2"

      }
    ]);
};
