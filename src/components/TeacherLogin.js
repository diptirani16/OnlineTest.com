import React, { useState } from "react"
import { validEmail, validPassword } from './Regex.js';
import {
    Link
  } from "react-router-dom";

export default function TeacherLogin() {
    let teacherLoginStyle = {
        marginTop: "100px",
        padding: "20px",
        minHeight: "77vh",
        fontFamily: "'Bubblegum Sans', cursive",
    }
    let formStyle = {
        width: "50%",
        boxShadow: "2px 2px 10px #002d48",
        padding: "2rem",
        position: "absolute",
        top: "20%",
        left: "25%"
    }
    let formGroupStyle = {
        margin: "15px",
    }
    let formLabelStyle = {
        margin: "5px"
    }
    let loginStyle = {
        position: "absolute",
        top: "80%",
        left: "84%",
        border: "1px solid #002d48"
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    
    // const emailRegex = '/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/'
    // const passwordRegex = '/[A-Z]/.test(p) && /[0-9]/'

    const submit = (e) => {
        e.preventDefault();
        if(!email && !password && !confirmPassword){
            alert("All the inputs are required");
        }
        if(password != confirmPassword){
            alert("Password doesn't match.")
        }
        if (!validEmail.test(email)) {
            // setEmail(true);
            alert("Email is not correct");

         }
         if (!validPassword.test(password)) {
            // setPassword(true);
            alert("Password must contain at least a number, special symbol, uppercase and lowercase character");

         }
         else {
            e.addSignUp(email, password);
            setEmail("");
            setPassword("");
        }
        // else{
        //     if((email !== {emailRegex}) && (password !== {passwordRegex})){
        //         alert("Invalid Password");
        //     }
            
        // }
    }


    return (
        <div className="container" style={teacherLoginStyle}>
            <div className="bg-light" style={formStyle}>
                <form onSubmit={submit}>
                    <div className="form-group" style={formGroupStyle}>
                        <label htmlFor="Email" style={formLabelStyle}>Email Address</label>
                        <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp" autoComplete="off" placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group" style={formGroupStyle}>
                        <label htmlFor="Password" style={formLabelStyle}>Password</label>
                        <input type="password" className="form-control" id="Password" autoComplete="off" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group" style={formGroupStyle}>
                        <label htmlFor="ConfirmPassword" style={formLabelStyle}>Confirm Password</label>
                        <input type="password" className="form-control" id="ConfirmPassword" autoComplete="off" placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={formGroupStyle}>Submit</button>
                </form>
                    <Link to="/teacherSignup"><button type="submit" className="btn btn-light" style={loginStyle}>Login</button></Link>
            </div>
        </div>
    )
}
