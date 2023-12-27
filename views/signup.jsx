import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function signup() {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="/css/signup/styles.css" />

      <img
        className="logo-image-signup"
        src="/css/signup/images/logo-image.png"
        alt="Organic.in logo"
      />

      <img
        className="signup-image"
        src="/css/signup/images/signup-image.svg"
        alt="Organic.in signup image"
      />

      <div className="signup-container">
        <h2 className="title">Sign Up</h2>
        <form className="signup-form" action="/signup" method="POST" name="signup">
          <div className="input-field-2">
            <FontAwesomeIcon className="heart" icon={faHeart} />
            <input type="text" name="name" placeholder="Name" required />
          </div>

          <div className="input-field-2">
            <FontAwesomeIcon className="envelope" icon={faEnvelope} />
            <input type="email" name="email" placeholder="Email" required />
          </div>

          <div className="input-field-2">
            <FontAwesomeIcon className="lock" icon={faLock} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <button className="signup-button" type="submit">
            sign up
          </button>
        </form>
      </div>

      <div className="already-user">
        <h3>Already a user?</h3>
        <p>
          Log in to your account by entering your registered email and password
        </p>
        <p>to access your profile and personalized content.</p>

        <form method="get" action="/login">
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default signup;
