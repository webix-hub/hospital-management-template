import {dataRecentPatients} from "../data/dataRecentPatients";

export const recentPatients = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Recent Patients"
				}
			]
		},
		{
			view: "datatable",
			css: "tables tableWithCheckboxes webix_data_border webix_header_border",
			type: {
				customCheckbox(obj, common, value) {
					if (value) return '<span class="webix_table_checkbox customIcon mdi mdi-18px mdi-checkbox-marked"></span>';
					return '<span class="webix_table_checkbox customIcon mdi mdi-18px mdi-checkbox-blank-outline"></span>';
				}
			},
			checkboxRefresh: true,
			columns: [
				{id: "ch1", header: {content: "masterCheckbox"}, template: "{common.customCheckbox()}", width: 37},
				{id: "patient", header: "Patients", width: 120, css: "strong"},
				{id: "date", header: "Date", width: 88, css: "flexCol smallTextCol"},
				{id: "id", header: "ID", width: 88, css: "flexCol smallTextCol"},
				{id: "doctor", header: "Assigned Doctor", fillspace: true, css: "strong"},
				{id: "tag", header: "Tag", width: 44, css: "flexCol", template: "<span class='mdi mdi-tag mdi-18px #tag#'></span>"}
			],
			rowHeight: 36,
			data: dataRecentPatients
		}
	]
};
