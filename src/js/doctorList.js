import {dataDoctorList} from "../data/dataDoctorList";

export const doctorList = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Doctor List"
				}
			]
		},
		{
			view: "datatable",
			css: "tables webix_data_border webix_header_border",
			type: {
				customCheckbox(obj, common, value) {
					if (value) return '<span class="webix_table_checkbox customIcon mdi mdi-18px mdi-checkbox-marked"></span>';
					return '<span class="webix_table_checkbox customIcon mdi mdi-18px mdi-checkbox-blank-outline"></span>';
				},
				doctorTemplate(obj) {
					return `<div class="flex alignCenter">
						<div class="tablePhoto"><img src="./photos/${obj.photo}" /></div>
						<span class="strong">${obj.name}</span>
					</div>`;
				},
				statusTemplate(obj) {
					let html = [];
					for (let star = 0; star < obj.status; star++) {
						html.push('<span class="webix_icon mdi mdi-star starColor"></span>');
					}
					return html.join("");
				}
			},
			rowHeight: 50,
			columns: [
				{id: "doctor", header: "Name", minWidth: 204, fillspace: true, template: "{common.doctorTemplate()}"},
				{id: "department", header: "Department", width: 124, css: "smallTextCol"},
				{id: "phone", header: "Phone", width: 118, css: "smallTextCol"},
				{id: "email", header: "Email", minWidth: 156, css: "smallTextCol"},
				{id: "status", header: "", width: 124, template: "{common.statusTemplate()}"}
			],
			data: dataDoctorList
		}
	]
};
