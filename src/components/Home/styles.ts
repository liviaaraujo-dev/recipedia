import styled from "styled-components";

export const HomeContainer = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    padding: 2rem 6rem;
  }

  @media (min-width: 2500px) {
    align-items: center;
  }
`;

export const Container1 = styled.div`
  margin-top: 2rem;

  h2 {
    font-size: 36px;
  }

  p {
    color: #7f7d7d;
    font-weight: 300;
    margin: 1rem 0;
    font-size: 20px;
    width: 80%;
  }

  @media (min-width: 900px) {
    width: 50%;
    text-align: left;
    margin-top: 2rem;

    h2 {
      font-size: 42px;
    }

    p {
      width: 90%;
    }
  }

  @media (min-width: 1300px) {
    h2 {
      font-size: 64px;
    }
  }
`;

export const Container2 = styled.div`
  width: 100%;
  
  img {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 900px) {
    width: 50%;
  }
`;
