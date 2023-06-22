import type { Meta, StoryObj } from "@storybook/react";

import CustomSwitch from "./Switch";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CustomSwitch> = {
  component: CustomSwitch,
  title: "Components/Switch",
};

export default meta;
type Story = StoryObj<typeof CustomSwitch>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
