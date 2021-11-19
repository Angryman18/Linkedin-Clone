import styled from "styled-components";

const Middle = () => {
  return (
    <MiddleContainer>
      MIddle Section
    </MiddleContainer>
  );
};

export default Middle;

const MiddleContainer = styled.div`
  grid-area: middle;
  background-color: #fff;
  border-radius: 5px;
`;
