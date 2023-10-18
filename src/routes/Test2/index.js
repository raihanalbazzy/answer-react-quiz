import { useState } from 'react';
import Input from './Input';
import Label from './Label';

const Test2 = () => {
  const [val, setVal] = useState('RENDER VALUE');

  return (
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>
          show "close button" only when hovered, and clear the input value when
          clicked.
        </li>
      </ul>
      <p>
        <Label value={val} onClick={() => setVal('')} />
      </p>
      <Input onChange={(e) => setVal(e.target.value)} value={val} />
    </div>
  );
};

export default Test2;
