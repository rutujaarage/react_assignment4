import React from 'react'
import { iconName } from "react-icons/";
const Contact = () => {

    let name = "©Rutuja arage"
    return (
        < div className="contact">
            <h1>Contact Us</h1>
            <div className='cont' >
                <br />
                <br />
                <div>
                    📞   Phone Number: <a href="tel:+91-7972643968">+91 7972643968</a>
                    <br />
                    <br />
                    📧 E-Mail: <a href="mailto : rutujaarage99@gmail.com">rutujaarage99@gmail.com</a>
                    <br /><br />
                    <h3 >{name}</h3>
                </div>
            </div>
        </div>
    )

}

export default Contact;
