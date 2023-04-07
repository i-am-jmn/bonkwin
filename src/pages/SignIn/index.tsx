import { MouseEvent, useContext, useState } from "react";
import { signIn } from "../../utils/api";
import { Auth } from "../../contexts/Auth";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const authState = useContext(Auth);

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    if ((await signIn(email, password)) && authState) {
      authState[1](true);
    }
  };

  return (
    <>
      <h1>Se connecter</h1>
      <div>
        <div>
          <label htmlFor="emailInput">Email:</label>
          <input
            id="emailInput"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="passwordInput">Mot de passe:</label>
          <input
            id="passwordInput"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button onClick={handleSubmit}>Se connecter</button>
        <Link to="/sign-up">Créer un compte</Link>
      </div>
    </>
  );
};

export default SignIn;
