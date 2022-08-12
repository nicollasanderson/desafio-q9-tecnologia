import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCard = styled(motion.div)`
  figure {
    img {
      max-width: 300px;
      min-width: 150px;
      min-height: 200px;
      max-height: 300px;
      margin: 10px;
      cursor: pointer;
      border-radius: 5px;
      border: 1px solid rgb(66, 217, 46);
    }
  }
`;
