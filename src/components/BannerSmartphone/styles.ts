import styled from "styled-components";

export const BannerSmartphoneContainer = styled.section`
  background-color: #046e1b;
  height: 44rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  padding: 2rem;
  margin-left: 1.5rem;

  h2 {
    font-weight: 600;
    color: #fff;
    font-size: 28px;
  }

  img.smart {
    height: 30%;
    align-self: flex-start;
    margin-top: 4rem;
  }

  @media (min-width: 700px) {
    text-align: center;
    align-items: center;
    height: 34rem;

    img.smart {
      height: 55%;
      align-self: center;
    }
  }

  @media (min-width: 900px) {
    margin-left: 2.5rem;
  }

  @media (min-width: 1200px) {
    height: 65vh;
    margin: 0 4rem;
    padding: 0 2rem;
    flex-direction: row;
    text-align: left;

    h2 {
      font-size: 46px;
    }
    img.smart {
      height: 70%;
      align-self: flex-end;
    }

    div.text {
      margin-left: 2rem;
    }
  }
`;

export const ButtonsShopContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    justify-content: flex-start;
    margin-top: 2rem;
  }
`;

export const ButtonShop = styled.button`
  background-color: #f79f1a;
  display: flex;
  gap: 1rem;
  color: #fff;
  height: 3.8rem;
  width: 11rem;
  margin-top: 1rem;
  align-items: center;
  padding: 0 1rem;
  border-radius: 10px;

  span {
    font-size: 14px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
  }
`;
