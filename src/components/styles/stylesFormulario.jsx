import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  flex-direction: column;
  margin-top: 1.5rem;
`;
export const Fieldset = styled.fieldset`
  display: flex;
  text-align: center;
  border: none;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 2rem;
  @media (max-width: 761px) {
    flex-direction: column;
    gap: 1rem;
    width: 10rem;
    align-items: center;
  }
`;
export const Legend = styled.legend`
  font-weight: bold;
`;

export const Input = styled.input`
  display: flex;
  width: 25%;
  @media (max-width: 761px) {
    width: 100%;
  }
`;
export const Select = styled.select`
  width: 25%;
  @media (max-width: 761px) {
    width: 100%;
  }
`;
export const InputSubmit = styled.input`
  width: 20%;
  background-color: orange;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 761px) {
    width: 100%;
  }
`;
