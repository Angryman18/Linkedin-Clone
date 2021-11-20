import styled from "styled-components";

const RightSide = () => {
  return (
    <RightSideContainer>
      <NewsSection>
        here is some news
      </NewsSection>
    </RightSideContainer>
  );
};

export default RightSide;

const RightSideContainer = styled.div`
  grid-area: last;
  border-radius: 5px;
`;
const NewsSection = styled.div`
  background-color: #fff;

`