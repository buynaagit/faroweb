import React from "react";

import axios from "axios";
import { URL } from "../utils/appConstant";
import { useHistory, Link } from "react-router-dom";

const SignInFrom = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [passwordAdmin, setPasswordAdmin] = React.useState("");

  const backBtn = () => {
    history.push("/Landing");
  };

  const signIn = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log(`button Pressed`);
    axios
      .post(
        `${URL}/api/login/`,
        {
          username: username,
          password: passwordAdmin,
        },
        config
      )
      .then(function (response) {
        console.log(`response`, response.data);
        localStorage.setItem("token", response.data.token);
        history.push("/NewsDashboard");
      })
      .catch(function (error) {
        console.log(`error`, error.response);
      });
  };

  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <button onClick={backBtn} type="submit" className="btn_three">
            Back to home
          </button>
        </div>
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-7">
              <div className="login_info">
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign In</h2>
                <form className="login-form sign-in-form">
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Username</label>
                    <input
                      type="text"
                      value={username}
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Password</label>
                    <input
                      value={passwordAdmin}
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPasswordAdmin(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      onClick={signIn}
                      type="submit"
                      className="btn_three"
                    >
                      Sign in
                    </button>
                    <Link to="/AdminRegister">Register</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignInFrom;
