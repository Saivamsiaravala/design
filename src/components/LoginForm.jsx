import React, { useState } from "react";
import facebook from "./../assets/facebook.png";
import google from "./../assets/google-plus.png";
import linkedin from "./../assets/linkedin.png";
import logo from "./../assets/andhragovtlogo.png";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="login">
      <div className="title">
        <img src={logo} alt="" />
        <div>Login to your Account</div>
      </div>
      <form>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="vamsi@abc.com" />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" />
        </div>
      </form>
      <br />
      OR
      <div className="ways">
        <div className="desc">Login using social networks</div>
        <div className="networks">
          <button>
            <img src={facebook} alt="" style={{ width: "30px" }} />
          </button>
          <button>
            <img src={google} alt="" style={{ width: "30px" }} />
          </button>
          <button>
            <img src={linkedin} alt="" style={{ width: "30px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
