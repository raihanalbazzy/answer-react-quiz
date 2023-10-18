import { useState } from 'react';

const Test1 = () => {
  const [val, setVal] = useState('');
  return (
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {val}
      </p>
      <input
        type="text"
        placeholder="input here"
        onChange={(e) => setVal(e.target.value)}
      />
    </div>
  );
};

export default Test1;
