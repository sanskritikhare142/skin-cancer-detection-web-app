import { navigate } from "@reach/router";
import Doctor from "../assets/img/doctor";
import "../assets/style/login.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { postSignup } from "../utils/api";
import { signupSchema } from "../utils/schemas";
import { Formik, Form, Field } from "formik";

export default function () {
  let initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const submitHandler = async (values: any) => {
    try {
      var formData = new FormData();
      let user = {
        email: values.email,
        password: values.password,
        confirmPassword: values.confPw,
      };
      Object.entries({ ...user }).forEach(([key, value]) => {
        formData.append(key, value);
      });
      console.log(formData);
      const res = await postSignup(formData);
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
                    <h1 className="display-4 heading1 ">SIGN UP</h1>
                  </div>

                  <p className="text-muted text-center mb-4">
                    Empowering you to maintain your skin health. An approach to
                    detecting skin cancer. Check and Protect!
                  </p>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => submitHandler(values)}
                    validationSchema={signupSchema}
                  >
                    {({ errors }) => (
                      <Form>
                        <div className="form-group mb-3">
                          <Field
                            id="inputEmail"
                            type="email"
                            name="email"
                            placeholder="Email address"
                            className="form-control input-field "
                          />
                          {errors.email && (
                            <div className="text-danger mb-3">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group mb-3">
                          <Field
                            id="inputPassword"
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control input-field "
                          />
                          {errors.password && (
                            <div className="text-danger">{errors.password}</div>
                          )}
                        </div>
                        <div className="form-group mb-3">
                          <Field
                            id="inputPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="form-control input-field "
                          />
                          {errors.confirmPassword && (
                            <div className="text-danger">
                              {errors.confirmPassword}
                            </div>
                          )}
                        </div>
                        <div className="row d-flex justify-content-center mt-4">
                          <button
                            type="submit"
                            className="button btn-primary col-5"
                          >
                            Signup
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                  <div className="row text-muted d-flex justify-content-center mt-4">
                    <p>
                      Already have an account?
                      <a href="/login">
                        <u>Login</u>
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
