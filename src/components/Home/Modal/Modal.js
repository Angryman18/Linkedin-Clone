import styled from "styled-components";
import Backdrop from "./Backdrop";
import { createPortal } from "react-dom";

const ModalDisplay = () => {
  return <ModalDisplayContainer></ModalDisplayContainer>;
};

const Modal = ({ CloseModal }) => {
  return (
    <>
      {createPortal(<ModalDisplay />, document.getElementById("modaldisplay"))}
      {createPortal(
        <Backdrop onClick={CloseModal} />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;

const ModalDisplayContainer = styled.div`
  width: 550px;
  height: 350px;
  background-color: #fff;
  border-radius: 10px;
  z-index: 1000;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
`;
