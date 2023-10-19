import { memo } from "react";

import { Container } from "./styles";
import { Input, Button } from "antd";

import { CiLogin } from "react-icons/ci";

const SignIn = memo(function SignIn() {
  return (
    <Container>
      <div className="body-form">
        <CiLogin size={100} className="icon" />
        <Input placeholder="email" className="input" />
        <Input
          className="margin-small-top"
          placeholder="senha"
          type="password"
        />
        <Button className="margin-small-top">Entrar</Button>
      </div>
    </Container>
  );
});

export default SignIn;
