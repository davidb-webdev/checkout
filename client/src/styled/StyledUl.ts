import styled from "styled-components";

const StyledUl = styled.ul`
  padding: 0;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-default);
    padding: var(--spacing-half) 0;
  }
`;

export default StyledUl;
