import React from "react";

import FooterLogo from '../FooterLogo/FooterLogo.jsx'
import Clients from "../Clients/Clients";
import Company from "../Company/Company";
import Contacts from "../Contacts/Contacts";
import FooterVisa from "../FooterIconPay/FooterVisa";
import FooterIconMaster from "../FooterIconPay/FooterIconMaster";
import FooterCopyrite from "../FooterCopyrite/FooterCopyrite.jsx";

import "./FooterStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterLogo size={"175px"} />
        <Company />
        <Clients />
        <Contacts />
      </div>
      <div className="footer-pay">
        <FooterVisa />
        <FooterIconMaster />
      </div>
      <FooterCopyrite/>
    </footer>
  );
};

export default Footer;