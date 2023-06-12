import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchStudent } from "../Utils/fetchMethods"


// ContactForm component to display the contact form
export default function ContactForm({ onClose }) {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // ...
    // Close the modal or navigate to a "Thank You" page
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" placeholder="Your Message" rows="4" />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}