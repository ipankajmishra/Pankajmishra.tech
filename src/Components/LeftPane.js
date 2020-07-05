import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MDBCard, MDBCol, MDBRow, MDBFooter, MDBBtn } from 'mdbreact'
import "./LeftPane.css"
export class LeftPane extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol size="3">

                    </MDBCol>
                    <MDBCol size="6">
                        <MDBCard className="image-card">
                            <img className="image-src" src={require('../assets/pankaj.jpg')} />
                        </MDBCard>

                    </MDBCol>
                    <MDBCol size="3">

                    </MDBCol>
                </MDBRow>
                <div className="center-div">
                    <span className="awesome-name">पंकज मिश्रा</span><br></br>
                    <span className="awesome-name-eng">Pankaj Mishra</span>
                    <div className="social">
                        <a href="mailto:pankaj.mishra2902@gmail.com"><img src="https://img.icons8.com/doodle/48/000000/email.png"/></a>
                        <a href="https://github.com/ipankajmishra" target="_blank"><img src="https://img.icons8.com/doodle/48/000000/github.png"/></a>
                        <a href="https://www.linkedin.com/in/iampankaj-mishra/" target="_blank"><img src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png"/> </a>
                        <a href="https://www.facebook.com/mishrapankaj99/" target="_blank"><img src="https://img.icons8.com/doodle/48/000000/facebook-new.png"/></a>
                       
                    </div>
                    <div className="download-resume">
                         <a href="https://github.com/ipankajmishra/resume/raw/master/Pankaj_Mishra_Resume_.pdf">

                         <MDBBtn style={{padding: 10,"text-transform": "capitalize"}} gradient="blue"><span className="down-res-font" style={{fontSize:"18px",color:"black", fontWeight:"bold"}}>Resume</span>
                         <span>
                         <img style={{height:"30px"}} src="https://img.icons8.com/carbon-copy/100/000000/download.png"/>
                         {/* <img  src="https://img.icons8.com/bubbles/50/000000/download.png"/> */}
                         {/* <img  src="https://img.icons8.com/dotty/80/000000/download.png"/> */}
                         </span>
                         </MDBBtn>
                         </a>
                    </div>
                </div>
                <div>
                   
                 </div>
               
            </div>

        )
    }
}

export default LeftPane
