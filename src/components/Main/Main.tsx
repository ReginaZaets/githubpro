import {
  ButtonNext,
  ButtonPrev,
  MainContainer,
  MainText,
  PageButton,
} from "./MainStyle";
import Search from "../Search/Search";
import { useInputUser } from "../../context/hooks/inputUser";
import React, { useEffect, useState } from "react";
import { getUser } from "../../api/getUser";
import Sorting from "../Sorting/Sorting";
import Loader from "../Loader/Loader";
import ListItemUser from "./ListItem/ListItem";
import { User } from "../../lib/types";

const Main = () => {
  const { inputUser } = useInputUser();

  const [inputResult, setInputResult] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingUsers, setSortingUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    if (inputUser) {
      setIsLoading(true);
      setIsError(null);
      getUser(inputUser, currentPage)
        .then((response) => {
          setInputResult(response);
          setSortingUsers(response);
          setIsLoading(false);
        })
        .catch((error) => {
          setInputResult([]);
          setIsError(`Произошла ошибка при загрузке данных: ${error.message}`);
          setIsLoading(false);
        });
    } else {
      setInputResult([]);
      setSortingUsers([]);
      setIsLoading(false);
      setIsError(null);
    }
  }, [inputUser, currentPage]);

  useEffect(() => {
    setInputResult(sortingUsers);
  }, [sortingUsers]);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleSortingChange = (sortedUsers: User[]) => {
    setSortingUsers(sortedUsers);
  };

  const handleOpenItem = (user: User) => {
    setCurrentUser(user === currentUser ? null : user);
  };
  return (
    <MainContainer>
      <Search />
      <Sorting
        sortingUsers={sortingUsers}
        onSortingChange={handleSortingChange}
      />
      <MainText>
        {inputUser
          ? "Результат поиска "
          : "Введите логин для поиска пользователей"}
      </MainText>
      {isLoading && <Loader />}
      {!isLoading && isError && <p>{isError}</p>}
      {!isLoading && inputResult?.length > 0 && (
        <>
          <ListItemUser
            users={inputResult}
            currentUser={currentUser}
            onOpenItem={handleOpenItem}
          />
          <PageButton>
            <ButtonPrev onClick={handlePrevPage} disabled={currentPage === 1}>
              Предыдущая
            </ButtonPrev>
            <p>{currentPage}</p>
            <ButtonNext onClick={handleNextPage}>Следующая</ButtonNext>
          </PageButton>
        </>
      )}
    </MainContainer>
  );
};

export default Main;
