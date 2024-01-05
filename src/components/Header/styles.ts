import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem 1rem 2rem 2rem;
  position: fixed;
  background-color: #fff;
  width: 100%;

  &.open {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 2rem 1rem 1.8rem;
    height: 100%;
  }
  
  .mobile-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 6rem;
  }
`;

export const Title = styled.h1`
  a {
    color: #046e1b;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  img {
    height: 1.6rem;
  }
`;

export const ButtonOpen = styled.button`
    background-color: transparent;
    border: none;

    @media (min-width: 900px) {
        display: none;
    }
`

export const Navigation = styled.nav`
display: none;

  &.open{
    display: flex;
  }
  ul.open {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 3rem;
  }

  li {
    list-style: none;
  }

  li a {
    font-size: 20px;
    font-weight: 500;
    color: #000;
  }

  @media (min-width: 900px) {
    display: flex;

    ul{
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
  }
`;

export const ContainerButtons = styled.div`

display: none;

    @media (min-width: 900px) {
       display: flex;
       gap: 1rem;
    }
    
    button{
        background-color: transparent;
        border: none;
    }
`