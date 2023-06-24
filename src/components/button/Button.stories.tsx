import { ArrowForward, Face } from "@mui/icons-material";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Button";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input"
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Insira aqui seu texto...",
    left: <Face />,
    rigth: <ArrowForward />
  }
};
