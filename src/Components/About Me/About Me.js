import React from 'react';
import './About Me.css';


const AboutMe = () => {
    return (
        <div>
            <h1 className = "About_header">Who Am I ...</h1>
           
            <div className = "About_container">
                <div className = "star-five">
                
            </div>
            <div className="about-box">
            <div className = "about-text">
            <p className = "text_1">Hello my name is Naven Kennedy ,I'm an aspiring and dedicated front-end developer who is a soon-to-be graduate of the Road To Hire Coding Fellowship. Road To Hire Program is a strenuous 6 month program that aims to develop successful students in the software development field.Throughout this fellowship I have gained many improvements in my programming skills. These skills include working with Git, Github and the terminal. Languages that include HTML, CSS, JavaScript, Node, and React. I've also gained many professional development skills that include time management, email etiquette, debating, team building and problem solving.  </p>
            </div>
            <div className ="about_imgbox">
            <img className = "About_picture" src = "img/Kennedy.jpg" alt="hello"></img>
            </div>
            </div>
            </div>
           </div>
            )
        }

export default AboutMe;