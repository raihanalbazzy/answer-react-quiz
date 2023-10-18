import { useCounterContext } from '../../context/CounterContext';
import { cssWrapper } from './style';

const Comp2 = (props) => {
  const { isChecked } = props;
  const { counter } = useCounterContext();
  return (
    <>
      <div className={cssWrapper}>
        Latest inputted value is: {counter[isChecked ? 'counter1' : 'counter']}
      </div>
    </>
  );
};

export default Comp2;
