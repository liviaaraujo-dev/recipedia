import styled from "styled-components";
import aboutImg from "../../assets/images/about.png";

export const AboutUsContainer = styled.section`
  background: url(${aboutImg}) center/cover no-repeat;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 5rem 0;
  margin: 8rem 0;
  gap: 5rem;

  @media (min-width: 900px) {
    height: 35rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 12rem 0;
    padding: 0;
  }
`;

export const AboutUsBox = styled.section`
  background-color: #fff;
  width: 80%;
  padding: 2rem;
  border-radius: 20px;
  height: 55%;

  h2 {
    font-size: 34px;
    font-weight: 600;
    color: #000;
  }

  p {
    font-size: 18px;
    margin: 1.5rem 0;
  }
  @media (min-width: 900px) {
    margin-right: 5rem;
    width: 40%;
    padding: 2rem;
    border-radius: 20px;
    height: 60%;

    p {
      font-size: 20px;
    }
  }

  @media (min-width: 1200px) {
    height: 55%;
  }
`;

export const AboutUsCard = styled.section`
  width: 14rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 10px;

  background-color: #fff;

  p {
    color: #046e1b;
    font-weight: 500;
  }

  @media (min-width: 900px) {
    margin-left: 5rem;
  }
`;
