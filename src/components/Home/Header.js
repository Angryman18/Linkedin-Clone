import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { usersignOut } from "../../actions/signinAPI";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.AuthSlicer.user);
  const [signoutMenu, setSignoutMenu] = useState(false);

  const showmenuHandler = () => {
    setSignoutMenu(!signoutMenu);
  };

  const signoutHandler = () => {
    dispatch(usersignOut());
    navigate("/");
  };

  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img src="images/home-logo.svg" alt="logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon src="images/search-icon.svg" alt="search" />
        </Search>
        <Nav>
          <NavListWrapper>
            <NavList className="active">
              <a>
                <img
                  style={{ opacity: "0.6" }}
                  src="images/nav-home.svg"
                  alt="home"
                />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="images/nav-network.svg" alt="network" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="images/nav-jobs.svg" alt="jobs" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="images/nav-messaging.svg" alt="messaging" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="images/nav-notifications.svg" alt="notifications" />
                <span>Notifications</span>
              </a>
            </NavList>
            <Profile onClick={showmenuHandler}>
              <a>
                <Pic
                  src={user ? user.photoURL : "images/user.svg"}
                  alt="user"
                />
                <DownComp>
                  <span>Me</span>
                  <img src="images/down-icon.svg" alt="downIcon" />
                </DownComp>
              </a>
              {signoutMenu && (
                <Signout onClick={signoutHandler}>
                  <span>Sign Out</span>
                </Signout>
              )}
            </Profile>
            <Work>
              <a>
                <img src="images/nav-work.svg" alt="work" />
                <DownComp>
                  <span>Work</span>
                  <img src="images/down-icon.svg" alt="downIcon" />
                </DownComp>
              </a>
            </Work>
            <Text>
              <a>Try Premium for Free</a>
            </Text>
          </NavListWrapper>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 10px;
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1128px;
  max-height: 100%;
  margin: 5px auto;
`;
const Logo = styled.div`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  flex-grow: 1;
  position: relative;

  & > div {
    width: 280px;
    input {
      width: 240px;
      padding: 0 0 0 40px;
      background-color: #eef3f8;
      outline: none;
      border: none;
      height: 34px;
      line-height: 1.75;
      font-size: 1.1rem;
      border-radius: 4px;
      font-weight: 400;
    }
    input::placeholder {
      font-size: 0.9rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 28%;
  left: 15px;
  opacity: 0.6;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
`;
const NavListWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;

  .active {
    a {
      opacity: 1;
    }
    a span::after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: -5px;
      min-width: 80px;
      border-bottom: 2px solid #212121;
      color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  a {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    min-height: 42px;
    min-width: 80px;
    opacity: 0.85;
    position: relative;
    span {
      color: rgba(0, 0, 0, 0.8);
    }
  }
  &:hover,
  &:active {
    a {
      opacity: 2;
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const Signout = styled.div`
  position: absolute;
  bottom: -40px;
  background: #fff;
  width: 80px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 5px 0px;
  font-size: 14px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.7);
  transition-duration: 167ms;
  cursor: pointer;
`;

const Profile = styled(NavList)`
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const Pic = styled.img`
  height: 26px;
  width: 26px;
  border-radius: 50%;
`;

const Work = styled(NavList)``;

const DownComp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 15px;
  }
`;
const Text = styled(NavList)`
  width: 100px;
  text-align: center;
  opacity: 1;
  a {
    line-height: 1.5;
    color: #915907;
    opacity: 1;
  }

  a:hover {
    text-decoration: underline;
  }
`;
