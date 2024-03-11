import React, { useEffect, useState } from "react";
import {
  emailValidationMessage,
  passwordValidationMessage,
  validateEmail,
  validatePassword,
} from "./../shared/validators";
import { Input } from "./../shared/components/Input.js";
import { useLogin } from "../shared/hooks/useLogin.js";

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin();
  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
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
      default:
        break;
    }
    setFormState((preState) => ({
      ...preState,
      [field]: {
        ...preState[field],
        isValid: isValid,
        showError: !isValid,
      },
    }));
  };
  const handleLogin = (event) => {
    event.preventDefault();
    login(formState.email.value, formState.password.value);
  };
  return (
    <div className="login-container">
      <form className="auth-form">
        <Input
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        ></Input>
        <Input
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        ></Input>
      </form>
      <button
        disabled={
          !formState.email.isValid || !formState.password.isValid || isLoading
        }
        onClick={handleLogin}
      >
        Login
      </button>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Don't have an account? Sign up
      </span>
    </div>
  );
};
