import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Login from "../../components/login";
import Main from "../../components/main";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));

  const logout = () => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
  }  

  const onLogin = () => {
    const loader = document.getElementById("loader");
    const main = document.getElementById("main");

    main.setAttribute("hidden", "hidden");
    loader.removeAttribute("hidden");

    setTimeout(() => {
      localStorage.setItem("token", "some random token from BE");
      setIsLoggedIn(true);
      loader.setAttribute("hidden", "hidden");
      main.removeAttribute("hidden");
    }, 3000);
  };

  if (!isLoggedIn) {
    return <Login onLogin={onLogin} />;
  }

  return (
    <>
      <Header logout={logout} />
      <Main />
      <Footer />
    </>
  );
}

export default App;