import React, { useEffect } from "react";
import { SplitContent } from "../components/Styles/StyledComponents";
import AuthForm from "../Forms/AuthForm";

export default () => {
  return (
    <SplitContent horizontal>
      <div
        style={{ backgroundColor: "rgba(255,255,255,0.2)", height: "100%" }}
      />
      <AuthForm />
    </SplitContent>
  );
};
