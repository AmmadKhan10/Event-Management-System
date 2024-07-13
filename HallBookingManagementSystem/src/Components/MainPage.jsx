import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function MainPage(){

        
    return(
        <>
         {/* <div>
                <header className="Header">
                    <div className="Right">
                        <img src="/EMS-logo.jpg" alt="" />
                        <h1>EVENT MANAGEMENT SYSTEM</h1>
                    </div> */}
                    {/* <div>
                        <button>LogIn</button>
                        <button>LogIn</button>
                    </div>
                </header>
            </div> */}
        <div className="Main-page">
            <div className="heading">
            <h1 className="Main-heading">EVENT MANAGEMENT<br/><span>SYSTEM</span></h1>
            <img src="/EMS-logo.jpg" alt="" />
            </div>
            <div className="SignupForm">
                <h1>Sign Up</h1>
        <form action="">

            <div className="fileds">
                <label><i class="fa-solid fa-user"></i></label>
                <input 
                type="text" 
                placeholder="Enter Your FullName" 
                // onChange={addData} 
                className="inputs input1" 
                name="FullName" 
                // value={add.FullName} 
                />
            </div>

           <div  className="fileds">
                <label><i class="fa-solid fa-envelope"></i></label>
                <input 
                type="text" 
                name="Email"  
                placeholder="Enter Your Email" 
                // onChange={addData} 
                className="inputs input2" 
                // value={add.Email} 
                />
            </div>

            <div className="fileds">
                <label><i class="fa-solid fa-lock"></i></label>
                <input 
                type="password" 
                placeholder="Enter Your Password" 
                // onChange={addData} 
                className="inputs input3" 
                name="Password" 
                // value={add.Password}
                 />
            </div>
            <div className="fileds">
                <label><i class="fa-solid fa-lock"></i></label>
                <input 
                type="password" 
                placeholder="Confirm Password" 
                // onChange={addData} 
                className="inputs input4" 
                name="Confirm Password" 
                // value={add.ConfirmPassword} 
                />
            </div>
            <div className="fileds">
                <label><i class="fa-solid fa-phone"></i></label>
                <input 
                type="text" 
                placeholder="Enter Your Phone Number" 
                // onChange={addData} 
                className="inputs input5" 
                name="Phone" 
                // value={add.Phone} 
                />
            </div>
            <div className="fileds">
                <i class="fa-solid fa-address-card"></i>
                <input 
                type="text" 
                placeholder="Enter Your Address" 
                // onChange={addData} 
                className="inputs input6" 
                name="Address" 
                // value={add.Address}
                 />
            </div>
            <div>
                <button className="submitButton">Submit</button>
            </div>
                        
        </form>
            </div>

            <div className="Login-form">
                <h1>LogIn</h1>
                <form action="">
                    
                <div  className="fileds">
                <label><i class="fa-solid fa-envelope"></i></label>
                <input 
                type="text" 
                name="Email"  
                placeholder="Enter Your Email" 
                // onChange={addData} 
                className="inputs input2" 
                // value={add.Email} 
                />
            </div>

            <div className="fileds">
                <label><i class="fa-solid fa-lock"></i></label>
                <input 
                type="password" 
                placeholder="Enter Your Password" 
                // onChange={addData} 
                className="inputs input3" 
                name="Password" 
                // value={add.Password}
                 />
            </div>
            <div>
                <button className="loginButton">LogIn</button>
            </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default MainPage;