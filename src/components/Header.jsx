import React, { useState } from "react";
import logo from "./../assets/andhragovtlogo.png";
import Modal from "./Modal";
import ReactDOM from "react-dom";

function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header>
      <h1>Andhra Pradesh</h1>
      <img src={logo} alt="" />
      <div className="login">
        <button className="login-btn" onClick={() => setShowLogin(true)}>
          Login
        </button>
        {showLogin &&
          ReactDOM.createPortal(
            <Modal setShowLogin={setShowLogin} showLogin={showLogin} />,
            document.getElementById("modal-root")
          )}
      </div>
    </header>
  );
}

export default Header;
