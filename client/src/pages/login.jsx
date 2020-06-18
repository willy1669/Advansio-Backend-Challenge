import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import FormAlertMessage from "../components/formAlertMessage";
import { useSelector, useDispatch } from "react-redux";
import services from "../state/services/user";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const data = await services.login(values);
      if (data) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("id", data.data.id);
        history.push("/post");
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);

      const { response } = err;

      if (response && response.data && response.data.error) {
        let message = response.data.error;
        setErrorMessage(message);
      }
    }
  };

  return (
    <div className="container-fluid bg-light-grey min-vh-100">
      <div className="container">
        <div className="row justify-content-center p-md-5 p-2">
          <div className="col-md-5">
            <div className="text-center">
              <h4 className="text-black font-weight-bold">Welcome back!</h4>
              <div className="text-black small">
                <div className="pb-2">Please sign in</div>
              </div>
            </div>
            <div className="mt-5 mb-4 p-md-5 p-4 bg-form shadow rounded-10-px small">
              <form onSubmit={handleSubmit(onSubmit)} method="POST" noValidate>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      ref={register({
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "invalid email address",
                        },
                      })}
                      className={
                        errors.email
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <div className="invalid-feedback">
                      {errors.email && "A valid email address is required"}
                    </div>
                  </div>

                  <div className="form-group col-12">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      ref={register({ required: true })}
                      className={
                        errors.password
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <div className="invalid-feedback">
                      {errors.password && "Password is required"}
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="form-group col-12">
                      <FormAlertMessage message={errorMessage} />
                    </div>
                  )}

                  <div className="form-group col-12">
                    <div className="row justify-content-center py-3">
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block rounded-5-px d-flex justify-content-center align-items-center"
                        >
                          <div className="bg-compex-icon min-w-rem-unit min-h-rem-unit"></div>

                          {isLoading ? (
                            <span className="px-3 m-w-90 d-block">
                              <CircularProgress color="inherit" size={"1rem"} />
                            </span>
                          ) : (
                            <span
                              className="text-white pl-3 min-w-90"
                              style={{ fontFamily: "Roboto", fontWeight: 500 }}
                            >
                              Sign in to Twitee
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-between text-off-black font-size-below">
              <span>
                New to <strong>Twitee</strong>?{" "}
                <Link to="/" className="font-weight-bolder">
                  Sign up
                </Link>
              </span>
              <Link
                to="/forgot-password"
                className="text-off-black font-weight-bold"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
