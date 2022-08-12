import styled from "styled-components";
import { motion } from "framer-motion";

export const FormContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 59px 27px rgba(0, 0, 0, 0.1);
  height: 500px;
  width: 60%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    min-width: 90%;
    height: 400px;
    margin-top: 100px;
  }
`;

export const FormMain = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 80%;
  max-width: 400px;
  margin: 0 20px;

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

export const RegisterButton = styled(motion.button)`
  width: 100px;
  height: 50px;
  color: white;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px 20px;
  background-color: red;
  background: rgb(66, 217, 46);
  background: linear-gradient(
    332deg,
    rgba(51, 135, 40, 1) 0%,
    rgba(66, 217, 46, 1) 100%
  );
  font-weight: bold;
`;
