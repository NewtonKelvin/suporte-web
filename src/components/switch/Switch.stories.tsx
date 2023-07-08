import type { Meta, StoryObj } from "@storybook/react";

import { default as Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: "Components/Switch"
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	args: {
		deactive: "Light",
		active: "Dark"
	}
};
