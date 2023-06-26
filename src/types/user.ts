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

export type authUserResponse = {
	error: boolean;
	auth: boolean;
	message?: string;
	token?: string;
	user: authUser;
};

export type authUser = {
	id: number;
	login: string;
	name: string;
};
