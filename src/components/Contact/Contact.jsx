import React from 'react'
import './Contact.css';
import msg from '../../assets/images/msg-icon.png'
import mail from '../../assets/images/mail-icon.png'
import phone from '../../assets/images/phone-icon.png'
import location from '../../assets/images/location-icon.png'
import arrow from '../../assets/images/white-arrow.png'
const Contact = () => {

    //form code from web3Forms site
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0d16158b-05a2-4cc0-84fd-240b5971ea6e");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="" /></h3>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old  Lorem Ipsum is not simply random text. It has roots in a piece of classical. </p>
            <ul>
                <li><img src={mail} alt="" /> arjun7172003@gmail.com</li>
                <li><img src={phone} alt="" /> +91 9342429886</li>
                <li><img src={location} alt="" /> 5/1 Levenji puram 1st street,<br/>Thoothukudi, TamilNadu</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Your Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your phone number' required/>
                <label>Write your message here</label>
                <textarea rows={6} type="text" name="message" placeholder='Enter your message' required/>
                <button type='submit' className='btn dark-btn' >Submit now <img src={arrow} alt="" /></button>

            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact