import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: var(--header-height);
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  padding: var(--spacing-default);
  padding-bottom: calc(var(--spacing-default) + 2rem);
  border-radius: var(--radius-default);

  a {
    color: var(--color-text-secondary);

    &:hover {
      color: var(--color-accent);
    }
  }

  > .closeModalButton {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    border-radius: 0;
  }
`;

export default StyledModal;
