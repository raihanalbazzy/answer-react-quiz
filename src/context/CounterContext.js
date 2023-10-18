import { createContext, useContext, useReducer } from 'react';

export const initialState = {
  counter: 0,
  counter1: 0,
  counter2: 0,
};

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SET_VALUE: 'SET_VALUE',
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, [action.counter]: state[action.counter] + 1 };
    case actionTypes.DECREMENT:
      return { ...state, [action.counter]: state[action.counter] - 1 };
    case actionTypes.SET_VALUE:
      return { ...state, [action.counter]: action.value };
    default:
      return state;
  }
};

const ConterContext = createContext();

export const useCounterContext = () => useContext(ConterContext);

export default function CounterContext(props) {
  const [counter, dispatch] = useReducer(counterReducer, initialState);

  const increment = (counter) => {
    dispatch({ type: actionTypes.INCREMENT, counter });
  };

  const decrement = (counter) => {
    dispatch({ type: actionTypes.DECREMENT, counter });
  };
  const onSetCounter = (counter, value) => {
    const parsedValue = parseInt(value, 10) || 0;
    dispatch({ type: actionTypes.SET_VALUE, counter, value: parsedValue });
  };

  return (
    <ConterContext.Provider
      value={{ counter, increment, decrement, onSetCounter }}
    >
      {props.children}
    </ConterContext.Provider>
  );
}
