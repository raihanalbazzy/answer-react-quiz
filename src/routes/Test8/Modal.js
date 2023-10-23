import { cssModal, modalContent } from './style';
import { useImperativeHandle, useState, forwardRef } from 'react';
import { useUserContext } from '../../context/UserContext';

const Modal = forwardRef(function MyInput(props, ref) {
  const { user, resetUser } = useUserContext();
  const [visible, setVisible] = useState(false);
  useImperativeHandle(
    ref,
    () => {
      return {
        toggle() {
          setVisible((prev) => !prev);
        },
      };
    },
    []
  );

  const onResetUser = () => {
    setVisible(false);
    resetUser('showing-modal-form');
  };

  return (
    visible && (
      <div className={cssModal}>
        <div className={modalContent}>
          Name:{user.name}
          <br />
          Age: {user.age}
          <br />
          Address: {user.address}
          <br />
          <button onClick={onResetUser}>Reset</button>
        </div>
      </div>
    )
  );
});

export default Modal;
