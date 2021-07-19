import React from 'react'
import './OnChangeButton.css'
class OnChangeButton extends React.Component {

    constructor(){
           super();
  
           this.state = {
                black: true
           }
      }
  
      changeColor(){
          this.setState({black: !this.state.black})
      }
  
      render(){
          let btn_class = this.state.black ? "blackButton" : "whiteButton";
  
          return (
               <div>
                   <button className={btn_class}
                           onClick={this.changeColor.bind(this)}>
                             Button
                    </button>
               </div>
          )
      }
  }
  export default OnChangeButton;