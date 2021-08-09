import {dataLatestReports} from "../data/dataLatestReports";

export const latestReports = {
	width: 280,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Latest Reports"
				}
			]
		},
		{
			view: "list",
			select: false,
			css: "lastReports",
			template(obj) {
				return `
					<span class='smText'>${obj.file}</span>
					<span class='flex'>
						<span class='mdi mdi-18px mdi-download mdiBlue'></span>
						<span class='mdi mdi-18px mdi-dots-vertical mdiLight'></span>
					</span>`;
			},
			data: dataLatestReports
		}
	]
};
