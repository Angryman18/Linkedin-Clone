import styled from "styled-components";
import linkedinNews from "../../data/linkedin-news";
import ShowMore from "../../UI/showmore";
import React from "react";

const RightSide = () => {
  const [show, setShow] = React.useState(false);

  const showHandler = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <RightSideContainer>
      <Card>
        <Heading>
          <span>Linkedin News</span>
          <Feed src="/images/feed-icon.svg" alt="item" />
          <Text>
            These are the day’s top professional news stories and conversations.
            Learn more about how they’re selected.
          </Text>
        </Heading>
        {linkedinNews.map((item, idx) => {
          if (!show && idx < 5) {
            return (
              <News key={item.id}>
                <a>
                  <span>
                    <Bullet /> {item.title}
                  </span>
                  <span>
                    {item.date} <SmallBullets /> {item.readers} readers
                  </span>
                </a>
              </News>
            );
          }
          if (show) {
            return (
              <News key={item.id}>
                <a>
                  <span>
                    <Bullet /> {item.title}
                  </span>
                  <span>
                    {item.date} <SmallBullets /> {item.readers} readers
                  </span>
                </a>
              </News>
            );
          }
          return false;
        })}
        <ShowMore
          onClick={showHandler}
          text={
            show ? (
              <ShowButton>
                {" "}
                <span>Show less</span>{" "}
                <img src="images/show-less.svg" alt="showless" />{" "}
              </ShowButton>
            ) : (
              <ShowButton>
                <span>Show more</span>{" "}
                <img src="images/show-more.svg" alt="showmore" />{" "}
              </ShowButton>
            )
          }
        />
      </Card>
      <Banner>
        <a>
          <Ad src="images/banner.png" alt="Banner" />
        </a>
      </Banner>
    </RightSideContainer>
  );
};

export default RightSide;

const RightSideContainer = styled.div`
  grid-area: last;
`;
const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.09);
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  position: relative;
  span {
    font-weight: 700;
    font-size: 16px;
    margin-top: 5px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  color: rgba(0, 0, 0, 0.8);
`;
const Text = styled.p`
  display: none;
  position: absolute;
  top: -50%;
  right: 30px;
  width: 250px;
  font-size: 14px;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 5px 0px 5px 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.1);
`;
const Feed = styled.img`
  cursor: pointer;
  &:hover + ${Text} {
    display: block;
  }
`;
const News = styled.div`
  margin: 4px 0;
  padding: 4px 0;
  cursor: pointer;
  a {
    display: flex;
    flex-direction: column;
    span:nth-of-type(1) {
      font-size: 14px;
      font-weight: 700;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.8);
    }
    span:nth-of-type(2) {
      margin-left: 25px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const Bullet = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0 10px 0 15px;
`;

const SmallBullets = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  display: inline-block;
  margin: 0 3px;
  vertical-align: middle;
`;
const ShowButton = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 8px;
  }
  img {
    opacity: 0.5;
  }
`;

const Banner = styled(Card)`
  margin-top: 10px;
  display: flex;
  justify-content: center;

  a {
    cursor: pointer;
  }
`;
const Ad = styled.img`
  width: 300px;
  height: 250px;
`;
