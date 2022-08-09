import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  //   const [enteredUser, setEnteredUser] = useState("");
  //   const [enteredAge, setEnteredAge] = useState("");
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUser = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    console.log(enteredUser);
    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid input age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    props.onAddUser(enteredUser, enteredAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUser("");
    // setEnteredAge("");
  };

  //   const EnteredUserHandler = (event) => {
  //     setEnteredUser(event.target.value);
  //   };
  //   const EnteredAgeHandler = (event) => {
  //     setEnteredAge(event.target.value);
  //   };

  const errorHandler = () => {
    setError(null);
  };

  return (
    // DONT USE PARENTHESS, IF WE USE PARENTHESS CAN DIRECT EXECUTE
    <Wrapper>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={enteredUser}
            // onChange={EnteredUserHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            // value={enteredAge}
            // onChange={EnteredAgeHandler}
            ref={ageInputRef}
          />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
