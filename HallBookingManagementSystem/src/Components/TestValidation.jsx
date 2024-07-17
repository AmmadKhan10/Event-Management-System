import { useState } from "react";
import axios from "axios";
function TestValidation() {
    const [isSignUpShown, setIsSignUpShown] = useState(false);
    const [isLoginShown, setIsLoginShown] = useState(false);
    const [add, setAdd] = useState({ FullName: '', Email: '', password:'', ConfimPassword:'', Phone: '', Address: '' });
    const [post, setPost] =useState({Email: '', password:''})
   
   const addData = (e) => {
    setAdd({...add, [e.target.name] : e.target.value});
   }

   const loginPost = (e) => {
    setPost({...post, [e.target.name]: e.target.value});
   }
  
   const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8030/api/Users/Registration', {
        fullName:add.FullName,
        emailAddress:add.Email,
        password:add.password,
        confirmPassword:add.ConfimPassword,
        phoneNumber:add.Phone,
        address:add.Address
    })
    .then((res) => {
        setAdd(add);
        alert('User registered successfully');
        setAdd({ FullName: '', Email: '', password:'', ConfimPassword:'', Phone: '', Address: '' });
    
    })
   }

   const handlelogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8030/api/Users/Login',{
        emailAddress:add.Email,
        password:add.password
    })
    .then ((res)=> {
        setPost(post);
        alert('User login successfully');
    })
   }
    const handleSignUpClick = () => {
      setIsSignUpShown(true);
      setIsLoginShown(false);
    };
  
    const handleLoginClick = () => {
      setIsSignUpShown(false);
      setIsLoginShown(true);
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
              <form action="">
                <div className="fileds">
                  <label>
                    <i className="fa-solid fa-user"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your FullName"
                    className="inputs input1"
                    name="FullName"
                    onChange={addData}
                  />
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
                    onChange={addData}
                  />
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
                    onChange={addData}
                  />
                </div>
                <div className="fileds">
                  <label>
                    <i className="fa-solid fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="inputs input4"
                    name="ConfirmPassword"
                    onChange={addData}
                  />
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
                    onChange={addData}
                  />
                </div>
                <div className="fileds">
                  <i className="fa-solid fa-address-card"></i>
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="inputs input6"
                    name="Address"
                    onChange={addData}
                  />
                </div>
                <div>
                  <button onClick={handleSubmit} className="submitButton">Submit</button>
                </div>
              </form>
            </div>
          )}
  
          {isLoginShown && (
            <div className="Login-form">
              <h1>LogIn</h1>
              <form action="">
                <div className="fileds">
                  <label>
                    <i className="fa-solid fa-envelope"></i>
                  </label>
                  <input
                    type="text"
                    name="Email"
                    placeholder="Enter Your Email"
                    className="inputs input2"
                    onChange={loginPost}
                  />
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
                    onChange={loginPost}
                  />
                </div>
                <div>
                  <button onClick={handlelogin} className="loginButton">LogIn</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </>
    );
  }
  
  export default TestValidation;