import React from "react";

import './Contacts.css'

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contacts = () => {
  return (

    <div className="footer-contacts">
      <h1 className="footer-title">Contacs</h1>
      <div className="footer-phone">
        <p  className="footer-grey-text">Phone</p>
        <a className="footer-tel" href="tel:+38068121736">+38(068)-12-17-36</a>
      </div>
      <div>
        <p className="footer-grey-text">Work Shedule</p>
        <p>Mon.- Fri. 09:00-19:00</p>
      </div>
      <div>
        <p className="footer-grey-text">E-mail</p>
        <a className="footer-mail" href="mailto:contact@onlyBike.com">contact@onlyBike.com</a>
      </div>
      <div>
        <p className="footer-grey-text">We are in the social.networks</p>
        <div>
          <FacebookIcon sx={{marginRight: 1}} />
          <InstagramIcon sx={{marginRight: 1}}/>
          <YouTubeIcon/>
        </div>
      </div>
    </div>
  );
};

export default Contacts;