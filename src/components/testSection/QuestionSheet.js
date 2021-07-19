// import { Button } from 'bootstrap'
import React, { useState, useEffect } from 'react'

export default function QuestionSheet() {
    const noOfQues = 56;
    const [buttonsArray, setButtonsArray] = useState([]);
    useEffect(() => {
        const x = new Array(noOfQues).fill(null).map((_, index) => index + 1);
        setButtonsArray(x)
    }, [])

    let cardStyle = {
        width: "60%",
        margin: "2% 5%",
        padding: "10px",
        border: "none",
        height: "50px"
    }
    let buttonStyle = {
        padding: "5px 20px",
        margin: "10px 30px",
        // border: "1px solid black"
    }
    let guideStyle = {
        textAlign: "center",
        // marginTop: "-5%",
        paddingTop: "12px",
    }
    let quesButtonContainerStyle = {
        width: "26%",
        textAlign: "center",
        marginTop: "2%",
        padding: "10px",
        minHeight: "200px"
    }
    let quesButtonStyle = {
        width: "40px",
        height: "40px",
    }
    
    return (<>

        <div className="d-flex">

            <div className="d-flex" style={guideStyle}>
                <button className="btn btn-dark" style={buttonStyle}>34</button><div style={buttonStyle}>Current Question</div>
            </div>
            <div className="d-flex" style={guideStyle}>
                <button className="btn btn-outline-dark" style={buttonStyle}>45</button><div style={buttonStyle}>Not Visited</div>
            </div>
            <div className="d-flex" style={guideStyle}>
                <button className="btn btn-warning text-light" style={buttonStyle}>21</button><div style={buttonStyle}>Not Answered</div>
            </div>
            <div className="d-flex" style={guideStyle}>
                <button className="btn btn-success" style={buttonStyle}>26</button><div style={buttonStyle}>Answered</div>
            </div>

        </div>
        <hr></hr>

        <div className="d-flex justify-content-between">
            <div className="card" style={cardStyle}>
                <div className="card-title">
                    <b> 1. A broadcast circuit broadcasts at 300 m band. A condenser of capacitance 2.4 lµF is available. The value of the inductance required for resonant circuit is:
                        A broadcast circuit broadcasts at 300 m band. A condenser of capacitance 2.4 lµF is available. The value of the inductance required for resonant circuit</b>
                </div>
                <div className="card-body d-flex justify-content-between m-4">
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Option 1
                                </label>
                        </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Option 2
                                </label>
                            </div>

                        </div>
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Option 3
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Option 4
                                </label>
                            </div>

                        </div>
                        <div></div>


                    </div>
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-outline-dark" style={buttonStyle}>Prev</button>
                        <button className="btn btn-warning text-light" style={buttonStyle}>Skip</button>
                        <button className="btn btn-success" style={buttonStyle}>Save & Next</button>
                    </div>
                </div>


                <div style={quesButtonContainerStyle}>
                    {
                        buttonsArray.map((x) => <button className="btn btn-outline-dark mb-1" style={quesButtonStyle}>{x}</button>)

                    }
                </div>



            </div>

    </>
        )
        
}
