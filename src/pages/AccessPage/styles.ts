import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  .submit-button,
  .custom-link {
    align-self: center;
    justify-self: center;
  }
  .custom-link:hover {
    cursor: pointer;
    color: var(--darkBlue);
    text-decoration: underline;
  }
`;
