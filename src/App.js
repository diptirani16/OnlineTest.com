import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginSection from "./components/LoginSection";
import TeacherLogin from "./components/TeacherLogin";
import StudentLogin from "./components/StudentLogin";
import Instruction from "./components/instructionSection/Instruction";
import TeacherInstruction from "./components/createTestSection/TeacherInstruction";
import TeacherSignup from "./components/TeacherSignup";
import QuestionForm from "./components/createTestSection/QuestionForm";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainTest from "./components/testSection/MainTest";




function App() {

  let initDetails;
  if(localStorage.getItem("signUp")===null){
    initDetails = [];
  }
  else{
    initDetails = JSON.parse(localStorage.getItem("signUp"));
  }

  const addSignUp = (email, password) => {
    // console.log("i am adding this todo", email, password);
    let sno;
    if(signUp.length===0){
      sno = 0;
    }
    else{
      sno = signUp[signUp.length-1].sno + 1
    }
    const mySignUpDetails = {
      sno: sno,
      email: email,
      password: password,
    }
    setSignUp([...signUp, mySignUpDetails]);
    // console.log(myTodo);
}

const [signUp, setSignUp] = useState(initDetails);

useEffect(() => {
  localStorage.setItem("signUp", JSON.stringify(signUp));
}, [signUp])


  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <LoginSection/>
          </Route>
          <Route exact path="/teacherLogin">
            <TeacherLogin addSignUp={addSignUp}/>
          </Route>
          <Route exact path="/studentLogin">
            <StudentLogin/>
          </Route>
          <Route exact path="/instruction">
            <Instruction/>
          </Route>
          <Route exact path="/mainTest">
            <MainTest/>
          </Route>
          <Route exact path="/teacherSignup">
            <TeacherSignup/>
          </Route>
          <Route exact path="/teacherInstruction">
            <TeacherInstruction/>
          </Route>
          <Route exact path="/questionForm">
            <QuestionForm/>
          </Route>
        </Switch>
        <Footer/>

      </Router>
      
            
          
              
    </div>
  );
}

export default App;
