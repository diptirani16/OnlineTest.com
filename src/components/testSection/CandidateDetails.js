import React from 'react'
import CountDownTimer from './CountDownTimer'

export default function CandidateDetails() {
    let candidateDetailsStyle = {
        padding: "10px 20px",
    }
    let listStyle = {
        listStyle: "none",
        margin: "0"
    }
    let timerStyle = {
        color: "red"
    }

    const hoursMinSecs = {hours:1, minutes: 10, seconds: 23}

    return (
        <div>
            <nav className="navbar navbar-light" style={candidateDetailsStyle}>
                <ul style={listStyle}>
                    <li>Candidate Name: Dipti Rani</li>
                    <li>Roll no: CT19007</li>
                    <li>Subject: Computer Science</li>
                </ul>
                <ul style={listStyle}>
                <span>Time Remaining: </span> <span  style={timerStyle}><CountDownTimer hoursMinSecs={hoursMinSecs}/></span>
                    <li><button className="btn bg-light py-1 my-sm-0" type="submit">Submit</button></li>
                </ul>
            </nav>
        </div>
    )
}
