import React, { useEffect, useRef, useState } from "react";
import {
  ButtonSorting,
  ListItem,
  ListSorting,
  ListSortingItem,
  ListSortingP,
} from "./SortingStyle";
import { SortingProps } from "../../lib/types";

const Sorting = ({ sortingUsers, onSortingChange }: SortingProps) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const list = ["По возрастанию", "По убыванию"];
  const listRef = useRef<HTMLParagraphElement | null>(null);

  const handleOpenList = () => {
    setIsOpenList((prev) => !prev);
  };

  const handleSortingList = (order: "По возрастанию" | "По убыванию") => {
    const sorted = [...sortingUsers].sort((a, b) => {
      const reposA = a.repos_url.length;
      const reposB = b.repos_url.length;

      if (order === "По возрастанию") {
        return reposA - reposB;
      } else {
        return reposB - reposA;
      }
    });
    onSortingChange(sorted);
    setIsOpenList(false);
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
      <ButtonSorting data-testid="sorting" onClick={handleOpenList}>
        Репозиториям
      </ButtonSorting>
      {isOpenList && (
        <ListSortingItem role="list">
          <ListSortingP ref={listRef}>
            {list.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  onClick={() =>
                    handleSortingList(item as "По возрастанию" | "По убыванию")
                  }
                >
                  {item}
                </ListItem>
              );
            })}
          </ListSortingP>
        </ListSortingItem>
      )}
    </ListSorting>
  );
};

export default Sorting;
