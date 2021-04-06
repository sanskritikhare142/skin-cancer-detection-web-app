import Doctor from "../assets/img/doctor";
import "../assets/style/login.css";
export default function () {
  return (
    <>
      <div className="wrapper">
        <div className="row split-screen-modal">
          <div className="col-md-6 sm-12">
            <div className="login container d-flex align-items-center py-5">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <div className="row justify-content-center pb-3">
                    <h1 className="display-4 heading1 ">SIGN UP</h1>
                  </div>

                  <p className="text-muted text-center mb-4">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text, or lipsum as it is sometimes known
                  </p>
                  <form>
                    <div className="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email address"
                        className="form-control input-field "
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        className="form-control input-field "
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="form-control input-field "
                      />
                    </div>
                    <div className="row d-flex justify-content-center mt-4">
                      <button
                        type="submit"
                        className="button btn-primary col-5"
                      >
                        Signup
                      </button>
                    </div>
                    <div className="row text-muted d-flex justify-content-center mt-4">
                      <p>
                        Already have an account?
                        <a href="/login">
                          <u>Login</u>
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
