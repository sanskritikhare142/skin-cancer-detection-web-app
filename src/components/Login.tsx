import { navigate } from "@reach/router";
import React, { useState } from "react";
import Doctor from "../assets/img/doctor";
import "../assets/style/login.css";
import { postLogin } from "../utils/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submitHandler = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      var formData = new FormData();
      let user = {
        email: email,
        password: password,
      };
      Object.entries({ ...user }).forEach(([key, value]) => {
        formData.append(key, value);
      });
      console.log(formData);
      const res = await postLogin(formData);
      console.log("Hi", res);
      if (res) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="wrapper">
        <ToastContainer />
        <div className="row split-screen-modal">
          <div className="col-md-6 sm-12">
            <div className="login container d-flex align-items-center py-5">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <div className="row justify-content-center pb-3">
                    <h1 className="display-4 heading1 ">LOGIN</h1>
                  </div>

                  <p className="text-muted text-center mb-4">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                  <form>
                    <div className="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email address"
                        className="form-control input-field "
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        className="form-control input-field "
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="row d-flex justify-content-center mt-4">
                      <button
                        type="submit"
                        className="button btn-primary col-5"
                        onClick={submitHandler}
                      >
                        Login
                      </button>
                    </div>
                    <div className="row text-muted d-flex justify-content-center mt-4">
                      <p>
                        Don't have an account?
                        <a href="/signup" className="">
                          <u>Sign up</u>
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 left-panel">
            <div className="login container ml-5 d-flex align-items-center">
              <Doctor />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
