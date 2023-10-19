import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  header {
    margin-top: 1%;
    height: 30px;
    color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    span:hover {
      background-color: #FFFFFF;
      padding: 7px;
      border-radius: 20px;
    }
  }

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
