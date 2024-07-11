import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/projectStyles.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Serif', serif;
    background: ${colors.secondaryColor};
    color: ${colors.primaryColor};
  }

  html, body, #root {
    height: 100%;
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
    border: none;
    color: ${colors.gold};
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
    color: ${colors.primaryColor};
    font-size: 1.6rem;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
    color: ${colors.primaryColor};
    font-size: 1.2rem;
  }
`;

export const Container = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 30px;

  @media (max-width: 420px) {
    padding: 10px;
  }
`;

export const Main = styled.main`
  min-height: 72vh;
  margin: auto;
`;

export const MainTittle = styled.h1`
  font-family: "Hedvig Letters Serif", serif;  
  color: ${colors.gold};
`;

export const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  label {
    color: ${colors.gold};
    font-size: 1.7rem;
    padding: 0.7rem;
    margin: auto;
  }
  input {
    display: block;
    padding: 1rem;
    margin-top: 0.5rem;
    margin-left: -0.4rem;
    border-radius: 0.8rem;
    height: 3rem;
    width: 30rem;
    font-size: 1.4rem;
    border: 0.2rem solid ${colors.gold};
    color: ${colors.gold};
    background-color: ${colors.strongBlue};
  }
  input::placeholder {
    color: ${colors.gold};
    opacity: 0.65;
  }
  input[type='file'] {
    height: 5rem;
  }
  input::file-selector-button {
    background-color: ${colors.gold};
    color: ${colors.strongBlue};
    border: 0.2rem solid ${colors.strongBlue};
    border-radius: 0.5rem;
    cursor: pointer;
  }
  input::file-selector-button:hover {
    background-color: ${colors.strongBlue};
    color: ${colors.gold};
    border: 0.2rem solid ${colors.gold};
  }
  button {
    display: block;
    text-align: center;
    font-size: 1.4rem;
    padding: 0.5rem;
    margin: 1.2rem auto;
    width: 10rem;
    color: ${colors.strongBlue};
    background-color: ${colors.gold};
    border-radius: 0.8rem;
    border: 0.2rem solid ${colors.strongBlue};
  }
  button:hover {
    color: ${colors.gold};
    background: ${colors.strongBlue};
    border: 0.2rem solid ${colors.gold};
  }
  fieldset {
    border: 0.2rem solid ${colors.gold};
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
  }
  legend {
    font-size: 1.7rem;
    color: ${colors.blue};
    padding: 1rem;
    margin: 1rem;
  }

  @media (max-width: 530px) {
    input {
      max-width: 19rem;
    }
    input[type='file'] {
      margin-left: 0;
    }
    label {
      max-width: 19rem;
    }
  }

  @media (max-width: 340px) {
    input {
      width: 95%;
    }
    label {
      width: 95%;
    }
  }
`;