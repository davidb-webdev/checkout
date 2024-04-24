import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-half);
	max-width: 400px;

  label {
		display: grid;
		line-height: 2;
	}
`;

export default StyledForm;
