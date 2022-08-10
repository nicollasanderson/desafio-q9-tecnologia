import styled from "styled-components";

export const HeaderMain = styled.header`
  background: rgb(66, 217, 46);
  background: linear-gradient(
    332deg,
    rgba(66, 217, 46, 1) 0%,
    rgba(51, 135, 40, 1) 100%
  );
  height: 100px;
  width: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  a {
    margin: 0 15px;
    font-size: 28px;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  > div {
    height: 100%;
    margin: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      gap: 15px;

      h1 {
        color: white;
      }
      > svg {
        width: 50px;
        height: 50px;
        color: white;
      }
    }
  }

  @media (max-width: 800px) {
  }
`;
