import { useRef } from 'react';
import Modal from './Modal';
import { cssForm } from './style';
import UserContext, { useUserContext } from '../../context/UserContext';

const Form = (props) => {
  const { setUser, user } = useUserContext();

  // ONLY ONE HANDLE METHOD ALLOWED
  const onSubmit = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    for (const key in user) {
      if (typeof elements[key] !== 'undefined') {
        setUser({ name: key, value: elements[key].value });
      }
    }
    if (props.modalRef.current) props.modalRef.current.toggle();
  };

  return (
    <form id="showing-modal-form" onSubmit={onSubmit} className={cssForm}>
      <input name="name" placeholder="name" />
      <input name="age" placeholder="age" />
      <textarea name="address" placeholder="address" />
      <button type="submit">Submit</button>
    </form>
  );
};

const Test8 = () => {
  const modalRef = useRef(null);
  return (
    <UserContext>
      <div>
        <ul>
          <li>User can input the form - only 1 handle method is allowed</li>
          <li>When submit display the modal</li>
          <li>Show the form value inside the modal</li>
          <li>
            Reset the form and close the modal when user click the reset button
          </li>
        </ul>
        <Form modalRef={modalRef} />
        {/* Only Show the modal when user clicked submit */}
        <Modal ref={modalRef} />
      </div>
    </UserContext>
  );
};

export default Test8;
