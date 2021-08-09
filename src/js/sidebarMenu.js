import {dataSidebarMenu} from "../data/dataSidebarMenu";

export const sidebarMenu = {
	view: "sidebar",
	css: "webix_dark sidebarMenu",
	select: true,
	height: 230,
	data: dataSidebarMenu,
	ready() {
		this.select(1);
	}
};
