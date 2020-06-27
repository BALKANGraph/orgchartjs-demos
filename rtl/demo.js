
window.onload = function () { 
		OrgChart.SEARCH_PLACEHOLDER = "يبحث";

		OrgChart.templates.ana.field_1 = '<text width="130" text-overflow="multiline" style="font-size: 14px;" fill="#ffffff" x="230" y="30" text-anchor="start">{val}</text>';
		
		var chart = new OrgChart(document.getElementById("tree"), {
			enableDragDrop: true,
			menu: {
				pdf: { text: "تصدير ملف PDF" },
				png: { text: "تصدير PNG" },
				svg: { text: "تصدير SVG" },
				csv: { text: "تصدير CSV" }
			},
			nodeMenu: {
				details: { text: "تفاصيل" },
				add: { text: "اضف جديد" },
				edit: { text: "تعديل" },
				remove: { text: "إزالة" },
			},
			nodeBinding: {
				field_0: "name",
				field_1: "title",
				img_0: "img",
				field_number_children: "field_number_children"
			},
			nodes: [
				{ id: 1, name: "تمادور صوايا", title: "المدير التنفيذي", img: "https://cdn.balkan.app/shared/2.jpg" },
				{ id: 2, pid: 1, name: "الزعيم السهلي", title: "مدير المبيعات", img: "https://cdn.balkan.app/shared/3.jpg" },
				{ id: 3, pid: 1, name: "عائشة عمارة", title: "مدير التطوير", img: "https://cdn.balkan.app/shared/4.jpg" },
				{ id: 4, pid: 2, name: "صبحي صدري", title: "مبيعات", img: "https://cdn.balkan.app/shared/5.jpg" }
			]
		});
};
