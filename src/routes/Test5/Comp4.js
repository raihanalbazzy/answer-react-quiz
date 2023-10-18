import { initialState, useCounterContext } from '../../context/CounterContext';
import { useModalContext } from '../../context/ModalContext';
import { cssWrapper, cssModalRight } from './style';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const { counter, onSetCounter } = useCounterContext();
  const { toggleModal } = useModalContext();

  const onUpdateCounter = (e) => {
    const value = e.target.value;
    for (const key in initialState) {
      onSetCounter(key, value);
    }
  };
  return (
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button onClick={toggleModal} type="button">
            ⊗
          </button>
        </div>
        <input
          id="mynumber2"
          type="text"
          placeholder="input mynumber2"
          value={counter['counter2']}
          onChange={onUpdateCounter}
        ></input>
      </div>
    </>
  );
};

export default Comp4;
