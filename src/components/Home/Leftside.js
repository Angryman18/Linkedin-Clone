import styled from "styled-components";

const LeftSide = () => {
  return (
    <LeftSideContainer>
      <Profile>
        <Background src="images/card-bg.svg" alt="bg" />
        <User>
          <a>
            <Thumbnail src="images/user.svg" />
            <h4>Shyam Mahanta</h4>
          </a>
        </User>
        <UserInfo>
          React Dev | Redux | Components | HTML | CSS | Python Django |
        </UserInfo>
        <Border />
      </Profile>
    </LeftSideContainer>
  );
};

export default LeftSide;

const LeftSideContainer = styled.div`
  grid-area: first;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.1);
`;
const Profile = styled.div`
  position: relative;
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
    text-align:center;
    color: rgba(0,0,0,0.6);
    margin-top: 10px;
    margin-bottom: 15px;
`
const Border = styled.hr`
    margin: 15px 0;
    border: 1px solid rgba(0,0,0,0.1)
    /* border-color: rgba(0,0,0,0.1); */
`