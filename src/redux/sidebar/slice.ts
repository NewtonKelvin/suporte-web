import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type menuTitleType = "Dashboard" | "Tickets" | "Users" | "Reports" | "Messages";

type menuItemType = {
	items: {
		title: menuTitleType;
		link: string;
		icon: React.ReactNode;
		active: boolean;
	}[];
};

const initialState: menuItemType = {
	items: [
		{
			title: "Dashboard",
			link: "/dashboard",
			icon: null,
			active: true
		}
	]
};

export const sidebarStore = createSlice({
	name: "sidebarStore",
	initialState,
	reducers: {
		setMenu: (state, action: PayloadAction<menuItemType>) => {
			state.items = action.payload.items;
		},
		setActiveMenu: (state, action: PayloadAction<menuTitleType>) => {
			const newMenu = state.items.map((item) => {
				return { ...item, active: item.title === action.payload };
			});
			state.items = newMenu;
		}
	}
});

export const { setMenu, setActiveMenu } = sidebarStore.actions;
export default sidebarStore.reducer;
