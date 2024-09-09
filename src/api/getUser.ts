import { User } from "../components/Main/Main";

export const getUser = async (user: string, page: number): Promise<User[]> => {
  // const token = process.env.REACT_APP_GITHUB_TOKEN;
  const response = await fetch(
    `https://api.github.com/search/users?q=${user}&page=${page}`
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );
  const data = await response.json();
  return data.items;
};
