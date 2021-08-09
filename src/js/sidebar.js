import {sidebarUser} from "./sidebarUser";
import {sidebarMenu} from "./sidebarMenu";
import {sidebarTags} from "./sidebarTags";

export const sidebar = {
	css: "leftSidebar",
	width: 280,
	margin: 10,
	rows: [
		sidebarUser,
		{
			view: "scrollview",
			scroll: "auto",
			body: {
				margin: 10,
				css: "leftSidebar",
				rows: [
					sidebarMenu,
					sidebarTags
				]
			}
		}
	]
};
