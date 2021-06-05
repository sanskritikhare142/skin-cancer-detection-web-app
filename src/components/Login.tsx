import { navigate } from "@reach/router";
import { useState } from "react";
import Doctor from "../assets/img/doctor";
import "../assets/style/login.css";
import { postLogin } from "../utils/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { loginSchema } from "../utils/schemas";
import { Formik, Form, Field } from "formik";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const submitHandler = async (values: any) => {
    try {
      var formData = new FormData();
      let user = {
        email: values.email,
        password: values.password,
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
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => submitHandler(values)}
                    validationSchema={loginSchema}
                  >
                    {({ errors }) => (
                      <Form>
                        <div className="form-group mb-2">
                          <Field
                            id="inputEmail"
                            type="email"
                            placeholder="Email address"
                            className="form-control input-field "
                            name="email"
                          />
                        </div>
                        {errors.email && (
                          <div className="text-danger mt-0 mb-3">
                            {errors.email}
                          </div>
                        )}
                        <div className="form-group mb-2">
                          <Field
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            className="form-control input-field "
                            name="password"
                          />
                        </div>
                        {errors.password && (
                          <div className="text-danger mt- mb-3">
                            {errors.password}
                          </div>
                        )}
                        <div className="row d-flex justify-content-center mt-4">
                          <button
                            type="submit"
                            className="button btn-primary col-5"
                          >
                            Login
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                  <div className="row text-muted d-flex justify-content-center mt-4">
                    <p>
                      Don't have an account?
                      <a href="/signup" className="">
                        <u>Sign up</u>
                      </a>
                    </p>
                  </div>
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
