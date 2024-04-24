import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: var(--header-height);
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  padding: var(--spacing-default);
  border-radius: 0 0 var(--radius-default) var(--radius-default);

  a {
    color: var(--color-text-secondary);

    &:hover {
      color: var(--color-accent);
    }
  }

  > .closeModalButton {
    position: absolute;
    top: var(--spacing-half);
    right: var(--spacing-half);
  }
`;

export default StyledModal;
