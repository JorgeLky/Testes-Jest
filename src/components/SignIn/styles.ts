import styled from "styled-components";

export const Container = styled.section`
  animation-duration: 0.5s;
  animation-name: slidein1;

  .body-form {
    width: 95%;
    height: 95%;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 5px;
  }

  .icon {
    margin-top: 10%;
  }

  @keyframes slidein1 {
    from {
      margin-left: 50%;
      width: 47%;
    }

    to {
      margin-left: 0%;
      width: 47%;
    }
  }

  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.2) 0%,
    rgba(121, 9, 98, 0.2) 100%,
    rgba(132, 0, 255, 0.2) 100%
  );
  border-radius: 5px;
  box-shadow: 2px 5px 5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  padding: 20px;
  width: 47%;
`;
