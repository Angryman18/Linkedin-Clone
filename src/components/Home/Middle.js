import React from "react";
import styled from "styled-components";
import { uiSlicerActions } from "../../store/ui-slicer";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../UI/loading-spinner";
import { getPosts } from "../../actions/signinAPI";

const Middle = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AuthSlicer.user);
  const PostLoading = useSelector((state) => state.PostSlicer.loading);
  const PostContainsFile = useSelector((state) => state.PostSlicer.file);
  const retriveAllPost = useSelector((state) => state.PostSlicer.post);
  const UploadingProgress = useSelector((state) => state.PostSlicer.uploaded);

  React.useEffect(() => {
    // let reload = true;
    // if (reload) {
    //   dispatch(getPosts());
    // }
    // return () => (reload = false);
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <MiddleContainer>
      <ShareBox>
        <TopSection>
          <Avatar src={user ? user.photoURL : "images/user.svg"} alt="user" />
          <SharePost onClick={() => dispatch(uiSlicerActions.OpenPostModal())}>
            Start a post
          </SharePost>
        </TopSection>
        <BottomSection>
          <p onClick={() => dispatch(uiSlicerActions.OpenPostModal())}>
            <img src="images/upload_photo.svg" alt="icon" />
            <span>Photo</span>
          </p>
          <p onClick={() => dispatch(uiSlicerActions.OpenPostModal())}>
            <img src="images/upload_video.svg" alt="icon" />
            <span>Video</span>
          </p>
          <p>
            <img src="images/upload_events.svg" alt="event" />
            <span>Event</span>
          </p>
          <p>
            <img src="images/upload_article.svg" alt="article" />
            <span>Write article</span>
          </p>
        </BottomSection>
      </ShareBox>
      {PostLoading && (
        <UploadBox>
          {!PostContainsFile && (
            <Spinner>
              <LoadingSpinner />
            </Spinner>
          )}
          {PostContainsFile && (
            <ProgressBar
              upload={+UploadingProgress}
              style={{ width: `${UploadingProgress}%` }}
            >
              <p>
                {+UploadingProgress < 100 ? "Uploading..." : "Uploaded -"}{" "}
                <strong>{`${+UploadingProgress.toFixed(0)}%`}</strong>
              </p>
            </ProgressBar>
          )}
        </UploadBox>
      )}
      {retriveAllPost &&
        retriveAllPost.map((item, id) => {
          return (
            <PostBox key={item.id}>
              <UserDetail>
                <img src="images/3dots.svg" alt="menu_icon" />
                <div>
                  <img src={item.user.avatar} alt="avatar" />
                  <div>
                    <span>{item.user.name}</span>
                    <span>{item.user.email}</span>
                    <span>{`${item.user.date
                      .toDate()
                      .toLocaleDateString()}`}</span>
                  </div>
                </div>
              </UserDetail>
              <PostDetail>
                <Desc>{item.description}</Desc>
                {item.file && item.fileType === "image" && (
                  <img src={item.file} alt="bg" />
                )}
                {item.file && item.fileType === "video" && (
                  <video preload="metadata" width="100%" controls>
                    <source src={`${item.file}`}></source>
                  </video>
                )}
              </PostDetail>
              <SocialBox>
                <li>
                  <img src="images/Like.svg" alt="like" />
                  Like
                </li>
                <li>
                  <img src="images/Comment.svg" alt="comment" />
                  Comment
                </li>
                <li>
                  <img src="images/Share.svg" alt="share" />
                  Share
                </li>
                <li>
                  <img src="images/Send.svg" alt="send" />
                  Send
                </li>
              </SocialBox>
            </PostBox>
          );
        })}
      {/* <PostBox>
        <UserDetail>
          <img src="images/3dots.svg" alt="menu_icon" />
          <div>
            <img src="images/user.svg" alt="avatar" />
            <div>
              <span>{user && user.displayName}</span>
              <span>Software Developer at NCG</span>
              <span>11th Nov</span>
            </div>
          </div>
        </UserDetail>
        <PostDetail>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Desc>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="bg"
          />
        </PostDetail>
        <SocialBox></SocialBox>
      </PostBox> */}
    </MiddleContainer>
  );
};

export default Middle;

const MiddleContainer = styled.div`
  grid-area: middle;
`;

const DefaultBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 10px 5px 10px;
  display: flex;
  flex-direction: column;
`;

const ShareBox = styled(DefaultBox)`
  border: 1px solid rgba(0, 0, 0, 0.09);
`;
const PostBox = styled(DefaultBox)`
  padding: 0;
  display: block;
  margin: 20px 0;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.09);
`;
const TopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BottomSection = styled.div`
  margin: 5px 10px 0 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  p {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 167ms;
    span {
      font-weight: 700;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
    }
    img {
      margin-right: 10px;
    }
  }
  p:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
const SharePost = styled.div`
  flex: 2;
  width: 100%;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding-left: 13px;
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition-duration: 167ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;
const UserDetail = styled.div`
  box-sizing: border-box;
  padding: 10px;

  & > img {
    position: absolute;
    right: 15px;
    top: 10px;
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 45px;
      border-radius: 50%;
      margin-right: 10px;
      cursor: pointer;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      span {
        line-height: 1.3;
      }
      span:nth-of-type(1) {
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
      }
      span:nth-of-type(1):hover {
        color: #0a66c2;
        text-decoration: underline;
      }
      span:nth-of-type(2) {
        font-size: 11px;
        color: rgba(0, 0, 0, 0.6);
      }
      span:nth-of-type(3) {
        font-size: 11.5px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
const Desc = styled.div`
  padding: 0 10px;
  margin-left: 5px;
  font-weight: 400;
  padding-bottom: 10px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 15px;
  line-height: 1.2;
  text-align: justify;
  word-spacing: justify;
`;

const PostDetail = styled.div`
  & > img {
    width: 100%;
    cursor: pointer;
  }
`;
const SocialBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  & > li {
    list-style: none;
    margin: 5px 10px;
    border-radius: 3px;
    transition-duration: 167ms;
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-weight: 700;
    img {
      opacity: 0.6;
    }
    :hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

const UploadBox = styled.div`
  box-sizing: border-box;
  margin-top: 10px;
  padding: 5px;
`;
const ProgressBar = styled.div`
  height: 25px;
  background-color: ${({ upload }) => (upload === 100 ? "#00a03e" : "#aed6f1")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  transition: 0.5s ease;
  position: relative;
  p {
    position: fixed;
    color: ${({ upload }) => (upload === 100 ? "#fff" : "#444444")};
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

const Spinner = styled.div`
  text-align: center;
  transition: 0.5s ease;
`;
