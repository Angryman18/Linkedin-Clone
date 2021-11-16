import styled from "styled-components";
import { useState } from "react";
import Signinwithgoogle from "./GoogleSign";


const LoginForm = () => {
  const [password, setPassword] = useState("Show");
  const [passtype, setPasstype] = useState("password");

  const showPasswordhander = (e) => {
    e.preventDefault();
    setPassword(password === "Show" ? "Hide" : "Show");
    setPasstype(password === "Show" ? "text" : "password");
  };

  return (
    <Form>
      <FormContent>
        <input type="text" className="input" required id="email" />
        <label htmlFor="email">Email or phone number</label>
      </FormContent>
      <FormContent>
        <input type={passtype} className="input" required id="password" />
        <label htmlFor="password">Password</label>
        <button onClick={showPasswordhander} type="button">
          {password}
        </button>
      </FormContent>
      <a className="forgot-password" href="/">
        Forgot password?
      </a>
      <Signin type="submit">Sign in</Signin>
      <Or>or</Or>
      <Signinwithgoogle />
    </Form>
  );
};

export default LoginForm;

const Form = styled.div`
  padding-top: 40px;
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
const FormContent = styled.form`
  position: relative;
  height: 48px;
  margin-bottom: 10px;
  .input {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    padding-top: 20px;
    padding-left: 10px;
    width: 100%;
    height: 100%;
    font-size: 17px;
    line-height: 1.5;
    outline-color: #0a66c2;
    color: rgba(0, 0, 0, 0.9);
  }
  label {
    position: absolute;
    bottom: 15px;
    left: 10px;
    color: rgba(0, 0, 0, 0.7);
    pointer-events: none;
    transition: 0.3s ease;
  }

  .input:focus + label,
  .input:valid + label {
    bottom: 30px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
  }

  button {
    position: absolute;
    z-index: 15;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 5px;
    border-radius: 4px;
    top: 20%;
    right: 10px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.65);
    background-color: transparent;
    transition: 167ms;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const Signin = styled.button`
  display: block;
  margin-top: 25px;
  width: 100%;
  padding: 15px 0;
  border-radius: 30px;
  border: none;
  background-color: #2977c9;
  color: #fff;
  font-size: 1.3rem;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #125ba7;
  }
`;

const Or = styled.p`
  position: relative;
  text-align: center;
  color: rgba(0,0,0,0.5);

  ::before {
    position: absolute;
    left: 0;
    top: 50%;
    content: " ";
    width: 45%;
    height: 1px;
    background-color: rgba(0,0,0,0.3);
  }
  ::after {
    position: absolute;
    top: 50%;
    right: 0;
    content: " ";
    width: 45%;
    height: 1px;
    background-color: rgba(0,0,0,0.3);
  }
`;
