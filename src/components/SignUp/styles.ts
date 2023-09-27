import styled from "styled-components";

export const Container = styled.section`
  animation-duration: 0.5s;
  animation-name: slidein2;

  @keyframes slidein2 {
    from {
      margin-left: 0%;
      width: 50%;
    }

    to {
      margin-left: 50%;
      width: 47%;
    }
  }

  background-color: var(--lightPink);
  border-radius: 5px;
  box-shadow: -2px 5px 5px black;
  height: 500px;
  padding: 20px;
  margin-left: 50%;
  width: 47%;

  .custom-flex {
    display: flex;
  }

  .input-box {
    width: 50%;
  }
`;
