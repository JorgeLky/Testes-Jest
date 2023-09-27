import { memo } from "react";

import { Container } from "./styles";
import { Input, Button } from "antd";

const SignIn = memo(function SignIn() {
  return (
    <Container>
      <Input placeholder="email" />
      <Input className="margin-small-top" placeholder="senha" type="password" />
      <Button className="margin-small-top">Entrar</Button>
    </Container>
  );
});

export default SignIn;
