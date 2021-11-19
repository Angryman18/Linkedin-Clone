import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Section>
        <a>
          <h5>Develop new skills{" "}-{" "}</h5>
          <p>
            {" "}Millions of memebers use Linkedin Learning. Unlock your free access
            today.
          </p>
        </a>
      </Section>
    </Container>
  );
};

export default Home;


const Container = styled.div`

    padding-top: 70px;
    width: 1128px;
    margin-left: auto;
    margin-right: auto;

`
const Section =styled.section`

a {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: underline;
    font-family: sans-serif;
    font-size: 14px;
}
a h5 {
    color: #0a66c2;
}

a p {
    font-weight: 700;
    color: rgba(0,0,0,0.65);
}

`