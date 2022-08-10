import styled from "styled-components";

export const FormContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 59px 27px rgba(0, 0, 0, 0.1);
  height: 300px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormMain = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 80%;

  input {
    width: 100%;
    margin: 15px 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    height: 40px;
    padding-left: 10px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

interface LabelProps {
  errColor: boolean;
  children?: any;
}

export const StyledLabel = styled.label<LabelProps>`
  color: ${(p) => (p.errColor ? "red" : "black")};
  font-weight: bold;
  text-align: left;
  width: 100%;
`;
