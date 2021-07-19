import React from 'react'
import teacherLogin from './images/teacherLogin.png'
import studentLogin from './images/studentLogin.png'
import {
    Link,
  } from "react-router-dom";

export default function LoginSection() {
    let loginSectionStyle = {
        minHeight: "76.5vh",
        marginTop: "100px",
    }
    let cardStyle = {
        margin: "2rem",
        boxShadow: "2px 2px 10px #002d48",
    }
    return (
        <div className="container" style={loginSectionStyle}>
            <div className="card-container d-flex">
                <div className="card"  style={cardStyle}>
                    <Link to="/teacherLogin"><img src={teacherLogin} className="card-img-top" alt="Card image cap"/></Link>
                </div>
                <div className="card"  style={cardStyle}>
                    <Link to="/studentLogin"><img src={studentLogin} className="card-img-top" alt="Card image cap"/></Link>
                </div>  

            </div>
        </div>
    )
}
