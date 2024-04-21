import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: var(--header-height);
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  padding: var(--spacing-default);
  border-radius: var(--radius-default);

  a {
    color: var(--color-text-secondary);

    &:hover {
      color: var(--color-accent);
    }
  }
`;

export default StyledModal;
