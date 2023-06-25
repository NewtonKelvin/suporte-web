"use client";
import { close } from "@/redux/snackbar/slice";
import { Alert, Fade, Snackbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const SnackbarProvider = () => {
  const { open, title, details, type } = useSelector(
    (state: RootState) => state.snackbar
  );
  const dispatch = useDispatch();

  const closeSnackbar = () => {
    dispatch(close());
  };

  return (
    <Snackbar
      open={open}
      onClose={closeSnackbar}
      TransitionComponent={Fade}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={type} onClose={closeSnackbar} className="flex flex-row">
        <Typography className="font-bold">{title}</Typography>
        {details && <Typography className="font-normal">{details}</Typography>}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarProvider;
