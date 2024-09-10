const token = import.meta.env.VITE_GITHUB_TOKEN;

export const getUser = async (user: string, page: number) => {
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
  return users;
};
