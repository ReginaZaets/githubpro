import { User } from "../components/Main/Main";
interface UserWithRepos extends User {
  publicRepos?: number;
}


export const getUser = async (
  user: string,
  page: number
): Promise<UserWithRepos[]> => {
  const usersResponse = await fetch(
    `https://api.github.com/search/users?q=${user}&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!usersResponse.ok) {
    throw new Error(`Ошибка сервера: ${usersResponse.status}`);
  }

  const usersData = await usersResponse.json();
  const users = usersData.items;
  if (users.length === 0) {
    throw new Error("Ничего не найдено");
  }
  const reposPromises = users.map(async (user: UserWithRepos) => {
    const reposResponse = await fetch(user.repos_url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!reposResponse.ok) {
      throw new Error(`Ошибка сервера: ${reposResponse.status}`);
    }

    const reposData = await reposResponse.json();
    const publicRepos = reposData.length;
    return { ...user, publicRepos };
  });

  const usersWithRepos = await Promise.all(reposPromises);
  return usersWithRepos;
};
