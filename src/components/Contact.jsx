import './contact.css';
import emailjs from '@emailjs/browser';
// import { useRef } from 'react';

const Contact = () => {
//   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k3bbx5s', 'template_3zbpqdw', e.target, 'user_gdmpU7GXuf80yXbe8CZs2')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email"/>
          <input type="text" placeholder="Subject" name="subject" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

  export default Contact
