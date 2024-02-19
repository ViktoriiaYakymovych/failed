import { BsSearch } from "react-icons/bs";

const SearchBar = ({ query, onChange }) => {
  return (
    <header>
      <h1>
        Weather <b>Forecast</b>
      </h1>
      <form>
        <button type="submit">
          <BsSearch />
        </button>
        <input
          name="trip"
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search your trip"
          onChange={onChange}
        ></input>
      </form>
    </header>
  );
};

export default SearchBar;
