export const sidebarUser = {
	view: "template",
	css: "sidebarUser",
	height: 126,
	template() {
		let html = `
            <div class="userWrapp">
                <div class="userImg">
                    <img src="./avatar/avatar.png">
                    <span class="userStatus"></span>
                </div>
                <div class="userInfo">
                    <span class="userName">Dr. Amanda Elmers</span>
                    <span class="userPosition">Neurosurgeon</span>
                    <div class="userRate">
                        <span class="numRate">(5.0)</span>
                        <div class="starRate">
                            <span class="mdi mdi-star starFull"></span>
                            <span class="mdi mdi-star starFull"></span>
                            <span class="mdi mdi-star starFull"></span>
                            <span class="mdi mdi-star starFull"></span>
                            <span class="mdi mdi-star starFull"></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
		return html;
	}
};
