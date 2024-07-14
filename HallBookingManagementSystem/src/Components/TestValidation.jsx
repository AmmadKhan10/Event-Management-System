import { useState } from "react";
import axios from "axios";

function TestValidation() {
  const [isSignUpShown, setIsSignUpShown] = useState(false);
  const [isLoginShown, setIsLoginShown] = useState(false);

  const [signUpForm, setSignUpForm] = useState({
    FullName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Phone: "",
    Address: ""
  });

  const [loginForm, setLoginForm] = useState({
    Email: "",
    Password: ""
  });

  const [signUpErrors, setSignUpErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});

  const handleSignUpClick = () => {
    setIsSignUpShown(true);
    setIsLoginShown(false);
  };

  const handleLoginClick = () => {
    setIsSignUpShown(false);
    setIsLoginShown(true);
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateSignUpForm = () => {
    const errors = {};
    if (!signUpForm.FullName) errors.FullName = "Full Name is required";
    if (!signUpForm.Email) errors.Email = "Email is required";
    else if (!validateEmail(signUpForm.Email)) errors.Email = "Invalid email address";
    if (!signUpForm.Password) errors.Password = "Password is required";
    if (signUpForm.Password !== signUpForm.ConfirmPassword)
      errors.ConfirmPassword = "Passwords do not match";
    if (!signUpForm.Phone) errors.Phone = "Phone number is required";
    if (!signUpForm.Address) errors.Address = "Address is required";
    return errors;
  };

  const validateLoginForm = () => {
    const errors = {};
    if (!loginForm.Email) errors.Email = "Email is required";
    else if (!validateEmail(loginForm.Email)) errors.Email = "Invalid email address";
    if (!loginForm.Password) errors.Password = "Password is required";
    return errors;
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const errors = validateSignUpForm();
    if (Object.keys(errors).length === 0) {
      // Submit form data to server
      console.log("Sign-up data submitted", signUpForm);
    } else {
      setSignUpErrors(errors);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const errors = validateLoginForm();
    if (Object.keys(errors).length === 0) {
      // Submit form data to server
      console.log("Login data submitted", loginForm);
    } else {
      setLoginErrors(errors);
    }
  };

  return (
    <>
      <div className="Main-page">
        <div className="heading">
          <div className="Header-left">
            <img src="/EMS-logo.jpg" alt="" />
            <h1 className="Main-heading">EVENT MANAGEMENT SYSTEM</h1>
          </div>
          <div className="Header-right">
            <button onClick={handleSignUpClick} className="SignUp-Button">
              SignUp
            </button>
            <button onClick={handleLoginClick} className="Login-Button">
              LogIn
            </button>
          </div>
        </div>

        {isSignUpShown && (
          <div className="SignupForm">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUpSubmit}>
              <div className="fileds">
                <label>
                  <i className="fa-solid fa-user"></i>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your FullName"
                  className="inputs input1"
                  name="FullName"
                  value={signUpForm.FullName}
                  onChange={handleSignUpChange}
                />
                {signUpErrors.FullName && <span className="error">{signUpErrors.FullName}</span>}
              </div>

              <div className="fileds">
                <label>
                  <i className="fa-solid fa-envelope"></i>
                </label>
                <input
                  type="text"
                  name="Email"
                  placeholder="Enter Your Email"
                  className="inputs input2"
                  value={signUpForm.Email}
                  onChange={handleSignUpChange}
                />
                {signUpErrors.Email && <span className="error">{signUpErrors.Email}</span>}
              </div>

              <div className="fileds">
                <label>
                  <i className="fa-solid fa-lock"></i>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="inputs input3"
                  name="Password"
                  value={signUpForm.Password}
                  onChange={handleSignUpChange}
                />
                {signUpErrors.Password && <span className="error">{signUpErrors.Password}</span>}
              </div>
              <div className="fileds">
                <label>
                  <i className="fa-solid fa-lock"></i>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="inputs input4"
                  name="Confirm Password"
                  value={signUpForm.ConfirmPassword}
                  onChange={handleSignUpChange}
                />
                {signUpErrors.ConfirmPassword && (
                  <span className="error">{signUpErrors.ConfirmPassword}</span>
                )}
              </div>
              <div className="fileds">
                <label>
                  <i className="fa-solid fa-phone"></i>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="inputs input5"
                  name="Phone"
                  value={signUpForm.Phone}
                  onChange={handleSignUpChange}
                />
                {signUpErrors.Phone && <span className="error">{signUpErrors.Phone}</span>}
              </div>
              <div className="fileds">
                <i className="fa-solid fa-address-card"></i>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="inputs input6"
                  name="Address"
                  value={signUpForm.Address}
                  onChange={handleSignUpChange}
                />
                {signUpErrors.Address && <span className="error">{signUpErrors.Address}</span>}
              </div>
              <div>
                <button className="submitButton" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {isLoginShown && (
          <div className="Login-form">
            <h1>LogIn</h1>
            <form onSubmit={handleLoginSubmit}>
              <div className="fileds">
                <label>
                  <i className="fa-solid fa-envelope"></i>
                </label>
                <input
                  type="text"
                  name="Email"
                  placeholder="Enter Your Email"
                  className="inputs input2"
                  value={loginForm.Email}
                  onChange={handleLoginChange}
                />
                {loginErrors.Email && <span className="error">{loginErrors.Email}</span>}
              </div>

              <div className="fileds">
                <label>
                  <i className="fa-solid fa-lock"></i>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="inputs input3"
                  name="Password"
                  value={loginForm.Password}
                  onChange={handleLoginChange}
                />
                {loginErrors.Password && <span className="error">{loginErrors.Password}</span>}
              </div>
              <div>
                <button className="loginButton" type="submit">
                  LogIn
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

     
    </>
  );
}

export default TestValidation;
