import { memo } from "react";

import { Container } from "./styles";
import { Button, Input } from "antd";

const SignUp = memo(function SignUp() {
  return (
    <Container>
      <div className="custom-flex">
        <div className="input-box margin-small-right">
          <label>Nome</label>
          <Input />
        </div>
        <div className="input-box">
          <label>Sobrenome</label>
          <Input />
        </div>
      </div>
      <div className="margin-small-top custom-flex">
        <div className="input-box margin-small-right">
          <label>Email</label>
          <Input />
        </div>
        <div className="input-box">
          <label>Celular</label>
          <Input />
        </div>
      </div>
      <Button className="margin-small-top">Criar Conta</Button>
    </Container>
  );
});

export default SignUp;