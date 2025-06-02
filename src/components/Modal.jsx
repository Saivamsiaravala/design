import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
function Modal({ setShowLogin, showLogin }) {
  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLogin]);
  return (
    <div className="modal-overlay" onClick={() => setShowLogin(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <LoginForm />
        <button onClick={() => setShowLogin(false)} className="btn">
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
