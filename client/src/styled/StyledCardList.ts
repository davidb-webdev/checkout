import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--spacing-default);

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  > * {
    /* padding: var(--spacing-half); */
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      border-radius: var(--radius-default);
    }
  }
`;

export default StyledCardList;
