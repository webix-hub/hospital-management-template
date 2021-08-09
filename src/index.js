import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {topbar} from "./js/topbar";
import {totalInfo} from "./js/totalInfo";
import {recentPatients} from "./js/recentPatients";
import {doctorList} from "./js/doctorList";
import {scheduler} from "./js/scheduler";
import {analytics} from "./js/analytics";
import {patientsMedicalStatus} from "./js/patientsMedicalStatus";
import {patientsByDepartment} from "./js/patientsByDepartment";
import {latestReports} from "./js/latestReports";
import "./js/headerCheckbox";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.i18n.customPriceFormat = value => `$${webix.i18n.numberFormat(value, {
		groupDelimiter: ",",
		groupSize: 3,
		decimalSize: 0
	})}`;

	webix.ui({
		rows: [
			header,
			{
				type: "clean",
				cols: [
					sidebar,
					{
						type: "space",
						rows: [
							topbar,
							{
								margin: 10,
								cols: [
									{
										gravity: 0.7,
										margin: 10,
										rows: [
											totalInfo,
											recentPatients
										]
									},
									doctorList,
									scheduler
								]
							},
							{
								margin: 10,
								gravity: 0.6,
								cols: [
									analytics,
									patientsMedicalStatus,
									patientsByDepartment,
									latestReports
								]
							}
						]
					}
				]
			}
		]
	});
});
