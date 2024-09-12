import React, { useState } from "react";
import { useInputUser } from "../../context/hooks/inputUser";
import {
  SeachButton,
  SeachCommon,
  SearchInput,
  SearchMain,
} from "./SearchStyle";

const Search = () => {
  const { setInputUser } = useInputUser();
  const [error, setError] = useState<string | null>(null);
  const [localInput, setLocalInput] = useState("");

  const validateInput = (value: string) => {
    if (value.trim() === "") {
      setError("Ввод не может содержать пробелы.");
      return false;
    }
    if (/[^a-zA-Z0-9]/.test(value)) {
      setError("Ввод может содержать только латинские буквы, цифры и дефисы.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setLocalInput(search);
  };

  const handleSearchClick = () => {
    if (validateInput(localInput)) {
      setInputUser(localInput);
    }
  };

  return (
    <SearchMain>
      <SeachCommon>
        <SearchInput
          type="search"
          placeholder="Поиск"
          name="search"
          value={localInput}
          onChange={handleSearch}
          data-testid="search"
        />
        <SeachButton onClick={handleSearchClick}>Поиск</SeachButton>
      </SeachCommon>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </SearchMain>
  );
};

export default Search;
