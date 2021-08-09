import {dataAnalytics} from "../data/dataAnalytics";

export const analytics = {
	gravity: 1.42,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10, right: 10},
			cols: [
				{
					view: "label",
					label: "Analytic"
				},
				{},
				{
					view: "richselect",
					css: "smRichselect",
					value: 1,
					width: 120,
					options: [
						{id: 1, value: "This week"},
						{id: 2, value: "Last week"},
						{id: 3, value: "Last month"}
					]
				}
			]
		},
		{
			view: "chart",
			type: "splineArea",
			padding: {top: 15, right: 20, bottom: 35, left: 50},
			xAxis: {
				template(obj) {
					return webix.Date.dateToStr("%d %M")(obj.date);
				},
				lines: false
			},
			yAxis: {
				start: 1000,
				step: 1000,
				end: 7300,
				template(value) {
					return webix.i18n.customPriceFormat(value);
				}
			},
			value: "#budget#",
			border: true,
			borderColor: "#8666C5",
			borderWidth: 2,
			color: "#8666C5",
			alpha: 0.2,
			tooltip: {
				template: "#budget#"
			},
			data: dataAnalytics
		}
	]
};
