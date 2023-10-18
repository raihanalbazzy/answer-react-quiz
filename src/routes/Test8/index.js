import { useRef } from 'react';
import Modal from './Modal';
import { cssForm } from './style';
import UserContext, { useUserContext } from '../../context/UserContext';

const Form = (props) => {
  const { setUser, user } = useUserContext();

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (event) => {
    setUser({ name: event.target.name, value: event.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (props.modalRef.current) props.modalRef.current.toggle();
      }}
      className={cssForm}
    >
      <input
        name="name"
        type="text"
        placeholder="name"
        value={user.name}
        onChange={handleInput}
      />
      <input
        name="age"
        type="text"
        placeholder="age"
        value={user.age}
        onChange={handleInput}
      />
      <textarea
        name="address"
        type="text"
        value={user.address}
        placeholder="address"
        onChange={handleInput}
      />
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
