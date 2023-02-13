import styled from "styled-components";
export const CardRecipe = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  box-shadow: 0 0 0.4rem;
  justify-content: space-between;
  
  :hover {
    box-shadow: 0 0 2rem green;
    transition: box-shadow .2s ease-in-out;
  }
`;
export const ImgRecipe = styled.img``;
export const ButtonVerImagen = styled.button`
  background-color: #043a13;
  color: white;
  border: none;
  padding: .6rem;
  
  :hover{
    cursor: pointer;
    background-color: #327a47;
  }
`;

