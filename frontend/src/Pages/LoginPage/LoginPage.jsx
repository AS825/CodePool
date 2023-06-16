import { useState, useEffect, useRef } from "react";
import { UilGoogle } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const LoginformRef = useRef(null);
  const RegisterformRef = useRef(null);
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [logError, setLogError] = useState(null);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const clearEmailAndPasswords = () => {
    RegisterformRef.current.elements.email.value = "";
    setPassword("");
    setRetypePassword("");
  };

  const handleRegistration = (event) => {
    event.preventDefault();

    // Form validation
    const form = RegisterformRef.current;
    const { username, email, password } = form.elements;

    if (!username.value || !email.value || !password.value) {
      setError("Please fill in all the fields.");
      return;
    }

    // Get the form data
    const data = new FormData(RegisterformRef.current);

    // Convert the form data to a JSON object
    const jsonData = JSON.stringify(Object.fromEntries(data));

    // Log the JSON object to the console

    // Post to endpoint
    axios
      .post("http://localhost:8080/api/v1/auth/register", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        localStorage.setItem(
          "access_token",
          "Bearer " + response.data.access_token
        );
        RegisterformRef.current.reset();
        // console.log(response);
        localStorage.setItem("username", response.data.username);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
        setError("Email already exists");
        clearEmailAndPasswords();
      });
  };


  const handleAuthentification = (event) => {
    event.preventDefault();

    // Form validation
    const form = LoginformRef.current;
    const { email, password } = form.elements;

    if (!email.value || !password.value) {
      setLogError("Please fill in all the fields.");
      return;
    }

    // Get the form data
    const data = new FormData(LoginformRef.current);

    // Convert the form data to a JSON object
    const jsonData = JSON.stringify(Object.fromEntries(data));

    // Log the JSON object to the console

    // Post to endpoint
    axios
      .post("http://localhost:8080/api/v1/auth/authenticate", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        localStorage.setItem(
          "access_token",
          "Bearer " + response.data.access_token
        );
        LoginformRef.current.reset();
        localStorage.setItem("username", response.data.username);
        window.location.href = "/students";
      })
      .catch((error) => {
        console.error(error);
        setLogError("Wrong password or Email");
        LoginformRef.current.reset();
      });
  };

  return (
    <div data-aos="zoom-in" className="LoginPage">
      {/* <h2 className="login-header">CodePool Business Login</h2> */}
      <div
        className={`container-login ${
          isSignUpActive ? "right-panel-active" : ""
        }`}
      >
        <div className="form-container-login sign-up-container">
        <form
              className="form-login"
              ref={RegisterformRef}
              onSubmit={handleRegistration}
            >
              <h1 className="create-account">Create Account</h1>
              <div className="social-container">
                <a href="#" className="social a-element">
                  <i className="fab fa-facebook-f">
                    <UilFacebookF />
                  </i>
                </a>
                <a href="#" className="social a-element">
                  <i className="fab fa-google-plus-g">
                    <UilGoogle />
                  </i>
                </a>
                <a href="#" className="social a-element">
                  <i className="fab fa-linkedin-in">
                    <UilLinkedin />
                  </i>
                </a>
              </div>
              <span className="span-element-login">
                {error ? (
                  <span style={{ color: "red" }}>{error}</span>
                ) : (
                  "or use your email for registration"
                )}
              </span>
              <input
                className="input-login"
                type="text"
                placeholder="Username"
                name="username"
              />

              <input
                className="input-login"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="input-login"
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                className="input-login"
                type="password"
                placeholder="Retype Password"
                value={retypePassword}
                onChange={(e) => {
                  setRetypePassword(e.target.value);
                }}
       
              />
              <button className="button-login" type="submit">
                Register
              </button>
            </form>
        </div>
        <div className="form-container-login sign-in-container">
        <form
              ref={LoginformRef}
              className="form-login"
              onSubmit={handleAuthentification}
            >
              <h1 className="create-account">Log in</h1>
              <div className="social-container">
                <a href="#" className="social a-element">
                  <i className="fab fa-facebook-f">
                    <UilFacebookF />
                  </i>
                </a>
                <a href="#" className="social a-element">
                  <i className="fab fa-google-plus-g">
                    <UilGoogle />
                  </i>
                </a>
                <a href="#" className="social a-element">
                  <i className="fab fa-linkedin-in">
                    <UilLinkedin />
                  </i>
                </a>
              </div>
              <span className="span-element-login">
                {logError ? (
                  <span style={{ color: "red" }}>{logError}</span>
                ) : (
                  "or use your account"
                )}
              </span>
              <input
             className="input-login login"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
              className="input-login login"
                type="password"
                placeholder="Password"
                name="password"
              />
              <a className="a-element" href="#">
                Forgot your password?
              </a>
              <button className="button-login login" type="submit">
                Log In
              </button>
            </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="create-account">Welcome Back!</h1>
              <p className="p-element">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost button-login"
                onClick={handleSignInClick}
              >
                Log In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="create-account">Hello, JobHunter</h1>
              {/* <h2 className="create-account">Register</h2> */}
              <p className="p-element">
                Enter your personal details and start the <br />
                New journey with us
              </p>
              <button
                className="button-login ghost"
                onClick={handleSignUpClick}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
