import { useEffect, useRef, useState } from "react";
import {
  ButtonSorting,
  ListSorting,
  ListSortingItem,
  ListSortingUl,
} from "./SortingStyle";
import { User } from "../Main/Main";

type SortingProps = {
  sortingUsers: User[];
  onSortingChange: (sortedUsers: User[]) => void;
};

const Sorting = ({ sortingUsers, onSortingChange }: SortingProps) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const list = ["По возрастанию", "По убыванию"];
  const listRef = useRef<HTMLParagraphElement | null>(null);

  const handleOpenList = () => {
    setIsOpenList((prev) => !prev);
  };

  const handleSortingList = (order: "По возрастанию" | "По убыванию") => {
    const sorted = [...sortingUsers].sort((a, b) => {
      const reposA = a.publicRepos ?? 0;
      const reposB = b.publicRepos ?? 0;

      if (order === "По возрастанию") {
        return reposA - reposB;
      } else {
        return reposB - reposA;
      }
    });
    onSortingChange(sorted);
  };
  useEffect(() => {
    const handleCloseList = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setIsOpenList(false);
      }
    };

    document.addEventListener("mousedown", handleCloseList);
    return () => {
      document.removeEventListener("mousedown", handleCloseList);
    };
  }, []);
  return (
    <ListSorting>
      <h3>Сортировать по:</h3>
      <ButtonSorting onClick={handleOpenList}>Репозиториям</ButtonSorting>
      {isOpenList && (
        <ListSortingItem>
          <ListSortingUl ref={listRef}>
            {list.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() =>
                    handleSortingList(item as "По возрастанию" | "По убыванию")
                  }
                >
                  {item}
                </span>
              );
            })}
          </ListSortingUl>
        </ListSortingItem>
      )}
    </ListSorting>
  );
};

export default Sorting;
