import { List, MainContainer, MainText, PageButton } from "./MainStyle";
import Search from "../Search/Search";
import { useInputUser } from "../../context/hooks/inputUser";
import { useEffect, useState } from "react";
import { getUser } from "../../api/getUser";

export interface User {
  login: string;
  id: number;
}

const Main = () => {
  const { inputUser } = useInputUser();

  const [inputResult, setInputResult] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (inputUser) {
      getUser(inputUser, currentPage).then((response) =>
        setInputResult(response)
      );
    } else {
      setInputResult([]);
    }
  }, [inputUser, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <MainContainer>
      <Search />
      <MainText>Результат поиска</MainText>
      {inputResult.length > 0 ? (
        <>
          <List>
            {inputResult.map((item) => (
              <span key={item.id}>{item.login}</span>
            ))}
          </List>
          <PageButton>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Предыдущая
            </button>
            <p>{currentPage}</p>
            <button onClick={handleNextPage}>Следующая</button>
          </PageButton>
        </>
      ) : (
        <p>ничего не найдено</p>
      )}
    </MainContainer>
  );
};

export default Main;
