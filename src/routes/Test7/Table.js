import { useMemo } from 'react';
import DATA from './_data';
import { useSearchContext } from '../../context/TableContext';

const Table = () => {
  const { searchInput } = useSearchContext();
  const dataMemo = useMemo(
    () =>
      DATA.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      ),
    [searchInput]
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {dataMemo.map((item, key) => (
          <tr key={item + key}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
