import { useSearchContext } from '../../context/TableContext';

const Input = () => {
  const { onSearch } = useSearchContext();
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.input.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input name="input" type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Input;
