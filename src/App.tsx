import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./contexts/Auth";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import "./App.scss";
import { fetchUser } from "./utils/api";
import Publish from "./pages/Publish";

const App = () => {
  const authState = useState<boolean>(false);

  useEffect(() => {
    fetchUser().then((res) =>
      res !== null ? authState[1](true) : authState[1](false)
    );
  }, [authState]);

  return (
    <Auth.Provider value={authState}>
      {authState[0] && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="publish" element={<Publish />} />
          </Route>
        </Routes>
      )}
      {!authState[0] && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="" element={<SignIn />} />
            <Route path="*" element={<SignIn />} />
          </Route>
        </Routes>
      )}
    </Auth.Provider>
  );
};

export default App;
