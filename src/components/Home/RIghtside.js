import styled from "styled-components";

const RightSide = () => {
  return (
    <RightSideContainer>
      Right Section
    </RightSideContainer>
  );
};

export default RightSide;

const RightSideContainer = styled.div`
  grid-area: last;
  background-color: #fff;
  border-radius: 5px;
`;
