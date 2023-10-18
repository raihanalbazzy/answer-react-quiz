import { createContext, useContext, useState } from 'react';

const SearchContext = createContext({
  searchInput: '',
  onSearch: () => null,
});

export const useSearchContext = () => useContext(SearchContext);

const TableContext = (props) => {
  const [searchInput, setSearch] = useState('');
  function onSearch(value) {
    setSearch(value);
  }
  return (
    <SearchContext.Provider
      value={{
        onSearch,
        searchInput,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default TableContext;
