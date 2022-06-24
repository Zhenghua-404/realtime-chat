import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
function register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };
  const handleChange = (event) => {};
  return (
    <>
      <FormContainer>
        <form on Submit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>snappy</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>
    </>
  );
}
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: lrem;
  align-items: center;
  background-color: #131324;
  /* logo format */
  .brand {
    display: flwx;
    align-items: center;
    gap: lrem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      /* :focus -- CSS pseudo-class which applies when the user clicks or taps on the input */
      /* & -- a single ampersand refers to all instances of the component; it is used for applying broad overrides: */
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
  }
`;

export default register;
