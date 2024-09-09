import { User } from "../components/Main/Main";

export const getUser = async (user: string): Promise<User[]> => {
  const response = await fetch(`https://api.github.com/search/users?q=${user}`);
  const data = await response.json();
  return data.items;
};
