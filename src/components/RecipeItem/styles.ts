import styled from "styled-components";

export const RecipeItemContainer = styled.div`
  width: 70%;
  border-radius: 10px;

  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  @media(min-width: 700px){
    width: 80%;
    margin-top: 2rem;
  }

  @media (min-width: 900px) {
    margin-top: 4rem;
    
  }

  @media (min-width: 1300px) {
    margin-top: 2rem;

    img{
      height: 14rem;

    }
  }
`;

export const RecipeData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0.4rem;
`;

export const DataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  p {
    color: #046e1b;
  }
`;

export const BottomContainer = styled.div`
  margin-top: 1rem;

  h3 {
    font-size: 32px;
    font-weight: 600;
    color: #000;
  }

  a {
    color: #f79f1a;
    text-decoration: underline;
  }
`;
