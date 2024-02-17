import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const Footer =() => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <div className="about">
        <Link to="/about">About us</Link>
      </div>
      <div className="contact">
        <Link to="/contact">Contact us</Link>
      </div>
    </div>
  );
}

export default Footer;