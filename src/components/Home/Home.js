import styled from "styled-components";
import { useSelector } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import LeftSide from "./Leftside";
import Middle from "./Middle";
import RightSide from "./RIghtside";
import Modal from "./Modal/Modal";
import { uiSlicerActions } from "../../store/ui-slicer";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.AuthSlicer.user);
  const loading = useSelector(state => state.AuthSlicer.loading)
  const postmodal = useSelector((state) => state.UiSlicer.postmodal);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("im home useeffect running")
  }, []);

  console.log("im home running")

  return (
    <Container>
      {console.log("im home rendering")}
      <Section>
        <a>
          <h5>Develop new skills - </h5>
          <p>
            Millions of memebers use Linkedin Learning. Unlock your free access
            today.
          </p>
        </a>
      </Section>
      <BodySection>
        <LeftSide />
        <Middle />
        <RightSide />
      </BodySection>
      {postmodal && (
        <Modal CloseModal={() => dispatch(uiSlicerActions.ClosePostModal())} />
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 60px;
  width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.section`
  text-align: center;
  a {
    cursor: pointer;
    font-size: 14px;
    word-spacing: 1px;
    letter-spacing: 0.2px;
  }
  a h5 {
    display: inline;
    color: #0a66c2;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  a p {
    display: inline;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.65);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const BodySection = styled.section`
  display: grid;
  max-width: 1128px;
  grid-template-areas: "first middle last";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(0, 7fr);
  grid-gap: 25px;
  margin: 17px 0;
`;
