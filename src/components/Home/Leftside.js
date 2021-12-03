import styled from "styled-components";
import { useSelector } from "react-redux";

const LeftSide = () => {
  const user = useSelector((state) => state.AuthSlicer.user);
  if (user == null) {
    return "Loading";
  }
  return (
    <LeftSideContainer>
      <Card>
        <Background src="images/card-bg.svg" alt="bg" />
        <User>
          <a>
            <Thumbnail
              src={user ? user.photoURL : "images/user.svg"}
              alt="user_pic"
            />
            <h4>{user ? user.displayName : "Welcome, there!"}</h4>
          </a>
        </User>
        <UserInfo>Add some bio?</UserInfo>
        <Border />
        <Connection>
          <a>
            <span>
              <p>Connections</p>
              <p>
                <img src="images/widget-icon.svg" />
              </p>
            </span>
            <p>Grow your network</p>
          </a>
          <a>
            <span>Who viewed your profile</span>
            <span>0</span>
          </a>
        </Connection>
        <Border />
        <Premium>
          <a>
            <span>Access exclusive tools & insights</span>
            <span>
              <img src="images/premium.svg" alt="premium" />
              Try Premium for free
            </span>
          </a>
        </Premium>
        <Border />
        <Items>
          <a>
            <img src="images/item-icon.svg" alt="item" />
            <span>My Items</span>
          </a>
        </Items>
      </Card>
      <Card>
        <LinkBox>
          <Child>Group</Child>
          <Child>
            Events
            <img src="images/plus-icon.svg" alt="plusicon" />
          </Child>
          <Child>Follow Hashtags</Child>
        </LinkBox>
        <Discover>
            Discover more
          </Discover>
      </Card>
    </LeftSideContainer>
  );
};

export default LeftSide;

const LeftSideContainer = styled.div`
  grid-area: first;
`;
const Card = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  /* box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.1); */
  border: 1px solid rgba(0, 0, 0, 0.09);
  margin-bottom: 10px;
`;

const User = styled.div`
  margin-top: -40px;
  cursor: pointer;
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }

  a h4 {
    margin-top: 20px;
  }

  a:hover {
    h4 {
      text-decoration: underline;
      text-decoration-color: dodgerblue;
    }
  }
`;

const Background = styled.img`
  width: 100%;
`;
const Thumbnail = styled.img`
  width: 70px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #fff;
`;

const UserInfo = styled.div`
  font-size: 13px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 10px;
  margin-bottom: 15px;
`;
const Border = styled.div`
  /* margin: 8px 0 13px 0; */
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const Connection = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 10px 0;

  a:nth-child(1) {
    line-height: 1.5;
    font-size: 12px;
    font-weight: 700;
    padding: 3px 12px;
    cursor: pointer;
  }

  a span {
    display: flex;
    justify-content: space-between;
  }

  a span p:nth-child(1) {
    color: rgba(0, 0, 0, 0.6);
  }

  a span p:nth-child(2) {
    color: #0a66c2;
  }

  a:nth-child(1) p {
    color: rgba(0, 0, 0, 0.88);
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  a:nth-child(2) {
    line-height: 1.5;
    font-size: 12px;
    font-weight: 700;
    padding: 6px 12px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    span:nth-child(1) {
      color: rgba(0, 0, 0, 0.6);
    }
    span:nth-child(2) {
      color: #0a66c2;
    }
  }
`;
const Premium = styled.div`
  box-sizing: border-box;
  font-size: 12px;

  a {
    display: flex;
    flex-direction: column;
    padding: 13px 10px;
    cursor: pointer;
    line-height: 1.4;

    span:nth-child(1) {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.6);
    }
    span:nth-child(2) {
      display: flex;
      align-items: center;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.88);

      img {
        width: 17px;
        margin-right: 3px;
      }
    }
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.08);
    span:nth-child(2) {
      color: #0a66c2;
    }
  }
`;

const Items = styled.div`
  box-sizing: border-box;
  a {
    display: block;
    padding: 13px 10px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
    span {
      font-size: 12px;
      font-weight: 700;
      vertical-align: text-top;
      margin-left: 7px;
    }
    img {
      opacity: 0.7;
    }
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const LinkBox = styled.div`
  margin: 15px 5px 5px 15px;

`
const Child = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #0a66c2;
  line-height: 1.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  img {
    padding: 8px;
    border-radius: 50%;
    :hover {
      background-color: rgba(0,0,0,0.08);
    }
  }
`;


const Discover = styled.div`
  border-top: 1px solid rgba(0,0,0,0.09);
  line-height: 1.6;
  color: rgba(0,0,0,0.5);
  font-size: 14px;
  font-weight: 700;
  padding: 10px 15px;
  text-align: center;
  cursor: pointer;
  transition-duration: 250ms;

  :hover {
    background-color: rgba(0,0,0,0.08);
  }

`