import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  height: 85vh;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 800px) {
    figure {
      display: none;
    }
  }
`;
