import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function Instruction() {
    // let instructionStyle = {
    //     minHeight: "76.5vh",
    // }
    let mainStyle = {
        marginTop: "75px",
        backgroundColor: "#002d48",
        fontFamily: "'Bubblegum Sans', cursive",
        minHeight: "75vw"

    }
    let instructionContentStyle = {
        backgroundColor: "white",
        width: "80vw",
        minHeight: "850px",
        marginTop: "10vh",
        position: "absolute",
        padding: "10vh"
    }
    let startButtonStyle = {
        position: "absolute",
        marginLeft: "40%"
    }
    return (
        <div style={mainStyle}>
            <div className="container">
                <div style={instructionContentStyle}>
                    <h2>Rules & Instructions</h2><br></br>
                    <h5>General information:</h5>

                        <ol>
                            <li>The examination does not require using any paper, pen, pencil and calculator</li>
                            <li>Every student will take the examination on a Laptop/Desktop/Smart Phone</li>
                            <li>On computer screen every student will be given objective type Multiple Choice
                                Questions (MCQs).</li>
                            <li>Each student will get questions and answers in different order selected randomly
                                from a fixed Question Databank.</li>
                            <li>The students just need to click on the Right Choice / Correct option from the
                                multiple choices /options given with each question. </li>
                            <li>For Multiple Choice Questions,
                                each question has four options, and the candidate has to click the appropriate
                                option.</li>
                            <li>The total number of questions, duration of examination, will be different based on
                                the course and teacher's instruction, the detail is available on your screen</li>
                        </ol>
                        <h5>Exam Instructions:</h5>
                        <ol>
                            <li>The Time of the examination begins only when the ‘Start Test’ button is pressed.</li>
                            <li>The student proceeds answering the questions one by one by clicking on the save & next button below the question.</li>
                            <li>The examinee can move to First, Last, Previous, Next and unanswered questions by
                            clicking on the buttons with respective labels displayed on screen throughout the
                            test.</li>
                            <li>The instructions about the not visited, answered, not answered questions will be available throughout the test.</li>
                            <li>The answers can be changed at any time during the test and can be saved again. </li>
                            <li>The Time remaining is shown in the Right Top Corner of the screen.</li>
                            <li>The examination will automatically quit when the time limit is over OR alternatively if
                            examinee finishes the exam before time he/she can quit by pressing the ‘Submit’
                            button. The students don’t click the “Submit” Button until the student want to
                            quit from Examination</li>
                        </ol>
                        <h5>Teacher's Instruction:</h5>
                        <ol>
                            <li>The total number of questions are 40.</li>
                            <li>All questions are compulsory and each carries One mark.</li>
                            <li>Total time duration of examination is 2 hours.</li>
                            <li>The Subjects or topics covered in the exam will be as per the Syllabus</li>
                            <li>There will be NO NEGATIVE MARKING for the wrong answers.</li>
                        </ol>
                        <br/>
                    <Link to= "/mainTest"><button type="button" class="btn btn-danger" style={startButtonStyle}>Start Test!!</button></Link>

                        
                        

                </div>

            </div>

        </div>
    )
}
