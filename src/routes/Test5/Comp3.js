import { cssWrapper } from './style';
import Comp4 from './Comp4';
import { useCounterContext } from '../../context/CounterContext';
import ModalContext, { useModalContext } from '../../context/ModalContext';

function ModalComp() {
  const { showModal, toggleModal } = useModalContext();
  return (
    <>
      <button onClick={toggleModal} type="button">
        Show Modal
      </button>
      {showModal && <Comp4 />}
    </>
  );
}

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const { counter } = useCounterContext();
  return (
    <ModalContext>
      <div className={cssWrapper}>
        The Inputted Value is: {counter['counter']}
      </div>
      <ModalComp />
    </ModalContext>
  );
};

export default Comp3;
