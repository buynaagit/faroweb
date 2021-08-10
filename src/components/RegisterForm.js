import React from "react";

import axios from "axios";
import { URL } from "../utils/appConstant";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
  const history = useHistory();
  const [Email, setEmail] = React.useState("");
  const [passwordAdmin, setPasswordAdmin] = React.useState("");
  const [nameAdmin, setNameAdmin] = React.useState("");
  const [usernameAdmin, setUsernameAdmin] = React.useState("");

  const backBtn = () => {
    history.push("/Admin");
  };

  const Register = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log(`button Pressed`);
    axios
      .post(
        `${URL}/api/register/`,
        {
          username: usernameAdmin,
          password: passwordAdmin,
          name: nameAdmin,
          email: Email,
        },
        config
      )
      .then(function (response) {
        console.log(`response`, response.data);
        localStorage.setItem("token", response.data.token);
        history.push("/Admin");
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
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Register</h2>
                <form className="login-form sign-in-form">
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Email</label>
                    <input
                      type="text"
                      value={Email}
                      placeholder="Email Adress"
                      onChange={(e) => setEmail(e.target.value)}
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
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Username</label>
                    <input
                      value={usernameAdmin}
                      type="text"
                      placeholder="Enter your username"
                      onChange={(e) => setUsernameAdmin(e.target.value)}
                    />
                  </div>
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Name</label>
                    <input
                      value={nameAdmin}
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => setNameAdmin(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      onClick={Register}
                      type="submit"
                      className="btn_three"
                    >
                      Register
                    </button>
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
export default RegisterForm;
