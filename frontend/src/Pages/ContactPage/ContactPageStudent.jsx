import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchStudent } from "../../Utils/fetchMethods";
import "../ContactPage/ContactPage.css"
import Lydia from "../../assets/Lydia.png";
import { UilLinkedin } from "@iconscout/react-unicons";
import LogoBusiness from "../../assets/logo-white-1.png";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactPageStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    fetchStudent(id.slice(1)).then((data) => {
      setStudent(data);
    });
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }


  const message = `Sehr geehrte Frau Jescko,
ich interessiere mich für den Schüler ${student.firstName} ${student.lastName}.`;

function handleSubmit(e) {
  e.preventDefault(); 

  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;
  const email = e.target.elements.email.value;
  const phone = e.target.elements.phone.value;
  const company = e.target.elements.company.value;
  const message = e.target.elements.message.value;

  const subject = `Intrest in CodeCool Student ${student.name}` ;
  const body = `
  First Name: ${firstName}
  Last Name: ${lastName}
  Email: ${email}
  Phone: ${phone}
  Company: ${company}
  Message: 
  ${message}
`;

  const mailtoLink = `mailto:alensacipi2@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}

  return (
    <>
      <div className="form-container">
        <div className="container">
          <div data-aos="fade-down" className="container-social">
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
          <div data-aos="zoom-in" className="img-container">
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
          <form data-aos="fade-left" onSubmit={handleSubmit}>
            <div className="container-text">
              <h2>Did you find a student?</h2>
              <p>Contact me so we can help you get a new employee!</p>

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
              {student ? (
                <input
                  type="text"
                  placeholder="Student Name"
                  defaultValue={`${student.firstName} ${student.lastName}`}
                />
              ) : null}
              <textarea
                placeholder="Message"
                defaultValue={student ? message : null}
                name="message"
              ></textarea>
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

export default ContactPageStudent;
