import styled from "styled-components";

const StyledPageHeader = styled.header`
  width: 100%;
  height: var(--header-height);
  padding: var(--spacing-default);
  background-color: var(--color-bg-secondary);
  display: flex;
  gap: var(--spacing-default);
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: var(--z-above);
  color: var(--color-text-secondary);

  > div {
    display: flex;
    gap: var(--spacing-default);
  }

  a {
    color: var(--color-text-secondary);

    &:hover {
      color: var(--color-accent);
    }
  }
`;

export default StyledPageHeader;
