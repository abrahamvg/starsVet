import React from "react";
import "./secondDiv.css";
import Cat from "./assets/cat";
import abc from "../assets/abc.svg";
import yo from "../assets/yo.svg"


function SecondDiv(){


    return(
        <div className="Welcome">
            
            <h1 className="firstHeading">Welcome to the</h1>
            <h1 className="secondHeading">Stars Vet Animal & Bird Hospital</h1>
            <p className="ff">lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            <Cat/>
            <img className= "dog"src={abc} alt="" />
            <img className="dog2" src={yo}></img>
        </div>
    )
}


export default SecondDiv
