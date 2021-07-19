import React from 'react'
import CandidateDetails from './CandidateDetails'
import QuestionSheet from './QuestionSheet'

export default function MainTest() {
    let mainTestStyle = {
        marginTop: "76px",
        fontFamily: "'Bubblegum Sans', cursive",
        backgroundColor: "#002d48",
        color: "white",
    }
    return (
        <>
            <div style={mainTestStyle}>
                <CandidateDetails/>
            </div>
            <div>
                <QuestionSheet/>
            </div>
        </>
    )
}
