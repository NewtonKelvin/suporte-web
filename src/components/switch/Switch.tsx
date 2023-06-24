"use client";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Switch from "@mui/material/Switch";

type CustomSwitchType = {
  leftValue: string;
  rigthValue: string;
  checked: boolean;
  onChange: () => void;
};

const CustomSwitch = ({
  leftValue,
  rigthValue,
  checked,
  onChange,
}: CustomSwitchType) => {
  const AntSwitch = styled(Switch)(() => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#177ddc",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  const toggleTheme = () => {
    onChange();
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <Typography className="font-bold">{leftValue}</Typography>
      <AntSwitch
        checked={checked}
        onChange={toggleTheme}
        inputProps={{ "aria-label": "ant design" }}
      />
      <Typography className="font-bold">{rigthValue}</Typography>
    </div>
  );
};

export default CustomSwitch;
