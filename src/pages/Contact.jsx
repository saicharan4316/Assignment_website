import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/Contact.css";
import {useNavigate} from 'react-router-dom'
import { use } from "react";

function Contact() {
  let navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    navigate("/")
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <TextField label="Your Name" variant="outlined" fullWidth required />
        <TextField label="Your Email" type="email" variant="outlined" fullWidth required />
        <TextField label="Your Message" multiline rows={4} variant="outlined" fullWidth />
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: "10px" }}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default Contact;
