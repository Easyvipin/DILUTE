import Auth from "@components/Auth";
import { useLogInMutation, useSignUpMutation } from "./authSlice";

const AuthContainer = () => {
  const [signUp] = useSignUpMutation();
  const [logIn] = useLogInMutation();

  return (
    <div>
      <Auth type="signUp" onSignUp={signUp} onLogIn={logIn} />
    </div>
  );
};

export default AuthContainer;
