"use client";
import * as React from "react";

import { Container } from "./styles";
import { Button } from "antd";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

const AccessPage = React.memo(function AccessPage() {
  const [signIn, setSignIn] = React.useState(true);

  return (
    <Container>
      <header>
        <span className="custom-link">Home</span>
        <span className="custom-link">Últimas atualizações</span>
        <span className="custom-link">Sobre</span>
        <span className="custom-link">Contato</span>
      </header>
      <div>
        <hr />
      </div>
      {signIn ? <SignIn /> : <SignUp />}
      <div className="custom-link">
        <Button
          className="margin-small-top"
          onClick={() => setSignIn((prv) => !prv)}
        >
          {signIn ? "Criar conta" : "Já possuo conta"}
        </Button>
      </div>
    </Container>
  );
});

export default AccessPage;
