import styled from "styled-components";

const Backdrop = ({ onClick }) => {
  return <BackdropContainer onClick={onClick}></BackdropContainer>;
};
export default Backdrop;

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0,0,0,0.65);
  transition-duration: 167ms;
`;
