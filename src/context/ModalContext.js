import { createContext, useContext, useState } from 'react';

const ModalContexts = createContext({
  showModal: false,
  toggleModal: () => null,
});

export const useModalContext = () => useContext(ModalContexts);

const ModalContext = (props) => {
  const [showModal, setModal] = useState(false);
  function toggleModal(value) {
    setModal((prev) => !prev);
  }
  return (
    <ModalContexts.Provider
      value={{
        showModal,
        toggleModal,
      }}
    >
      {props.children}
    </ModalContexts.Provider>
  );
};

export default ModalContext;
