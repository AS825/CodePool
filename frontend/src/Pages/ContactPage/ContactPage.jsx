import "./ContactPage.css";
import Lydia from "../../assets/Lydia.png";
import { UilLinkedin } from "@iconscout/react-unicons";
import LogoBusiness from "../../assets/logo-white-1.png";

function handleSubmit(e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the form values
  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;
  const email = e.target.elements.email.value;
  const phone = e.target.elements.phone.value;
  const company = e.target.elements.company.value;
  const message = e.target.elements.message.value;

  // Construct the email body
  const subject = "Intrest in Partnership";
  const body = `
  First Name: ${firstName}
  Last Name: ${lastName}
  Email: ${email}
  Phone: ${phone}
  Company: ${company}
  Message: ${message}
`;

  // Construct the mailto link
  const mailtoLink = `mailto:alensacipi2@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the default email client with the mailto link
  window.location.href = mailtoLink;
}
function ContactPage() {
  return (
    <>
      <div className="form-container">
        <div className="container">
          <div className="container-social">
            <a className="link" href="https://business.codecool.com/de/">
              <div className="Logo-link animation">
                <img
                  src={LogoBusiness}
                  alt="codecool"
                  className="CC-Logo-business"
                />
              </div>
            </a>
          </div>
          <div className="img-container">
            <img className="Lydia-img" src={Lydia} alt="image" />
            <div className="contact">
              <div className="contact-info">
                <span className="contact-name">Lydia Jeschko</span>
                <span className="contact-details">
                  Business Development Manager
                </span>
              </div>
              <div className="linked_in">
                <a href="https://www.linkedin.com/in/lydia-jeschko-a66b8bbb/">
                  <UilLinkedin className="linkedIn" />
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="container-text">
              <h2>Intrestet in becoming a Partner?</h2>
              <p>Contact me so we can browse our students!</p>

              <div className="container-header">
                <div className="container-left">
                  <input
                    type="text"
                    placeholder="First Name*"
                    name="firstName"
                  />
                  <input
                    type="email"
                    placeholder="Email address*"
                    name="email"
                  />
                </div>
                <div className="container-right">
                  <input type="text" placeholder="Last Name*" name="lastName" />
                  <input type="tel" placeholder="Phone*" name="phone" />
                </div>
              </div>
              <input type="text" placeholder="Company*" name="company" />
              <textarea placeholder="Message" name="message"></textarea>
              <button className="learn-more" type="submit">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">SEND</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
