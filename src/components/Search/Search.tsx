import { useInputUser } from "../../context/hooks/inputUser";
import { SearchInput, SearchMain } from "./SearchStyle";

const Search = () => {
  const { inputUser, setInputUser } = useInputUser();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setInputUser(search);
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
    </SearchMain>
  );
};

export default Search;
