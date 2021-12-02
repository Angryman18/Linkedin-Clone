import styled from "styled-components";
import Backdrop from "./Backdrop";
import { createPortal } from "react-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SharePost } from "../../../actions/signinAPI";
import { v4 as uuid4 } from "uuid";

const ModalDisplay = ({ closeModal }) => {
  const dispatch = useDispatch();

  // const [postdetail, setPostDetail] = useState("");
  const user = useSelector((state) => state.AuthSlicer.user);

  // const [image, setImage] = useState("");
  // const [imageName, setImageName] = useState("");

  // const [media, setMedia] = useState("");
  // const [mediaName, setMediaName] = useState("");

  // const [mediaType, setMediaType] = useState("");

  const [state, setState] = useState({
    image: {
      image: "",
      imageName: "",
    },
    video: {
      video: "",
      videoName: "",
    },
    mediaType: null,
    postdetail: "",
  });

  const handleInput = (e) => {
    e.target.style.height = "32px";
    let height = e.target.style.height;
    if (height !== "" || height.length > 0 || height !== null) {
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const resetPostModal = () => {
    // setImage("");
    // setImageName("");
    // setMedia("");
    // setMediaName("");
    // setMediaType("");
    // setPostDetail("");
    setState(state);
    closeModal();
  };

  const imageHandler = (e) => {
    const image = e.target.files[0];
    if (
      image === "" ||
      image === undefined ||
      !image.type.startsWith("image")
    ) {
      return;
    }
    setState((pre) => {
      return {
        ...pre,
        image: {
          imageName: `${uuid4()}_${image.name}`,
          image: image,
          video: {},
        },
        mediaType: "image",
      };
    });
    // setImage(image);
    // setImageName(`${uuid4()}_${image.name}`);
    // setMediaType("image");
  };

  const mediaHandler = (e) => {
    const mediaFile = e.target.files[0];
    if (
      mediaFile === "" ||
      mediaFile === undefined ||
      !mediaFile.type.startsWith("video")
    ) {
      return;
    }
    setState((pre) => {
      return {
        ...pre,
        video: {
          videoName: `${uuid4()}_${mediaFile.name}`,
          video: mediaFile,
          image: {},
        },
        mediaType: "video",
      };
    });
    // setMedia(mediaFile);
    // setMediaName(mediaFile.name);
    // setMediaType("video");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { image, video, mediaType, postdetail } = state;
    if (state.postdetail.trim().length > 0) {
      const payload = {
        fileType: mediaType,
        fileName:
          mediaType === "image"
            ? image.imageName
            : mediaType === "video" && video.videoName,
        file:
          mediaType === "image"
            ? image.image
            : mediaType === "video" && video.video,
        name: user.displayName,
        avatar: user.photoURL,
        email: user.email,
        comments: 0,
        description: postdetail,
      };
      dispatch(SharePost(payload));
      resetPostModal();
    } else {
      return;
    }
  };

  return (
    <ModalDisplayContainer>
      <Header>
        <h4>Create a post</h4>
        <img onClick={closeModal} src="images/close.svg" alt="close" />
      </Header>
      <ContextArea>
        <User>
          <img src={user ? user.photoURL : "images/user.svg"} alt="user" />
          <Name>{user && user.displayName}</Name>
        </User>
        <Editor>
          <textarea
            onInput={handleInput}
            onChange={(e) =>
              setState((pre) => {
                return { ...pre, postdetail: e.target.value };
              })
            }
            placeholder="What do you want to talk about?"
            autoFocus={true}
          />
          <input
            type="file"
            id="file"
            accept=".jpg,.png,.jpeg"
            style={{ display: "none" }}
            onChange={imageHandler}
          />
          <input
            type="file"
            id="media"
            accept=".mp4, .avi, .mkv"
            onChange={mediaHandler}
            style={{ display: "none" }}
          />
          {state?.image?.image && (
            <img src={URL.createObjectURL(state.image.image)} alt="preview" />
          )}
          {state?.video?.video && (
            <video width="100%" controls>
              <source src={URL.createObjectURL(state.video.video)}></source>
            </video>
          )}
        </Editor>
      </ContextArea>
      <Media>
        <Icons>
          <label htmlFor="file">
            <img src="images/photo-icon.svg" alt="icon" />
          </label>
          <label htmlFor="media">
            <img src="images/video-icon.svg" alt="icon" />
          </label>
        </Icons>
        <Buttons>
          <Comment>
            <img src="images/comment.svg" alt="anyone" />
            <p>Anyone</p>
          </Comment>
          <button
            disabled={state.postdetail.trim().length === 0}
            onClick={submitHandler}
          >
            Post
          </button>
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
  max-height: 500px;
  background-color: #fff;
  border-radius: 10px;
  z-index: 1000;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  animation: fadein 0.3s;
`;

const ContextArea = styled.div`
  overflow-y: scroll;
  width: 100%;
  max-height: 390px;
  /* &::-webkit-scrollbar {
    display: none;
  } */
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
  padding: 0 25px;
  padding-top: 10px;
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
  height: 50px;
  bottom: 10px;
  right: 0;
  left: 0;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;

  & > label {
    padding: 8px;
    /* margin: 0 8px; */
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    transition: 167ms ease;
    img {
      margin: auto 0;
    }
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
  & > textarea {
    width: 100%;
    resize: none;
    outline: none;
    border: none;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  & > textarea::-webkit-scrollbar {
    display: none;
  }
  & > img {
    width: 100%;
  }
`;
// const UploadPreview = styled.div``;
