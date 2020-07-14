import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <div>
             <div>
    <h1 className="heading_contact">Contact Me</h1>
    <form class="myForm" >
        <label class="label--center">Name</label>
        <input type="text" placeholder="Enter First And Last Name Here..." name="name" id="name--position"  />
        <label class="label--center">Email</label>
        <input type="text" placeholder="Enter Email Address Here..." name="email" id="email--position"  />
        <label class="label--center">Phone Number</label>
        <input type="number" placeholder="Enter Phone Number Here..." name="phone number" id="email--position"  />
        <label class="label--center">Comments</label>
        <textarea rows="4" class="comment-box" cols="50" placeholder="Share Any Feedback..." id="comments--position"></textarea>
        <div class="container">
            <button class="button--item" type="submit" >Comment Until Your Heart Is Content</button>
        
        </div>
    </form>
    
</div>
            </div>
            )
        }
        
export default Contact;