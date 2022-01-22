import './contact.css';
import emailP from '../assets/contact/email.png';
import githubP from '../assets/contact/github.png';
import linkedinP from '../assets/contact/linkedin.png';
import phoneP from '../assets/contact/phone.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
        <div className="contact-info">
          <ul className="contact-list">
            <li>
              <img src={phoneP} alt="phone" className="contact-icon" />
              <p> +46 72 270 59 08</p>
            </li>
            <li>
              <img src={emailP} alt="email" className="contact-icon" />
              <p> andeka011@gmail.com </p>
            </li>
            <li>
              <img src={linkedinP} alt="linkedin" className="contact-icon" />
              <a href="https://www.linkedin.com/in/andjelija-kaludjerovic" target="_blank" rel="noreferrer"> LinkedIn</a>
            </li>
            <li>
              <img src={githubP} alt="github" className="contact-icon" />
              <a href="https://github.com/AndelijaKaluderovic" target="_blank" rel="noreferrer"> Github</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <h2>Contact me</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Subject" name="subject" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="footer">
        <footer>
          <a href="https://github.com/AndelijaKaluderovic" target="_blank" rel="noreferrer"><img src={githubP} alt="github" className="contact-icon" /></a>
          <a href="tel:+46722705908"><img src={phoneP} alt="phone" className="contact-icon" /></a>
          <a href="mailto:andeka011@gmail.com"><img src={emailP} alt="email" className="contact-icon" /></a>
          <a href="https://www.linkedin.com/in/andjelija-kaludjerovic" target="_blank" rel="noreferrer"><img src={linkedinP} alt="linkedin" className="contact-icon" /></a>
        </footer>
      </div>
    </div>
  );
};

export default Contact
