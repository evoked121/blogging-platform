import React, { useState } from "react";
import { Input } from "./../shared/components/Input.js";
import {
  emailValidationMessage,
  passwordValidationMessage,
  validateEmail,
  validatePassword,
  validatePasswordConf,
  passwordConfValidationMessage,
  validateUsername,
  usernameValidationMessage,
} from "./../shared/validators";

export const Register = ({ switchAuthHandler }) => {
  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    confirmPassword: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const onChangeHandler = (value, field) => {
    setFormState((preState) => ({
      ...preState,
      [field]: {
        ...preState[field],
        value: value,
      },
    }));
  };

  const onBlurHandler = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "confirmPassword":
        isValid = validatePasswordConf(value, formState.password.value);
        break;
      case "username":
        isValid = validateUsername(value);
        break;
      default:
        break;
    }
    setFormState((preState) => ({
      ...preState,
      [field]: {
        ...preState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("register");
  };
  return (
    <div className="register-container">
      <form className="auth-form">
        <Input
          field="email"
          label="email"
          value={formState.email.value}
          validationMessage={emailValidationMessage}
          showErrorMessage={formState.email.showError}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
        ></Input>
        <Input
          field="username"
          label="username"
          value={formState.username.value}
          validationMessage={usernameValidationMessage}
          showErrorMessage={formState.username.showError}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
        ></Input>
        <Input
          field="password"
          label="password"
          value={formState.password.value}
          validationMessage={passwordValidationMessage}
          showErrorMessage={formState.password.showError}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
        ></Input>
        <Input
          field="confirmPassword"
          label="confirm password"
          value={formState.confirmPassword.value}
          validationMessage={passwordConfValidationMessage}
          showErrorMessage={formState.confirmPassword.showError}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
        ></Input>
      </form>
      <button onClick={handleRegister}>Register</button>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Already have an account? log in!
      </span>
    </div>
  );
};
