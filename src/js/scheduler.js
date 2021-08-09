import {dataScheduler} from "../data/dataScheduler";

export const scheduler = {
	width: 280,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			cols: [
				{
					view: "label",
					label: "Scheduler"
				},
				{},
				{
					view: "richselect",
					css: "smRichselect",
					value: 1,
					width: 120,
					options: [
						{id: 1, value: "Today"},
						{id: 2, value: "This week"},
						{id: 3, value: "This month"}
					]
				}
			]
		},
		{
			view: "list",
			type: {
				height: 68,
				css: "schedulerItem"
			},
			template(obj) {
				return `
				<div class="schedulerInner flex flexColumn">
					<div class="flex alignCenter">
						<span class="schedulerDept ${obj.department}"></span>
						<span class="schedulerBooked">${obj.booked}</span>
					</div>
					<div class="schedulerSubj strong">${obj.subject}</div>
				</div>`;
			},
			data: dataScheduler
		}
	]
};
