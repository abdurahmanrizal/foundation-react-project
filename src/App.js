import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserLists from "./components/Users/UsersList";
function App() {
  const [userLists, setUserLists] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserLists((prevUserLists) => {
      return [
        ...prevUserLists,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserLists users={userLists} />
    </Fragment>
  );
}

export default App;
