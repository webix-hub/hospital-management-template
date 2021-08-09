import {dataPatientsByDepartment} from "../data/dataPatientsByDepartment";

export const patientsByDepartment = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Patients by department"
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
				{id: "department", header: "Patients", minWidth: 120, fillspace: true, css: "smallTextCol"},
				{id: "patients", header: "Date", width: 74, css: "strong"},
				{id: "controls", header: "ID", width: 72, css: "flexCol", template: "<span class='mdi mdi-pencil mdi-18px tableControl'></span><span class='mdi mdi-trash-can mdi-18px tableControl'></span>"}
			],
			rowHeight: 36,
			data: dataPatientsByDepartment
		}
	]
};
