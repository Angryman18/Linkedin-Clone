import styled from "styled-components";

const LeftSide = () => {
  return (
    <LeftSideContainer>
      <Card>
        <Background src="images/card-bg.svg" alt="bg" />
        <User>
          <a>
            <Thumbnail src="images/user.svg" />
            <h4>Shyam Mahanta</h4>
          </a>
        </User>
        <UserInfo>
          ReactJS Developer | Redux | HTML | CSS | Bootstrap | Rest API |
          Authentication
        </UserInfo>
        <Border />
        <Connection>
          <a>
            <span>
              <p>Connections</p>
              <p>48</p>
            </span>
            <p>Grow your network</p>
          </a>
          <a>
            <span>Who viewed your profile</span>
            <span>5</span>
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
  border: 2px solid rgba(0,0,0,0.1);
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
  width: 65px;
  border-radius: 50%;
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
    color: rgba(0,0,0,0.9);
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
    background-color: rgba(0,0,0,0.08);
  }
`;
