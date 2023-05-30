import { useState, useEffect } from "react";
import { UilGoogle } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilFacebookF } from '@iconscout/react-unicons'
import AOS from "aos";
import "aos/dist/aos.css";

import "./LoginPage.css";

const LoginPage = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <div data-aos="zoom-in" className="LoginPage">
      {/* <h2 className="login-header">CodePool Business Login</h2> */}
      <div
        className={`container-login ${isSignUpActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container-login sign-up-container">
          <form className="form-login" action="#">
            <h1 className="create-account">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social a-element">
                <i className="fab fa-facebook-f">
                  <UilFacebookF/>
                </i>
              </a>
              <a href="#" className="social a-element">
                <i className="fab fa-google-plus-g">
                  <UilGoogle/>
                </i>
              </a>
              <a href="#" className="social a-element">
                <i className="fab fa-linkedin-in">
                <UilLinkedin/>
                </i>
              </a>
            </div>
            <span className="span-element-login">or use your email for registration</span>
            <input className="input-login" type="text" placeholder="Name" />
            <input className="input-login" type="email" placeholder="Email" />
            <input className="input-login" type="password" placeholder="Password" />
            <button className="button-login">Register</button>
          </form>
        </div>
        <div className="form-container-login sign-in-container">
          <form className="form-login" action="#">
            <h1 className="create-account">Log in</h1>
            <div className="social-container">
              <a href="#" className="social a-element">
                <i className="fab fa-facebook-f">
                  <UilFacebookF/>
                </i>
              </a>
              <a href="#" className="social a-element">
                <i className="fab fa-google-plus-g">
                  <UilGoogle/>
                </i>
              </a>
              <a href="#" className="social a-element">
                <i className="fab fa-linkedin-in">
                <UilLinkedin/>
                </i>
              </a>
            </div>
            <span className="span-element-login">or use your account</span>
            <input className="input-login" type="email" placeholder="Email" />
            <input className="input-login" type="password" placeholder="Password" />
            <a className="a-element" href="#">Forgot your password?</a>
            <button className="button-login">Log In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="create-account">Welcome Back!</h1>
              <p className="p-element">
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost button-login" onClick={handleSignInClick}>
                Log In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="create-account">Hello, JobHunter</h1>
              {/* <h2 className="create-account">Register</h2> */}
              <p className="p-element">Enter your personal details and start the <br/>New journey with us</p>
              <button className="button-login ghost" onClick={handleSignUpClick}>
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
