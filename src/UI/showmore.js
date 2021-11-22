import styled from "styled-components";

const ShowMore = ({onClick, text}) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default ShowMore;

const Button = styled.button`
  outline: none;
  border: none;
  padding: 5px 8px;
  font-size: 14px;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin: 5px 0 10px 25px;
  border-radius: 5px;
`;
