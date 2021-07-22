
import React, { useState } from "react"
import {
    Link
  } from "react-router-dom";

export default function TeacherSignup() {
    let teacherSignupStyle = {
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
    

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if(username !== "admin"){
            alert("Incorrect username!!");
        }
        if(password !== "admin" ){
            alert("Incorrect password!!")
        }
    //     if (!validUsername.test(Username)) {
    //         // setUsername(true);
    //         alert("Username is not correct");

    //      }
    //      if (!validPassword.test(password)) {
    //         // setPassword(true);
    //         alert("Password must contain at least a number, special symbol, uppercase and lowercase character");

    //      }
    //      else {
    //         e.addSignUp(Username, password);
    //         setUsername("");
    //         setPassword("");
    //     }
    }

    return (
        <div className="container" style={teacherSignupStyle}>
            <div className="bg-light" style={formStyle}>
                <form>
                    <div className="form-group" style={formGroupStyle}>
                        <label htmlFor="username" style={formLabelStyle}>Enter Your Username</label>
                        <input type="username" className="form-control" id="username1" aria-describedby="usernameHelp" autoComplete="off" placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group" style={formGroupStyle}>
                        <label htmlFor="Password" style={formLabelStyle}>Enter Password</label>
                        <input type="password" className="form-control" id="Password" autoComplete="off" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/teacherInstruction"><button type="submit" onSubmit={submit} className="btn btn-primary" style={formGroupStyle}>Login</button></Link>
                </form>
            </div>
        </div>
    )
}
