import { MouseEvent, useState } from "react";
import { signUp } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    const response = await signUp(email, firstName, lastName, password);
    if (response) {
      navigate("/");
    }
  };

  return (
    <>
      <h1>Créer un compte</h1>
      <div>
        <div>
          <label htmlFor="firstNameInput">Prénom:</label>
          <input
            id="firstNameInput"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <label htmlFor="lastNameInput">Nom:</label>
          <input
            id="lastNameInput"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
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
        <button onClick={handleSubmit}>Créer un compte</button>
      </div>
    </>
  );
};

export default SignIn;
