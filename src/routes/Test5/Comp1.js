import { cssWrapper } from './style';

import { useState } from 'react';
import Comp2 from './Comp2';
import { useCounterContext } from '../../context/CounterContext';

const Comp1 = () => {
  const { onSetCounter, counter } = useCounterContext();

  const [checked, setCheck] = useState(false);
  const toggleCheckBox = () => setCheck((prev) => !prev);

  return (
    <div className={cssWrapper}>
      Latest Inputted from <code>[Test5/Comp1]*</code>
      <br />
      <br />
      <label htmlFor="overwrite">
        Local overwrite:{' '}
        <input
          id="overwrite"
          type="checkbox"
          checked={checked}
          onChange={toggleCheckBox}
        />
        {/* only show when overwrite is checked */}
        {checked && (
          <input
            id="mynumber1"
            type="text"
            placeholder="input mynumber1"
            value={counter['counter1']}
            onChange={(e) => onSetCounter('counter1', e.target.value)}
          />
        )}
      </label>
      <Comp2 isChecked={checked} />
    </div>
  );
};

export default Comp1;
