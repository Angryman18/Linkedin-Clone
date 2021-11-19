import styled from "styled-components";

const Notfound = ({ text }) => {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
};

export default Notfound;

const Container = styled.div`
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
