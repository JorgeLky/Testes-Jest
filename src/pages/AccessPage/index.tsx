"use client";
import * as React from "react";

import { Container } from "./styles";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

const AccessPage = React.memo(function AccessPage() {
  const [signIn, setSignIn] = React.useState(true);

  return (
    <Container>
      {signIn ? <SignIn /> : <SignUp />}
      <span className="custom-link margin-small-top" onClick={() => setSignIn((prv) => !prv)}>
        {signIn ? "Criar conta" : "Já possuo conta"}
      </span>
    </Container>
  );
});

export default AccessPage;
