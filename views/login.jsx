import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="/css/login/styles.css" />

      <img
        className="logo-image-login"
        src="/css/login/images/logo-image.png"
        alt="Organic.in logo"
      />

      <img
        className="login-image"
        src="/css/login/images/login-image.svg"
        alt="Organic.in login image"
      />

      <div className="login-container">
        <h2 className="title">Sign in</h2>
        <form
          className="login-form"
          action="/login"
          method="post"
          name="login"
          id="login"
        >
          <div className="input-field-1">
          <FontAwesomeIcon className="envelope" icon={faEnvelope} />
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="input-field-2">
          <FontAwesomeIcon className="lock" icon={faLock} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
            />
          </div>

          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>

      <div className="new-here">
        <h3>New Here?</h3>
        <p>Create your account by filling out the form with your email and</p>
        <p>secure password to unlock all the features of our website.</p>

          <form action="/signup" type="submit">
            <button>Sign Up</button>
          </form>
          
        
      </div>
    </div>
  );
}

export default Login;
