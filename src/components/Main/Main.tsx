import { MainContainer, MainText } from "./MainStyle";
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

  useEffect(() => {
    if (inputUser) {
      getUser(inputUser).then((response) => setInputResult(response));
    } else {
      setInputResult([]);
    }
  }, [inputUser]);

  return (
    <MainContainer>
      <Search />
      <MainText>Результат поиска</MainText>
      {inputResult.length > 0 ? (
        <ul>
          {inputResult.map((item) => (
            <li key={item.id}>{item.login}</li>
          ))}
        </ul>
      ) : (
        <p>ничего не найдено</p>
      )}
    </MainContainer>
  );
};

export default Main;
