import './contact.css';
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
                      <img src="assets/contact/phone.png" alt="phone" className="contact-icon"/>
                      <p> +46722705908</p>
                  </li>
                  <li>
                      <img src="assets/contact/email.png" alt="email" className="contact-icon"/>
                      <p> andeka011@gmail.com </p>
                  </li>
                  <li>
                      <img src="assets/contact/linkedin.png" alt="linkedin" className="contact-icon"/>
                      <a href="https://www.linkedin.com/in/andjelija-kaludjerovic"> LinkedIn</a>
                  </li>
                  <li>
                      <img src="assets/contact/github.png" alt="github" className="contact-icon"/>
                      <a href="https://github.com/AndelijaKaluderovic"> Github</a>
                  </li>
              </ul>
          </div>
        <img src="assets/contact.svg" alt="" />
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
