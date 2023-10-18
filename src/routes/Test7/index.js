import useRenderLog from '../../hooks/useRenderLog';
import TableContext from '../../context/TableContext';
import Input from './Input';
import Table from './Table';

const Test7 = () => {
  useRenderLog('Test7', 1);
  return (
    <TableContext>
      <div>
        <ul>
          <li>
            Please filter the table by name search (after press enter or click
            search button)
          </li>
          <li>
            No rerender allowed in <code>Test7</code> component
          </li>
        </ul>
        <Input />
        <div>
          <Table />
        </div>
      </div>
    </TableContext>
  );
};

export default Test7;
