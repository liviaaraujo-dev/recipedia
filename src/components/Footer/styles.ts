import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 0 4rem 0;
  margin-top: 6rem;
  width: 90%;
  margin-left: 2rem;

  border-top: 2px solid #e3d5c5;

  @media (min-width: 700px) {
    padding: 3rem 0 4rem 0;
    margin-top: 7rem;
    margin-left: 4rem;
    gap: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  a {
    color: #046e1b;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: 700;
  }

  img {
    height: 1.6rem;
  }

  @media (min-width: 900px) {
    a {
      font-size: 24px;
    }
  }
`;

export const TextContainer = styled.div`
  p {
    color: #7f7d7d;
  }
`;

export const LinksContactsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
