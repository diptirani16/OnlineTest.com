import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function TeacherInstruction() {
    let teacherInstructionStyle = {
        minHeight: "76.5vh",
        marginTop: "100px",
    }
    let createButtonStyle = {
        position: "absolute",
        marginLeft: "40%"
    }
    return (
        <div style={teacherInstructionStyle}>
            <Link to= "/questionForm"><button type="button" class="btn btn-danger" style={createButtonStyle}>Create Test!!</button></Link>
        </div>
    )
}
