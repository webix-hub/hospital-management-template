import {dataPatientsStatus} from "../data/dataPatientsStatus";

export const patientsMedicalStatus = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Patients medical status"
				}
			]
		},
		{
			view: "chart",
			type: "donut",
			value: "#value#",
			color: "#color#",
			padding: {top: 20, right: 10, bottom: 25, left: 10},
			innerRadius: 55,
			legend: {
				layout: "y",
				width: 130,
				toggle: false,
				values: [
					{text: "Cured", color: "#2FC0C6"},
					{text: "Under Treatment", color: "#C090CB"},
					{text: "Newly Reffered", color: "#FFDB79"}
				],
				marker: {type: "round", width: 6, height: 6},
				valign: "middle",
				align: "right"
			},
			data: dataPatientsStatus
		}
	]
};
