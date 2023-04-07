import { NavLink } from "react-router-dom";

import "./Header.scss";
import { signOut } from "../../utils/api";
import { Auth } from "../../contexts/Auth";
import { useContext } from "react";

const Header = () => {
  const authState = useContext(Auth);

  const handleSignOut = () => {
    signOut();
    if (authState) authState[1](false);
  };

  return (
    <div id="header">
      <div className="container">
        <div className="left">
          <h1>Bonkwin</h1>
        </div>
        <div className="right">
          <NavLink to="/">Accueil</NavLink>
          {authState && authState[0] && (
            <button onClick={handleSignOut}>Se déconnecter</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
