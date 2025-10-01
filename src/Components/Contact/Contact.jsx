import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


export default function () {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>send as a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima vitae alias corporis sed ut deserunt laudantium eius ipsa fuga tempore error aut dolorem, iure accusantium, accusamus in esse explicabo aspernatur.</p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@gerat.com</li>
                <li><img src={phone_icon} alt="" />1234567890</li>
                <li><img src={location_icon} alt="" />mela stree,adhnakkurichi,sndurai,ariyalur - 621719</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label>phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile number' required/>
                <label>Write Your message here</label>
                <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span></span>
        </div>
    </div>
  )
}
