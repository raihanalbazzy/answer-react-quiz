import { cssWrapper } from './style';

import Comp1 from './Comp1';
import Comp3 from './Comp3';
import CounterContext, {
  useCounterContext,
} from '../../context/CounterContext';

const question = (
  <ul>
    <li>
      primarily, user can input the value from <code>#mynumber</code>
    </li>
    <li>
      please add or reduce the value by 1 when user click{' '}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>
      Show <b>ODD</b> or <b>EVEN</b> in first render section
    </li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code>{' '}
      checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of
      input in <code>Comp1</code> and it's value in <code>Comp2</code>
    </li>
    <li>
      <code>Comp2</code> will display latest inputted from{' '}
      <code>#mynumber</code> &amp; <code>#mynumber1</code>
    </li>
    <li>
      <code>Comp3</code> will display <code>#mynumber</code>
    </li>
    <li>
      show <code>Comp4</code> modal when user click <b>Show Modal</b> button in{' '}
      <code>Comp3</code>
    </li>
    <li>
      update whole <code>input</code> and value render when user input{' '}
      <code>#mynumber2</code>
    </li>
  </ul>
);

function BaseCounter() {
  const { counter, decrement, increment, onSetCounter } = useCounterContext();

  return (
    <>
      <button id="numbermin" type="button" onClick={() => decrement('counter')}>
        -
      </button>
      <input
        id="mynumber"
        type="text"
        placeholder="input mynumber"
        value={counter['counter']}
        onChange={(e) => {
          onSetCounter('counter', e.target.value);
        }}
      />
      <button
        id="numberplus"
        type="button"
        onClick={() => increment('counter')}
      >
        +
      </button>
    </>
  );
}

function InputtedValue() {
  const { counter } = useCounterContext();

  return (
    <div className={cssWrapper}>
      The inputted value is {counter['counter'] % 2 === 0 ? 'EVEN' : 'ODD'}
    </div>
  );
}

const Test5 = () => {
  return (
    <CounterContext>
      <div>
        {question}
        <BaseCounter />
        <br />
        <br />
        <InputtedValue />
        <Comp1 />
        <Comp3 />
      </div>
    </CounterContext>
  );
};

export default Test5;
