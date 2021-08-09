import {dataTotalInfo} from "../data/dataTotalInfo";

export const totalInfo = {
	view: "dataview",
	borderless: true,
	css: "infoWrapper",
	scroll: true,
	height: 154,
	type: {
		width: 134,
		height: 146,
		type: "tiles",
		css: "infoItem",
		template(obj) {
			return `
				<div class="infoInner">
					<div class="flex flexColumn alignCenter">
						<img class="infoImg" src="./items/${obj.img}" alt="${obj.title}" />
						<span class="infoTitle">${obj.title}</span>
						<span class="infoTotal">${obj.total}</span>
					</div>
				</div>
			`;
		}
	},
	data: dataTotalInfo
};
