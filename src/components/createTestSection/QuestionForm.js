import React from 'react'

export default function QuestionForm() {
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
            <div className="d-flex justify-content-between">
                <div style={quesFormDivStyle}>
                    <form>
                        <div className="d-flex">
                            <div className="form-group">
                                <label htmlFor="quesTitle"></label>
                                <input class="form-control form-control-lg" type="text" className="form-control" id="quesTitle" placeholder="Untitled Question"/>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlFile1">Add Image</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                                </div>
                            </form>

                        </div>
                    </form>
                </div>
                <div className="list-group" style={quesOptionStyle}>
                    <button type="button" className="list-group-item list-group-item-action">
                        <i class="fa fa-plus-square"></i>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action"><i class="fa fa-plus-square"></i></button>
                    <button type="button" className="list-group-item list-group-item-action"><i class="fa fa-plus-square"></i></button>
                    <button type="button" className="list-group-item list-group-item-action"><i class="fa fa-plus-square"></i></button>
                    <button type="button" className="list-group-item list-group-item-action"><i class="fa fa-plus-square"></i></button>
                </div>
            </div>

            

                    <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    )
}
