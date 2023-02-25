import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import loginImg from "../assets/images/join.svg";
import useAuth from "../hooks/useAuth";

const initialState = {
  username: "",
  email: "",
  password: "",
  msg: "",
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [load, setLoad] = useState(true);
  const [success, setSuccess] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // ================== event handlers ==================
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(false);
    const { username, email, password } = values;
    let response;
    try {
      response = await axios.post(
        "login route",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (error) {
      setLoad(true);
      return setValues({ ...values, msg: error.response.data.message });
    }
    setAuth({ user: response.data.data.user, token: response.data.token });
    setValues({ ...values, msg: "Sucess, redirecting..." });
    setSuccess(true);
  };

  // ================== navigate to home ==================
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 3000);
    }
  }, [success, navigate]);

  return (
    <div className="vh-100">
      <div className="container-fluid vh-100">
        <div className="row d-flex justify-content-center align-items-start mt-5 pt-5">
          {/* ================== image ================== */}
          <div className="col-5 d-inline-block flex-shrink-1">
            <img src={loginImg} className="img-fluid" alt="register image" />
          </div>
          {/* ================== form ================== */}
          <form className="col-5 offset-1 d-inline-block bg-light rounded">
            <div className="d-flex flex-column m-5 p-3 align-items-center">
              <h3>Login</h3>
              {/* ================== output response ================== */}
              {values.msg && (
                <div
                  className={`w-100 rounded p-2 text-white ${
                    values.msg === "Sucess, redirecting..."
                      ? "bg-success"
                      : "bg-danger"
                  }`}
                >
                  {values.msg}
                </div>
              )}

              {/* ================== email input ================== */}
              <input
                name="employeeID"
                type="text"
                value={values.email}
                onChange={handleChange}
                className="form-control m-2"
                autoComplete="off"
                placeholder="Employee ID"
              />
              {/* ================== password input ================== */}
              <input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                className="form-control m-2"
                autoComplete="off"
                placeholder="Password"
              />
              <br />
              {/* ================== Submit ================== */}
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={
                  load &&
                  ((values.isMember && values.email && values.password) ||
                    (!values.isMember &&
                      values.username &&
                      values.email &&
                      values.password &&
                      values.passwordConfirm))
                    ? false
                    : true
                }
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
