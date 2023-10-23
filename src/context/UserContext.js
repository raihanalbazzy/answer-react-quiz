import { createContext, useContext, useState } from 'react';

const initialState = {
  name: '',
  age: '',
  address: '',
};
const UsersContext = createContext({
  user: initialState,
  setUser: () => null,
  /**
   *
   * @param {string} formId
   * @returns
   */
  resetUser: (formId) => null,
});

export const useUserContext = () => useContext(UsersContext);

export default function UserContext(props) {
  const [user, setUser] = useState(initialState);

  /**
   * @typedef {( "name"| "age"| "address") } UserKey
   * @param {{name:UserKey; value:string}} params
   */
  const onSetUser = ({ name, value }) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  /**
   *
   * @param {string} formId
   */
  const resetUser = (formId) => {
    setUser(initialState);
    if (formId) {
      document.getElementById(formId)?.reset();
    }
  };
  return (
    <UsersContext.Provider value={{ user, setUser: onSetUser, resetUser }}>
      {props.children}
    </UsersContext.Provider>
  );
}
