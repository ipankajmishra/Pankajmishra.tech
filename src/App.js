import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MDBRow, MDBCol, MDBFooter } from 'mdbreact'
import "./App.css"
import LeftPane from './Components/LeftPane'
import $ from 'jquery';
export class App extends Component {
  static propTypes = {

  }

  reloadIFrame=()=> {
    var iframe = document.getElementById("iFrame");
      // console.log(iframe.contentDocument.URL); //work control
      if(iframe.contentDocument.URL == "about:blank"){
        iframe.src =  iframe.src;
      }
    }
   
    componentDidMount(){
      $(document).ready(()=> {
        $('#menuiFrame').on('load', () => {
            clearInterval(setInterval("reloadIFrame();", 1000));
            console.log("Finally Loaded"); //work control
        });
    });

    }
    

  render() {
    return (
      <div>
          <div className="main-div">
          <MDBRow >

              <MDBCol className="left-pane" size="4">
                  <LeftPane/>
              </MDBCol>
              <MDBCol className="right-pane" size="8">
              <iframe id="iFrame" src="https://docs.google.com/gview?url=https://github.com/ipankajmishra/resume/raw/master/Pankaj_Mishra_Resume_.pdf&embedded=true" style={{"width":"100%", height:"100%"}} frameborder="0"></iframe>
              </MDBCol>

          </MDBRow>
          
        </div>
        <div className="main-div-mob" style={{"width":"100%", "margin":0}}>
        <iframe id="iFrame" src="https://docs.google.com/gview?url=https://github.com/ipankajmishra/resume/raw/master/Pankaj_Mishra_Resume_.pdf&embedded=true" style={{"width":"100%", height:"100%"}} frameborder="0"></iframe>
        
      </div>
      </div>

    )
  }
}

export default App
