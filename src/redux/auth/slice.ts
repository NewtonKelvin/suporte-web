import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { destroyCookie, setCookie } from "nookies";

type userStoreType = {
  auth: boolean;
  token: string | undefined;
  user: {
    id: number | undefined;
    name: string | undefined;
    login: string | undefined;
  };
};

const initialState: userStoreType = {
  auth: false,
  token: undefined,
  user: {
    id: undefined,
    name: undefined,
    login: undefined
  }
};

export const userStore = createSlice({
  name: "userStore",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<userStoreType>) => {
      setCookie(null, "nest_token", action.payload.token || "", {
        path: "/",
        maxAge: 1 * 60 * 60 /* 1 Hour */
      });
      state.auth = true;
      state.token = action.payload.token;
      state.user.id = action.payload.user?.id;
      state.user.name = action.payload.user?.name;
      state.user.login = action.payload.user?.login;
    },
    userLogout: (state) => {
      destroyCookie(undefined, "nest_token", {
        path: "/"
      });
      state.auth = false;
    }
  }
});

export const { userLogin, userLogout } = userStore.actions;
export default userStore.reducer;
