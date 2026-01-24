import { User } from "./user.model";

export const createUser = async (data: {
  name: string;
  email: string;
}) => {
  return User.create(data);
};

export const getUsers = async () => {
  return User.find();
};
