import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
`;

export const StyledSearchBar = styled.div`
  width: 70%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 850px) {
    flex-flow: wrap;
    width: 300px;
  }
`;

export const StyledDogList = styled.div`
  width: 80%;
  height: 700px;
  display: flex;
  flex-flow: wrap;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

interface IButton {
  children?: any;
}

export const BreedButton = styled(motion.button)<IButton>`
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
