import { createContext, useContext, useState } from 'react';

const initialState = {
  name: '',
  age: '',
  address: '',
};
const UsersContext = createContext({
  user: initialState,
  setUser: () => null,
  resetUser: () => null,
});

export const useUserContext = () => useContext(UsersContext);

export default function UserContext(props) {
  const [user, setUser] = useState(initialState);

  const onSetUser = ({ name, value }) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const resetUser = () => setUser(initialState);
  return (
    <UsersContext.Provider value={{ user, setUser: onSetUser, resetUser }}>
      {props.children}
    </UsersContext.Provider>
  );
}
