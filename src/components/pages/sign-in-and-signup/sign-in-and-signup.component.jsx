import React from "react";
import SignIn from "../../sign-in/sign-in.component.jsx";
import SignUp from "../../sign-up/sign-up.component";

import "./sign-in-and-signup.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
