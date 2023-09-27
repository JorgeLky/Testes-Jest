import styled from "styled-components";

export const Container = styled.section`
  animation-duration: 0.5s;
  animation-name: slidein1;

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
  

  background-color: var(--lightPink);
  border-radius: 5px;
  box-shadow: 2px 5px 5px black;
  height: 500px;
  padding: 20px;
  width: 47%;
`;
