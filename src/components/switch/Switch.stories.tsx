import type { Meta, StoryObj } from "@storybook/react";

import CustomSwitch from "./Switch";

const meta: Meta<typeof CustomSwitch> = {
  component: CustomSwitch,
  title: "Components/Switch"
};

export default meta;
type Story = StoryObj<typeof CustomSwitch>;

export const Default: Story = {
  args: {
    leftValue: "Ligth",
    rigthValue: "Dark"
  }
};
