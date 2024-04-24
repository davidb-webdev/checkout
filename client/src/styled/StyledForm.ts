import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-half);
	max-width: 400px;

  label {
		display: grid;
		line-height: 2;

		&:has([type=radio], [type=checkbox]) {
			grid-template-columns: auto 1fr;
			gap: var(--spacing-half);
		}
	}
`;

export default StyledForm;
