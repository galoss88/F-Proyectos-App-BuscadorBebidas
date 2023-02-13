import styled from "styled-components";

export const ContainerListaRecipes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin: 0 auto;

  justify-content: center;
  align-items: stretch;
  margin-top: 3rem;
  gap: 1.5rem;
  padding: 1rem 0.5rem;
  border: 0.5rem solid;
  border-image: linear-gradient(100deg, #8fd0a1, #0e1d12) 1;
`;
export const Overlay = styled.div`
  display: ${({ showmodal }) => (showmodal ? "flex" : "none")};
  position: fixed;
  background: rgb(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: white;
  width: 20vw;
  box-shadow: 0 0 1rem;
  .titulo {
    display: flex;
    font-weight: bold;
    justify-content: center;
  }
  
  
  @media(max-width:761px){
    width: 70%;
    height: 50%;
    margin-bottom: 50%;
  }
`;

export const ImgModal = styled.img`
  width: 100%;
  max-height: 60%;
  padding: 2px;
`;
export const Button = styled.button`
  border: none;

  height: 5rem;
  position: absolute;
  right: 3rem;
  top: 0.2rem;
  font-size: 2rem;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;
