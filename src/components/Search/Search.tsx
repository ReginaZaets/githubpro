import { useState } from "react";
import { useInputUser } from "../../context/hooks/inputUser";
import { SearchInput, SearchMain } from "./SearchStyle";

const Search = () => {
  const { inputUser, setInputUser } = useInputUser();
  const [error, setError] = useState<string | null>(null);

  const validateInput = (value: string) => {
    if (value.trim() === " ") {
      setError("Ввод не может содержать пробелы.");
      return false;
    }
    if (/[^a-zA-Z0-9]/.test(value)) {
      setError(
        "Ввод может содержать только латинские буквы, цифры и дефисы."
      );
      return false;
    }
    setError(null);
    return true;
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    if (validateInput(search)) {
      setInputUser(search);
    }
  };

  return (
    <SearchMain>
      <SearchInput
        type="search"
        placeholder="Поиск"
        name="search"
        value={inputUser}
        onChange={handleSearch}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </SearchMain>
  );
};

export default Search;
