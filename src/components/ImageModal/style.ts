import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalSection = styled.section`
  width: 100vw;
  height: 111vh;
  position: absolute;
  top: 0;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  figure {
    display: flex;
    justify-content: center;
  }
`;

export const ModalImage = styled(motion.img)`
  max-width: 90%;
  max-height: 800px;
  border-radius: 10px;
  border: 2px solid rgb(66, 217, 46);
`;
