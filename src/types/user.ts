export type createUserRequest = {
  name: string;
  login: string;
  password: string;
  passwordConfirm: string;
};

export type authUserRequest = {
  login: string;
  password: string;
};
