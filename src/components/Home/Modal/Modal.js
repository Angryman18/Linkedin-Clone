import styled from "styled-components";
import Backdrop from "./Backdrop";
import { createPortal } from "react-dom";
import { useState } from "react";

const ModalDisplay = ({ closeModal }) => {
  const [postdetail, setPostDetail] = useState("");
  return (
    <ModalDisplayContainer>
      <Header>
        <h4>Create a post</h4>
        <img onClick={closeModal} src="images/close.svg" alt="close" />
      </Header>
      <User>
        <img src="images/user.svg" alt="user" />
        <Name>Name</Name>
      </User>
      <Editor>
        <textarea
          onChange={(e) => setPostDetail(e.target.value)}
          placeholder="What do you want to talk about?"
          autoFocus={true}
        ></textarea>
      </Editor>
      <Media>
        <Icons>
          <img src="images/photo-icon.svg" alt="icon" />
          <img src="images/video-icon.svg" alt="icon" />
        </Icons>
        <Buttons>
          <Comment>
            <img src="images/comment.svg" alt="anyone" />
            <p>Anyone</p>
          </Comment>
          <button disabled={postdetail.trim().length === 0}>Post</button>
        </Buttons>
      </Media>
    </ModalDisplayContainer>
  );
};

const Modal = ({ CloseModal }) => {
  return (
    <>
      {createPortal(
        <ModalDisplay closeModal={CloseModal} />,
        document.getElementById("modaldisplay")
      )}
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
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 5px 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  h4 {
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.8);
    pointer-events: none;
  }
  & > img {
    cursor: pointer;
    padding: 8px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    opacity: 0.7;
    transition: 167ms ease;
    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  border: 1px solid #fff;

  & > img {
    width: 50px;
    border-radius: 50%;
  }
`;

const Name = styled.p`
  padding-left: 5px;
  font-weight: 600;
`;
const Media = styled.div`
  display: flex;
  padding: 0 25px;
  margin-top: auto;
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 0;
`;
const Icons = styled.div`
  display: flex;

  & > img {
    padding: 8px;
    cursor: pointer;
    border-radius: 50%;
    transition: 167ms ease;
    :hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  margin: 5px;
  width: 100%;

  button {
    background-color: #0a66c2;
    color: #fff;
    border-radius: 25px;
    font-size: 1rem;
    padding: 7px 17px;
    font-weight: 700;
    outline: none;
    border: none;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    transition-duration: 167ms;

    :hover {
      background-color: #004b7c;
    }
    :disabled {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: not-allowed;
    }
  }
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
  margin-left: 5px;
  transition: 167ms ease;
  :hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  & > * {
    margin: 0 3px;
  }
  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 15px;
    font-weight: 700;
  }
`;

const Editor = styled.div`
  box-sizing: border-box;
  padding: 10px 25px;
  width: 100%;
  textarea {
    width: 100%;
    resize: none;
    outline: none;
    border: none;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
