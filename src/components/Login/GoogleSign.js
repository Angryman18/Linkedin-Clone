import styled from "styled-components";
import { signinAPI } from "../../actions/signinAPI";
import { useDispatch } from "react-redux";

const Signinwithgoogle = () => {
  const dispatch = useDispatch()
  return (
    <Google onClick={() => dispatch(signinAPI())}>
      <div>
        <img className="googleicon" src="images/google.svg" alt="google" />
        Sign in With Google
      </div>
    </Google>
  );
};

export default Signinwithgoogle;

const Google = styled.button`
  margin-top: 15px;
  width: 100%;
  padding: 15px 0;
  border-radius: 30px;
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.7);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.7);
  background-color: #fff;
  transition: 167ms;
  border: none;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.7);
    color: rgba(0, 0, 0, 0.75);
  }

  div {
    width: 230px;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }

  div.googleicon {
    width: 25px;
    height: 25px;
  }
`;
