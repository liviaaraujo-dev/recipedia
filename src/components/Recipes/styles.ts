import styled from "styled-components";

export const RecipesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    align-items: flex-start;
    padding: 0 3rem;
  }

  @media (min-width: 1300px) {
    /* padding: 0 3rem; */
  }
`;

export const RecipesHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 8rem;

  h2 {
    font-size: 46px;
    font-weight: 600;
    color: #000;
  }

  p {
    color: #7f7d7d;
    font-size: 24px;
    margin-bottom: 1rem;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
  }

  @media (min-width: 1300px) {
    padding: 0 3rem;
  }

  @media (min-width: 2500px) {
    padding: 0 5rem;

  } 
  
`;

export const RecipesItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 0;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1300px) {
    margin-top: 0;
  }
`;
