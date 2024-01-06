import styled from "styled-components";

export const CommunityContainer = styled.section`
  margin-bottom: 10rem;

  h2 {
    font-size: 36px;
    text-align: center;
    font-weight: 600;
  }

  @media (min-width: 1200px) {
    padding: 0 4rem;
  }
`;

export const FeedbacksItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
`;
export const FeedbackItemContainer = styled.div`
  margin-top: 4em;
  width: 80%;

  @media (min-width: 1000px) {
    /* width: 70%; */
  }
`;
export const FeedbackHeader = styled.div`
  display: flex;
  gap: 1rem;

  img {
    border-radius: 3rem;
  }
`;
export const FeedbackHeaderText = styled.div`
  h4 {
    font-size: 24px;
    font-weight: 600;
    color: #000;
  }

  span {
    font-size: 16px;
    color: #7f7d7d;
    font-weight: 300;
  }
`;
export const Stars = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.4rem;
`;
export const FeedbackItemBody = styled.div`
  img {
    width: 100%;
    margin: 1rem 0;
    border-radius: 10px;
  }

  @media (min-width: 1200px) {
    img {
      width: 90%;
    }

    p {
      width: 90%;
    }
  }
`;
export const FeedbackItemFooter = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Likes = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  p {
    font-size: 20px;
  }
`;
export const ShareButton = styled.button`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  background-color: transparent;

  p {
    font-size: 20px;
  }
`;
