import { useSearchContext } from '../../context/TableContext';

const Input = () => {
  const { onSearch } = useSearchContext();
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.text.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input name="text" type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Input;
