import styled from "styled-components";

export const Container = styled.section`
  animation-duration: 0.5s;
  animation-name: slidein2;

  .icon {
    margin-top: 10%;
  }

  .custom-input {
    width: 100%;
  }

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

  background: rgb(121, 9, 98);
  background: linear-gradient(
    90deg,
    rgba(121, 9, 98, 0.2) 55%,
    rgba(106, 0, 255, 0.2) 93%
  );
  border-radius: 5px;
  box-shadow: -2px 5px 5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  padding: 20px;
  margin-left: 50%;
  width: 47%;

  .custom-flex {
    display: flex;
    width: 100%;
    div {
      width: 50%;
    }
  }
`;
