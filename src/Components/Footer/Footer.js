import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className = "programming_footer">
                <div className = "social_media">
            <a href="https://www.linkedin.com/in/naven-kennedy-36471654/" target="_blank" rel="noopener noreferrer"> <img className = "twitter_footer" src = "img/twitter.png"></img></a>
            <a href="https://www.linkedin.com/in/naven-kennedy-36471654/" target="_blank" rel="noopener noreferrer">   <img className = "linkedin_footer" src = "img/linkedin.png"></img></a>
            <a href="https://github.com/Bossman1017/Portfolio-Project" target="_blank" rel="noopener noreferrer">   <img className = "github_footer" src = "img/github.svg"></img></a>
            </div>
           <div className = "word_div">
            <p>Naven Kennedy's Portfolio &copy; 2020</p>
            <p>Last Date Updated: 07/17/2020</p>
            </div>
            </div>
            </div>
           
            )
        }
        
export default Footer;