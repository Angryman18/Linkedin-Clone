import styled from "styled-components";

const Header = () => {
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
            <NavList>
              <a>
                <img src="images/nav-home.svg" alt="home" />
                <span>Home</span>
              </a>
            </NavList>
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
  width: 100vw;
  background-color: #fff;
  padding: 0 24px;
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1128px;
  max-height: 100%;
  margin: 10px auto;
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
      padding: 0 8px 0 40px;
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
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
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
      opacity: 0.7;
      span {
          color: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
      }
    
  }
  &:hover, &:active {
      a {
          opacity: 1;
          span {
              color: rgba(0,0,0,0.9);
          }
      }
  }
`;
