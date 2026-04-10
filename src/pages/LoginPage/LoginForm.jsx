import React, { useState } from "react";

function LoginForm() {
  return (
    <div className="login-form">
      <h1>Sing in</h1>
      <input type="email" placeholder="email" required />
      <input type="password" placeholder="password" />
      <button className="long-button">Sign In</button>
      <div className="remeber">
        <div>
          <input type="checkbox" id="remeber" />
          <label htmlFor="remeber">Remeber me</label>
        </div>

        <a href="" className="need-help">
          need help?
        </a>
      </div>

      <p className="last-paragrapgh">
        new to Netflix? <strong>sign up now</strong>
      </p>
      <p>
        this page is protected by google reCHAPTCHA to <br /> insure you arn't a
        bot . <a href="">learn more</a>
      </p>
    </div>
  );
}

export default LoginForm;
