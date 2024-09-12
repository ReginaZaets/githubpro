export type User = {
  login: string;
  id: number;
  repos_url: string;
  html_url: string;
};

export type SortingProps = {
  sortingUsers: User[];
  onSortingChange: (sortedUsers: User[]) => void;
};

export type ListItemProps = {
  users: User[];
  currentUser: User | null;
  onOpenItem: (user: User) => void;
};
