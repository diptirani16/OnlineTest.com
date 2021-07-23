import React, { useState } from 'react'

export default function QuestionForm() {
    const [files, setFiles] = useState();
    let questionFormStyle = {
        minHeight: "76.5vh",
        marginTop: "100px",
    }
    let formDivStyle = {
        margin: "5vh 20vw",
        padding: "2vw 5vw",
        // backgroundColor: "#002d48",
        boxShadow: "0px 2px 4px 0px #002d48",

    }
    let quesFormDivStyle = {
        margin: "5vh 1vw 5vh 20vw",
        padding: "2vw 5vw",
        // backgroundColor: "#002d48",
        boxShadow: "0px 2px 4px 0px #002d48",
        width: "60%"
    }
    let quesOptionStyle = {
        margin: "5vh",
        boxShadow: "0px 2px 4px 0px #002d48",
    }
    const handleFileSelect = (e) => {
        const file = e.target.value
        console.log(file)
        setFiles(e.target.value)
    }

    return (
        <div style={questionFormStyle}>
            <div style={formDivStyle}>
                <form>
                    <div className="form-group">
                        <label htmlFor="testTitle"></label>
                        <input class="form-control form-control-lg" type="text" className="form-control" id="testTitle" placeholder="Untitled Test"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="testDescription"></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Test Description"></textarea>
                    </div>
                </form>
            </div>
            <div className="d-flex">
                <div style={quesFormDivStyle}>
                    <form>
                        <div className="d-flex justify-content-between">
                            <div className="form-group w-75">
                                <label htmlFor="quesTitle"></label>
                                <textarea class="form-control form-control-lg" type="text" rows="3" className="form-control" id="quesTitle" placeholder="Untitled Question"/>
                            </div>
                            <form className="w-25 px-3">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlFile1">
                                        <i class="fas fa-camera"></i>
                                        {files}
                                    </label>
                                    <input style={{ display: 'none' }} type="file" className="form-control-file" id="exampleFormControlFile1" onChange={handleFileSelect}/>
                                </div>
                            </form>

                        </div>
                            <form>
                                <br/><input type="radio" id="html" name="fav_language" value="HTML"/>
                                <input className="mx-3 my-2" type="text" placeholder="option 1"/><br/>
                                <input type="radio" id="css" name="fav_language" value="CSS"/>
                                <input className="mx-3 my-2" type="text" placeholder="option 2"/><br/>
                                <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                                <input className="mx-3 my-2" type="text" placeholder="option 3"/><br/>
                                <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                                <input className="mx-3 my-2" type="text" placeholder="option 3"/><br/>
                            </form>
                    </form>
                </div>
                <div class="btn-group-vertical" role="group" aria-label="Basic example" style={quesOptionStyle}>
                    <button type="button" class="btn"><i class="fa fa-plus-circle"></i></button>
                    <button type="button" class="btn"><i class="fa fa-plus-square"></i></button>
                    <button type="button" class="btn"><i class="fa fa-plus-square"></i></button>
                    <button type="button" class="btn"><i class="fa fa-plus-circle"></i></button>
                    <button type="button" class="btn"><i class="fa fa-plus-square"></i></button>
                    <button type="button" class="btn"><i class="fa fa-plus-square"></i></button>
                </div>
                {/* <div className="list-group" style={quesOptionStyle}>
                    <button type="button" className="list-group-item list-group-item-action">
                        <i class="fa fa-plus-square"></i>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action"><i class="fa fa-plus-square"></i></button>
                    <button type="button" className="list-group-item list-group-item-action"><i class="fa fa-plus-square"></i></button>
                    <button type="button" className="list-group-item list-group-item-action"><i class="fa fa-plus-square"></i></button>
                    <button type="button" className="list-group-item list-group-item-action"><i class="fa fa-plus-square"></i></button>
                </div> */}
            </div>

            

                    <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    )
}
