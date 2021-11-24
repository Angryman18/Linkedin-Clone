import styled from "styled-components";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import React from "react";

const Login = () => {
  const user = useSelector((state) => state.AuthSlicer.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate("home");
    }
  }, [user, navigate]);

  return (
    <Container>
      <Nav>
        <a href="/">
          <img className="logo" src="/images/logo.svg" alt="logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <Signin>Sign in</Signin>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <LoginForm />
          <img
            className="background"
            src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt="background"
          />
        </Hero>
      </Section>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  padding: 0;
`;
const Nav = styled.div`
  max-width: 1128px;
  padding: 8px 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: auto;

  @media (max-width: 768px) {
    padding: 6px 8px;
  }

  & > a {
    width: 135px;
    height: 25px;
    margin-top: -8px;

    @media screen and (max-width: 768px) {
      padding: 0 5px;
      width: 100px;
    }
  }

  a img {
    @media screen and (max-width: 768px) {
      width: 100px;
    }
  }
`;

const Join = styled.a`
  color: rgba(0, 0, 0, 0.6);
  padding: 10px 12px;
  font-size: 16px;
  text-decoration: none;
  margin-right: 12px;
  margin-top: 5px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 5px 6px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const Signin = styled.a`
  padding: 11px 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  font-size: 16px;
  font-weight: 600;
  border-radius: 24px;
  line-height: 32px;
  text-decoration: none;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  transition-duration: 167ms;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 5px 12px;
  }

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    text-decoration: none;
    box-shadow: inset 0 0 0 2px #0a66c2;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  align-items: center;
  min-height: 700px;
  padding-bottom: 138px;
  padding: 45px 16px;
  position: relative;
  max-width: 1128px;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 768px) {
    min-height: 0;
    margin: auto;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    color: rgba(143, 88, 73, 1);
    font-size: 56px;
    font-weight: 100;
    width: 50%;
    line-height: 1.2;

    @media screen and (max-width: 768px) {
      font-size: 32px;
      font-weight: 300;
      width: 100%;
    }
  }

  .background {
    width: 700px;
    height: 670px;
    position: absolute;
    right: -175px;
    top: 45px;
    z-index: 1;

    @media screen and (max-width: 768px) {
      width: 60%;
      top: 60%;
      left: 20%;
      overflow-x: hidden;
      z-index: -1;
    }
    @media screen and (max-width: 480px) {
      width: 60%;
      top: 50%;
      left: 18%;
      overflow-x: hidden;
    }
  }
  .forgot-password {
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    color: #212121;
  }
  .forgot-password:hover {
    text-decoration: underline;
  }
`;
