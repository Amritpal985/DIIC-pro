import { wait } from "@testing-library/user-event/dist/utils"
import React, { useState } from "react"
import Back from "./Back"
import "./Contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  const save_contact = async (e) => {
    e.preventDefault();
    const user = { name, email, subject, message };
    console.log(user);
   await fetch("http://localhost:5000/contact",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(user)
      })
      const list = await fetch("http://localhost:5000/contact");
      console.log(list);
  }
  const update_name = (e) => {
    setname(e.target.value)
  }
  const update_email = (e) => {
    setemail(e.target.value)
  }
  const update_subject = (e) => {
    setsubject(e.target.value)
  }
  const update_message = (e) => {
    setmessage(e.target.value)
  }
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [subject, setsubject] = useState('');
  const [message, setmessage] = useState('');

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Sector 22 Chandigarh 145</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + xxxx xxx xx</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' value={name} onChange={update_name} placeholder='Name' />
                <input type='email' value={email} onChange={update_email} placeholder='Email' />
              </div>
              <input type='text' value={subject} onChange={update_subject} placeholder='Subject' />
              <textarea value={message} onChange={update_message} cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn' onClick={save_contact}>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact