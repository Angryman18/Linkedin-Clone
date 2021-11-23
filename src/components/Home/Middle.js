import styled from "styled-components";

const Middle = () => {
  return (
    <MiddleContainer>
      <ShareBox>
        <TopSection>
          <Avatar src="images/user.svg" alt="user" />
          <SharePost>Start a post</SharePost>
        </TopSection>
        <BottomSection>
          <a>
            <img src="images/upload_photo.svg" alt="photo" />
            <span>Photo</span>
          </a>
          <a>
            <img src="images/upload_video.svg" alt="video" />
            <span>Video</span>
          </a>
          <a>
            <img src="images/upload_events.svg" alt="event" />
            <span>Event</span>
          </a>
          <a>
            <img src="images/upload_article.svg" alt="article" />
            <span>Write article</span>
          </a>
        </BottomSection>
      </ShareBox>
      <PostBox>
        <UserDetail>
          <img src="images/3dots.svg" alt="menu_icon" />
          <div>
            <img src="images/user.svg" alt="avatar" />
            <div>
              <span>Shyam Mahanta</span>
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
        <SocialBox>
          
        </SocialBox>
      </PostBox>
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

const ShareBox = styled(DefaultBox)``;
const PostBox = styled(DefaultBox)`
  padding: 0;
  display: block;
  margin: 20px 0;
  position: relative;
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
  a {
    display: flex;
    align-items: center;
    padding: 10px 12px;
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
  a:hover {
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
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
      }
      span:nth-of-type(3) {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
const Desc = styled.div`
  padding: 0 10px;
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
const SocialBox = styled.div``;
