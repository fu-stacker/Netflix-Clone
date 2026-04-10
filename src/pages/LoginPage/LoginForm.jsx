import React, { useState } from "react";

function LoginForm({ finallogin }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlebuttonclick = () => {
    if (email == "" || password == "") {
      alert("pls fill the form first");
      return;
    }
    alert("wellcome to netflix home page");
    finallogin();
  };
  return (
    <div className="login-form">
      <h1>Sign in</h1>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button className="long-button" onClick={() => handlebuttonclick()}>
        Sign In
      </button>
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
