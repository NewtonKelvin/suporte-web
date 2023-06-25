import bcrypt from "bcrypt";

export const hashPassword = async (
  password: string
): Promise<string | void> => {
  return await bcrypt.hash(password, 10);
};

export const checkPassword = async (
  stringPassword: string,
  hashPassword: string
): Promise<boolean | void> => {
  return await bcrypt.compare(stringPassword, hashPassword);
};
